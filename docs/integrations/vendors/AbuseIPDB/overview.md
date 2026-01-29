# AbuseIPDB

![AbuseIPDB Logo](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/AbuseIPDB/assets/logo.svg)

AbuseIPDB is a crowdsourced IP reputation database that helps identify and track malicious IPs involved in attacks, providing confidence scores and abuse reports for rapid threat assessment and blocking decisions

**Category:** Threat Intelligence  
**Homepage:** https://www.abuseipdb.com  
**Tags:** ip-reputation, threat-detection, abuse-tracking, blacklist, incident-response

## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes
- **Free Subscription Available:** Yes

## Analyzers (1)

### AbuseIPDB `v1.1`
Checks an IP against AbuseIPDB for abuse score, categories, and recent reports.

- **Author:** Matteo Lodi; Fabien Bloume, StrangeBee
- **License:** AGPL-v3
- **Data Types:** `ip`
- **Configuration:** [.upstream/cortex/analyzers/AbuseIPDB/AbuseIPDB.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/AbuseIPDB/AbuseIPDB.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/AbuseIPDB/AbuseIPDB.json))

---

## Responders (1)

### AbuseIPDB_Report `v1.0`
Report an IP address to AbuseIPDB for abuse tracking and community sharing. Please, make sure to use the correct category in your Cortex responder configuration.

- **Author:** Fabien Bloume, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/AbuseIPDB/AbuseIPDB_Report.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/AbuseIPDB/AbuseIPDB_Report.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/AbuseIPDB/AbuseIPDB_Report.json))

---

## Statistics

- **Total Analyzers:** 1
- **Total Responders:** 1
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 2

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
