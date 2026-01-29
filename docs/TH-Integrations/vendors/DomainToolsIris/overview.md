# DomainToolsIris


## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes
- **Free Subscription Available:** No

## Analyzers (2)

### DomainToolsIris_Pivot `v1.0`
Use DomainTools Iris API to pivot on ssl_hash, ip, or email.

- **Author:** DomainTools
- **License:** AGPL-V3
- **Data Types:** `hash`, `ip`, `mail`
- **Configuration:** [.upstream/cortex/analyzers/DomainToolsIris/DomainToolsIris_Pivot.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainToolsIris/DomainToolsIris_Pivot.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainToolsIris/DomainToolsIris_Pivot.json))

### DomainToolsIris_Investigate `v1.0`
Use DomainTools Iris API to investigate a domain.

- **Author:** DomainTools
- **License:** AGPL-V3
- **Data Types:** `domain`
- **Configuration:** [.upstream/cortex/analyzers/DomainToolsIris/DomainToolsIris_Investigate.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainToolsIris/DomainToolsIris_Investigate.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainToolsIris/DomainToolsIris_Investigate.json))

---

## Responders (2)

### DomainToolsIris_AddRiskyDNSTag `v1.0`
Add Tag saying that the case contains a risky DNS.

- **Author:** DomainTools
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/DomainToolsIris/DomainToolsIris_AddRiskyDNSTag.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/DomainToolsIris/DomainToolsIris_AddRiskyDNSTag.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/DomainToolsIris/DomainToolsIris_AddRiskyDNSTag.json))

### DomainToolsIris_CheckMaliciousTags `v1.0`
Add Tag saying that the observable and case have a malicious tag in their Iris Tags.

- **Author:** DomainTools
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/DomainToolsIris/DomainToolsIris_CheckMaliciousTags.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/DomainToolsIris/DomainToolsIris_CheckMaliciousTags.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/DomainToolsIris/DomainToolsIris_CheckMaliciousTags.json))

---

## Statistics

- **Total Analyzers:** 2
- **Total Responders:** 2
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 4

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
