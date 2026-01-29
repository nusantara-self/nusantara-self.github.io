# ONYPHE

![ONYPHE Logo](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/Onyphe/assets/logo.png)

ONYPHE is a cyber defense search engine that collects and analyzes internet-wide scan data, providing intelligence on exposed assets, vulnerabilities, and threat actor infrastructure for proactive defense and incident investigation

**Category:** Attack Surface Intelligence  
**Homepage:** https://www.onyphe.io  
**Tags:** internet-scanning, infrastructure-intelligence, vulnerability-detection, threat-hunting, incident-response

## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes
- **Free Subscription Available:** Yes

## Analyzers (5)

### ONYPHE_ASM `v1.1`
Manage an attack surface from The Hive using ONYPHE riskscan category

- **Author:** Pierre Baudry, Adrien Barchapt, Andrea Garavaglia, Davide Arcuri, James Atack
- **License:** AGPL-V3
- **Data Types:** `ip`, `domain`, `fqdn`, `hash`
- **Configuration:** [.upstream/cortex/analyzers/Onyphe/ONYPHE_ASM.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_ASM.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_ASM.json))

### ONYPHE_Search `v1.1`
Retrieve results from ONYPHE Search API for a given ip, domain, fqdn or hash (sha256 TLS fingerprint) from specified category

- **Author:** Pierre Baudry, Adrien Barchapt, Andrea Garavaglia, Davide Arcuri, James Atack
- **License:** AGPL-V3
- **Data Types:** `ip`, `domain`, `fqdn`, `hash`
- **Configuration:** [.upstream/cortex/analyzers/Onyphe/ONYPHE_Search.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_Search.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_Search.json))

### ONYPHE_Summary_API `v1.2`
Retrieve summary information Onyphe has for given ip, domain, or fqdn.

- **Author:** Pierre Baudry, Adrien Barchapt, Andrea Garavaglia, Davide Arcuri, James Atack
- **License:** AGPL-V3
- **Data Types:** `ip`, `domain`, `fqdn`
- **Configuration:** [.upstream/cortex/analyzers/Onyphe/ONYPHE_Summary_API.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_Summary_API.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_Summary_API.json))

### ONYPHE_Vulnscan `v1.1`
Retrieve vulnerability data from ONYPHE vulnscan category for a given ip, domain, fqdn or hash (sha256 TLS fingerprint)

- **Author:** Pierre Baudry, Adrien Barchapt, Andrea Garavaglia, Davide Arcuri, James Atack
- **License:** AGPL-V3
- **Data Types:** `ip`, `domain`, `fqdn`, `hash`
- **Configuration:** [.upstream/cortex/analyzers/Onyphe/ONYPHE_Vulnscan.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_Vulnscan.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_Vulnscan.json))

### ONYPHE_Ctiscan `v1.0`
Query ONYPHE Ctiscan threat hunting data for open services (takes ip, domain, fqdn, autonomous-system or hash.)

- **Author:** James Atack
- **License:** AGPL-V3
- **Data Types:** `ip`, `domain`, `fqdn`, `hash`, `autonomous-system`, `other`
- **Configuration:** [.upstream/cortex/analyzers/Onyphe/ONYPHE_Ctiscan.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_Ctiscan.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Onyphe/ONYPHE_Ctiscan.json))

---

## Statistics

- **Total Analyzers:** 5
- **Total Responders:** 0
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 5

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
