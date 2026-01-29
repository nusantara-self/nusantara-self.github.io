# Functions Catalog

Example functions for TheHive. Use them as-is or as inspiration for your own.

**Create your own:** [Functions](https://docs.strangebee.com/thehive/user-guides/organization/configure-organization/manage-functions/create-a-function/) - [Feeders](https://docs.strangebee.com/thehive/user-guides/organization/configure-organization/manage-feeders/create-a-feeder/)

## 📊 Summary

- **Total Functions:** 14
- **Generic Functions:** 7
- **Vendor-Specific Functions:** 7
- **Vendors with Functions:** 6

## 🔧 Generic Functions

These functions are vendor-agnostic and can be used across all TheHive installations:

### [assignAlert](assignalert.md) `v1.0.0`

**Type:** Notifier
**Mode:** Enabled

This function is designed to trigger on alert creation event. It automatically assignes severity High & Critical alerts to a given user

📄 [View full documentation](assignalert.md)

---

### [assignToMe](assigntome.md) `v1.0.0`

**Type:** Action:Case
**Mode:** Enabled

This function changes the assignee of the Case and all the associated tasks to the user who launches the function

📄 [View full documentation](assigntome.md)

---

### [automatedIgnoreSimilarityForNoisyObservables](automatedignoresimilarityfornoisyobservables.md) `v1.0.0`

**Type:** Notifier
**Mode:** Enabled

This function is intended to be triggered on ObservableCreated events. It automatically sets ignoreSimilarity to true for observables matching a known list of common, noisy, or non-actionable values (such as localhost, private IPs, and generic hostnames..). This reduces alert noise and avoids false correlation in TheHive. Note that it is a workaround, and such issues are better managed in your alert ingestion pipeline(s)

📄 [View full documentation](automatedignoresimilarityfornoisyobservables.md)

---

### [changeImportedAlertStatus](changeimportedalertstatus.md) `v1.0.0`

**Type:** Notifier
**Mode:** Enabled

This function is designed to trigger on case closed event. It automatically changes imported alerts to a given custom status

📄 [View full documentation](changeimportedalertstatus.md)

---

### [coldCaseAutomation](coldcaseautomation.md) `v1.0.0`

**Type:** API
**Mode:** Enabled

This function will find the "New" or "InProgress" cases that were not updated since one month. For each case, add a tag "cold-case"

📄 [View full documentation](coldcaseautomation.md)

---

### [computeCustomMetrics](computecustommetrics.md) `v1.0.0`

**Type:** Notifier
**Mode:** Enabled

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


📄 [View full documentation](computecustommetrics.md)

---

### [deleteIPObsFromAlert](deleteipobsfromalert.md) `v1.0.0`

**Type:** Action:Alert
**Mode:** Enabled

This function will delete all the IP Observable from an alert

📄 [View full documentation](deleteipobsfromalert.md)

---

## 🏢 Vendor-Specific Functions

### Airtable

**Vendor:** [Airtable](../vendors/Airtable/overview)

#### [alertFromAirtable](airtable-alertfromairtable.md) `v1.0.0`
**Kind:** `function`

This function creates alerts from data coming from a Airtable database. It checks the alert does not already exist, then creates the alert, and completes type, source, source-ref, title, description and tags

📄 [View full documentation](airtable-alertfromairtable.md)

---

### CrowdStrike Falcon

**Vendor:** [CrowdStrike Falcon](../vendors/CrowdstrikeFalcon/overview)

#### [CRWDAlertIngestion](crowdstrike-falcon-crwdalertingestion.md) `v1.0.0`
**Kind:** `function`

Ingests CrowdstrikeFalcon Alerts, also processes observables & TTPs.

📄 [View full documentation](crowdstrike-falcon-crwdalertingestion.md)

---

### JAMFProtect

**Vendor:** [JAMFProtect](../vendors/JAMFProtect/overview)

#### [createAlertFromJAMFProtect](jamfprotect-createalertfromjamfprotect.md) `v1.0.0`
**Kind:** `function`

Ingests alerts from JAMF Protect. Extracts analytic details, host and user information, MITRE ATT&CK tags, and file/path data. The function constructs a TheHive alert, including a title, markdown-formatted description (with original alert JSON), relevant observables (IP, hostname, file, hash, URL, FQDN, URI path, user agent), MITRE ATT&CK enrichment, and a link to the JAMF alert. Handles default values and supports tagging and mapping of MITRE tactics for easier triage and investigation. For the setup in JAMF Protect, go to Configuration > Actions > *your action* > Add an HTTP data endpoint + your Authorization Header and Bearer as value

📄 [View full documentation](jamfprotect-createalertfromjamfprotect.md)

---

### JIRA

**Vendor:** [JIRA](../vendors/JIRA/overview)

#### [alertFromJIRA](jira-alertfromjira.md) `v1.0.0`
**Kind:** `function`

This function creates alerts from JIRA issues. It checks if the alert already exists, then creates it with type, source, source-ref, title, and description

📄 [View full documentation](jira-alertfromjira.md)

---

### Proofpoint

**Vendor:** [Proofpoint](../vendors/Proofpoint/overview)

#### [alertFeeder_ProofPoint_clicksPermitted](proofpoint-alertfeeder_proofpoint_clickspermitted.md) `v1.0.0`
**Kind:** `function`

Ingests ProofPoint clicksPermitted alerts in TheHive

📄 [View full documentation](proofpoint-alertfeeder_proofpoint_clickspermitted.md)

#### [alertFeeder_ProofPoint_messageDelivered](proofpoint-alertfeeder_proofpoint_messagedelivered.md) `v1.0.0`
**Kind:** `function`

Ingests ProofPoint messageDelivered alerts in TheHive

📄 [View full documentation](proofpoint-alertfeeder_proofpoint_messagedelivered.md)

---

### Splunk

**Vendor:** [Splunk](../vendors/Splunk/overview)

#### [createAlertFromSplunk](splunk-createalertfromsplunk.md) `v1.0.0`
**Kind:** `function`

This function creates a TheHive Alert based on an input coming from Splunk, and matches the Splunk fields to TheHive fields. In Splunk, you'll need to configure the webhook URL to point to the TheHive function URL

📄 [View full documentation](splunk-createalertfromsplunk.md)

---

---

*This catalog is auto-generated. Do not edit manually.*
