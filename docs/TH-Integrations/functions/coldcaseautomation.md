# coldCaseAutomation

## Metadata

- **Version:** `1.0.0`
- **Type:** Generic Function
- **Function Type:** `API`
- **Kind:** `function`
- **Mode:** `Enabled`
- **Source File:** `integrations/generic/functions/function_API_coldCaseAutomation.js`

## Description

This function will find the "New" or "InProgress" cases that were not updated since one month. For each case, add a tag "cold-case"

## Code

```javascript
function handle(input, context) {
    const now = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(now.getMonth() - 1);
    const filters = [
        {
            _name: "filter",
            _and: [
                {
                    _or: [{ _field: "stage", _value: "New" }, { _field: "stage", _value: "InProgress" },]
                },
                {
                    _lt: { _field: "_updatedAt", _value: lastMonth.getTime() }
                }
            ]
        }
    ];
    const list = context.caze.find(filters);
    const authorizedCases = list
        .filter(caze => caze.userPermissions.indexOf("manageCase/update") > 0);
    console.log(authorizedCases.map(c => c.number));
    console.log(`Will update ${authorizedCases.length} cases`);

    authorizedCases.forEach(caze => {
        context.caze.update(caze._id, { addTags: ["cold-case"] })
    });
}
```

---

*This documentation is auto-generated. Do not edit manually.*
