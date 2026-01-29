# Google Threat Intelligence

![Google Threat Intelligence Logo](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/GoogleThreatIntelligence/assets/logo.png)

Google Threat Intelligence (formerly VirusTotal) provides comprehensive malware analysis, threat intelligence, and file/URL/domain reputation data from 70+ security engines, enabling rapid threat assessment and IOC validation during investigations

**Category:** Threat Intelligence  
**Homepage:** https://threatlabs.google.com  
**Tags:** threat-intelligence, malware-analysis, file-analysis, url-analysis, multi-scanner, ioc-validation, incident-response

## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes

## Analyzers (5)

### GTI_ScanURL `v1.0`
Get the latest Google Threat Intelligence report for a URL that was submitted to Google Threat Intelligence for scanning

- **Author:** Google
- **License:** AGPL-V3
- **Data Types:** `url`
- **Configuration:** [.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanURL.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanURL.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanURL.json))

### GTI_ScanPrivateFile `v1.0`
Get the latest Google Threat Intelligence report for a file that was privately submitted to Google Threat Intelligence for scanning

- **Author:** Google
- **License:** AGPL-V3
- **Data Types:** `file`
- **Configuration:** [.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanPrivateFile.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanPrivateFile.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanPrivateFile.json))

### GTI_ScanFile `v1.0`
Get the latest Google Threat Intelligence report for a file that was submitted to Google Threat Intelligence for scanning

- **Author:** Google
- **License:** AGPL-V3
- **Data Types:** `file`
- **Configuration:** [.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanFile.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanFile.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanFile.json))

### GTI_GetIOCReport `v1.0`
Get the latest Google Threat Intelligence report for a file, hash, url, domain or an IP address.

- **Author:** Google
- **License:** AGPL-V3
- **Data Types:** `file`, `hash`, `domain`, `fqdn`, `ip`, `url`
- **Configuration:** [.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_GetIOCReport.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_GetIOCReport.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_GetIOCReport.json))

### GTI_ScanPrivateURL `v1.0`
Get the latest Google Threat Intelligence report for a URL that was privately submitted to Google Threat Intelligence for scanning

- **Author:** Google
- **License:** AGPL-V3
- **Data Types:** `url`
- **Configuration:** [.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanPrivateURL.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanPrivateURL.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/GoogleThreatIntelligence/GTI_ScanPrivateURL.json))

---

## Statistics

- **Total Analyzers:** 5
- **Total Responders:** 0
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 5

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
