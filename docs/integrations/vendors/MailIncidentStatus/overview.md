# MailIncidentStatus


## Responders (1)

### MailIncidentStatus `v1.0`
Mail a detailed status information of an incident case. The mail is sent to recipients specified by tags prefixed with 'mail='. The responder respects tlp definitions. For tlp:amber mail addresse and for tlp:green mail domains must be pre-defined in the configuration. For tlp:red sending mails is denied. The responser also uses thehive4py to collect information about the status of the tasks of the incidents.

- **Author:** Manuel Krucker
- **License:** AGPL-V3
- **Data Types:** `thehive:case`
- **Configuration:** [.upstream/cortex/responders/MailIncidentStatus/MailIncidentStatus.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MailIncidentStatus/MailIncidentStatus.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MailIncidentStatus/MailIncidentStatus.json))

---

## Statistics

- **Total Analyzers:** 0
- **Total Responders:** 1
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 1

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
