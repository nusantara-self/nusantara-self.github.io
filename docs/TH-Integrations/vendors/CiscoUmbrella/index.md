# CiscoUmbrella


## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes
- **Free Subscription Available:** No

## Analyzers (1)

### CiscoUmbrella_Report `v1.0`
Query the Cisco Umbrella Reporting API for recent DNS queries and their status.

- **Author:** Kyle Parrish
- **License:** AGPL-V3
- **Data Types:** `domain`, `fqdn`
- **Configuration:** [.upstream/cortex/analyzers/CiscoUmbrella/Umbrella_Report.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/CiscoUmbrella/Umbrella_Report.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/CiscoUmbrella/Umbrella_Report.json))

---

## Responders (1)

### CiscoUmbrella_Blacklister `v1.1`
Add domain to Cisco Umbrella blacklist via Enforcement API.

- **Author:** Kyle Parrish
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/CiscoUmbrella/UmbrellaBlacklister.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/CiscoUmbrella/UmbrellaBlacklister.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/CiscoUmbrella/UmbrellaBlacklister.json))

---

## Statistics

- **Total Analyzers:** 1
- **Total Responders:** 1
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 2

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
