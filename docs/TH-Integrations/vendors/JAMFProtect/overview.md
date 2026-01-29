# JAMFProtect


## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes
- **Free Subscription Available:** No

## Responders (2)

### JAMFProtect_removeHashfromPreventList `v1.0`
Remove IOC on JAMF Protect - removes associated custom prevent list(s) containing the hash

- **Author:** Fabien Bloume, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/JAMFProtect/JAMFProtect_removeHashfromPreventList.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/JAMFProtect/JAMFProtect_removeHashfromPreventList.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/JAMFProtect/JAMFProtect_removeHashfromPreventList.json))

### JAMFProtect_addHashtoPreventList `v1.0`
Add IOC to JAMF Protect - creates a custom prevent list for a hash

- **Author:** Fabien Bloume, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/JAMFProtect/JAMFProtect_addHashtoPreventList.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/JAMFProtect/JAMFProtect_addHashtoPreventList.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/JAMFProtect/JAMFProtect_addHashtoPreventList.json))

---

## Functions (1)

### createAlertFromJAMFProtect `v1.0.0`
Ingests alerts from JAMF Protect. Extracts analytic details, host and user information, MITRE ATT&CK tags, and file/path data. The function constructs a TheHive alert, including a title, markdown-formatted description (with original alert JSON), relevant observables (IP, hostname, file, hash, URL, FQDN, URI path, user agent), MITRE ATT&CK enrichment, and a link to the JAMF alert. Handles default values and supports tagging and mapping of MITRE tactics for easier triage and investigation. For the setup in JAMF Protect, go to Configuration > Actions > *your action* > Add an HTTP data endpoint + your Authorization Header and Bearer as value

- **Kind:** function
- **Mode:** Enabled
- **File:** [integrations/vendors/JAMFProtect/thehive/functions/function_API_createAlertFromJAMFProtect.js](https://github.com/nusantara-self/strangebee-integrations/blob/main/integrations/vendors/JAMFProtect/thehive/functions/function_API_createAlertFromJAMFProtect.js) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/JAMFProtect/thehive/functions/function_API_createAlertFromJAMFProtect.js))

---

## Statistics

- **Total Analyzers:** 0
- **Total Responders:** 2
- **Total Functions:** 1
- **Total External Integrations:** 0
- **Total Integrations:** 3

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
