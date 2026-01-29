# computeCustomMetrics

## Metadata

- **Version:** `1.0.0`
- **Type:** Generic Function
- **Function Type:** `Notifier`
- **Kind:** `function`
- **Mode:** `Enabled`
- **Source File:** `integrations/generic/functions/function_notifier_computeCustomMetrics.js`

## Description

This function computes two key response metrics for every case in TheHive:
– **Time‑to‑Respond (TTR)**: delay (in minutes) between the case's start date and the *earliest* task in the
  "3 ‑ Communication", "4 ‑ Containment", or "5 ‑ Eradication" task groups.
– **Time‑to‑Contain (TTC)**: delay (in minutes) between the case's start date and the *latest* task in the
  "4 ‑ Containment" task group.

It can run in two modes:
• **Batch mode** (no `input` object) – loops through a page of cases to back‑fill or refresh metrics.
• **Event‑driven mode** (`input` is a case payload) – updates metrics for the affected case only.

The function writes both the raw task timestamp and the computed metric to the following custom fields
(create them in your Case template):
  • `timestamp‑time‑to‑respond` (Number – epoch ms)
  • `time‑to‑respond‑in‑minutes` (Number)
  • `timestamp‑time‑to‑contain` (Number – epoch ms)
  • `time‑to‑contain‑in‑minutes` (Number)

Param:
  – **input**: Either an empty object (batch trigger) or the Case JSON injected by TheHive when the
               notification fires. This triggers a search to find all valid cases to update.
  – **context**: Utility object providing access to TheHive API helpers (`query`, `caze`, etc.). This applies the metrics computation only on the notified case object.

Prerequisites:
  • The custom fields listed above must exist in the tenant.
  • Task groups must follow the naming convention shown here.
  • You may adjust page size, task groups, or field names to suit your workflows & even your own computation logic for your custom metrics. Those are shown as examples, relying on SOC-101 Metrics definition and SANS Incident Handler's handbook style tasks.


## Code

```javascript
function mainRespondMetricTrigger(input, context) {
  const taskGroup = ["3 - Communication", "4 - Containment", "5 - Eradication"];
  const timestampCustomField = "timestamp-time-to-respond";
  const metricCustomField = "time-to-respond-in-minutes";
  const timestampType = "earliest";
  const customStartDateField = "startDate";

  if (Object.entries(input).length === 0 && input.constructor === Object) {
    const filtersQuery = [
      {
        _name: "listCase"
      },
      {
        _name: "page",
        from: 0,
        to: 10
      }
    ];

    processCases(taskGroup, timestampCustomField, metricCustomField, filtersQuery, context, timestampType, customStartDateField);
  } else {
    processSingleCase(input, taskGroup, timestampCustomField, metricCustomField, context, timestampType, customStartDateField);
  }
}

function mainContainMetricTrigger(input, context) {
  const taskGroup = ["4 - Containment"];
  const timestampCustomField = "timestamp-time-to-contain";
  const metricCustomField = "time-to-contain-in-minutes";
  const timestampType = "latest";
  const customStartDateField = "endDate";

  if (Object.entries(input).length === 0 && input.constructor === Object) {
    const filtersQuery = [
      {
        _name: "listCase"
      },
      {
        _name: "page",
        from: 0,
        to: 10
      }
    ];

    processCases(taskGroup, timestampCustomField, metricCustomField, filtersQuery, context, timestampType, customStartDateField);
  } else {
    processSingleCase(input, taskGroup, timestampCustomField, metricCustomField, context, timestampType, customStartDateField);
  }
}

function updateOrAddCustomFields(customFields, customFieldUpdates) {
  customFieldUpdates.forEach(customFieldUpdate => {
    if (customFieldUpdate.value === null || customFieldUpdate.value === '') {
      return;
    }

    let fieldFound = false;

    customFields = customFields.map(field => {
      if (field.name === customFieldUpdate.name) {
        fieldFound = true;
        return { ...field, value: customFieldUpdate.value };
      }
      return field;
    });

    if (!fieldFound) {
      customFields.push({
        name: customFieldUpdate.name,
        value: customFieldUpdate.value
      });
    }
  });

  return customFields;
}

function processSingleCase(caze, taskGroups, timestampCustomField, metricCustomField, context, timestampType = "earliest", customStartDateField = "startDate") {
  console.log("---------------------");
  const caseId = caze._id;
  const caseCustomFields = caze.customFields;
  const caseStartDate = caze.startDate;
  //const caseStartDate = caze[customStartDateField];
  console.log(`Processing case ID: ${caseId}`);
  console.log(`Case Number: ${caze.number}`);

  const taskFilters = [
    {
      _name: "getCase",
      idOrName: caseId
    },
    {
      _name: "tasks"
    }
  ];

  const tasksOfCase = context.query.execute(taskFilters);
  const filteredTasks = tasksOfCase.filter(task => taskGroups.includes(task.group));
  console.log(`Filtered tasks in case: ${filteredTasks.length}`);
  const filteredTasksWithStartDate = filteredTasks.filter(task => task.startDate !== undefined);
  console.log(`Filtered tasks with start date in case: ${filteredTasksWithStartDate.length}`);
  const startDates = filteredTasksWithStartDate.map(task => new Date(task.startDate).getTime());

  let targetStartDate;
  if (timestampType === "earliest") {
    targetStartDate = Math.min(...startDates);
    console.log(`Earliest ${customStartDateField}: ${targetStartDate}`);
  } else if (timestampType === "latest") {
    targetStartDate = Math.max(...startDates);
    console.log(`Latest ${customStartDateField}: ${targetStartDate}`);
  } else {
    console.error("Invalid timestampType. Please use 'earliest' or 'latest'.");
    return;
  }

  let metricTimeMinutes = null;
  let timestampValue = targetStartDate;
  if (Number.isFinite(targetStartDate) && Number.isFinite(caseStartDate)) {
    metricTimeMinutes = (targetStartDate - caseStartDate) / (60 * 1000);
  } else {
    console.log(`CaseStartDate ${caseStartDate}: targetStartDate ${targetStartDate}`);
    timestampValue = null;
  }

  console.log(`Value for ${timestampCustomField}: ${timestampValue}`);
  console.log(`Value for ${metricCustomField}: ${metricTimeMinutes}`);

  const customFieldToAdd = [
    {
      name: timestampCustomField,
      value: timestampValue
    },
    {
      name: metricCustomField,
      value: metricTimeMinutes
    }
  ];

  const customFieldsUpdated = updateOrAddCustomFields(caseCustomFields, customFieldToAdd);

  const caseUpdate = {
    customFields: customFieldsUpdated
  };

  context.caze.update(caseId, caseUpdate);
  console.log("Case update completed!");
  console.log("--");
}

function processCases(taskGroups, timestampCustomField, metricCustomField, filtersQuery, context, timestampType = "earliest", customStartDateField = "startDate") {
  console.log("---------------------");
  console.log(`Listing all cases with ${metricCustomField}`);

  const list = context.query.execute(filtersQuery);
  const count = list.length;
  console.log(`The count of objects in the list is: ${count}`);

  list.forEach(caze => {
    processSingleCase(caze, taskGroups, timestampCustomField, metricCustomField, context, timestampType, customStartDateField);
  });
}

function handle(input, context) {
  if (Object.entries(input).length === 0 && input.constructor === Object) {
    console.log("HANDLE - No input -- Triggering basic behaviour on a list of cases");
    mainRespondMetricTrigger(input, context);
    mainContainMetricTrigger(input, context);
  } else {
    console.log("HANDLE - Input Found -- Event-driven");
    //processSingleCase(input, ["4 - Containment"], "timestamp-time-to-contain", "time-to-contain-in-minutes", context, "latest", "endDate");
    mainRespondMetricTrigger(input, context);
    mainContainMetricTrigger(input, context);
  }
}
```

---

*This documentation is auto-generated. Do not edit manually.*
