# VirusTotal

![VirusTotal Logo](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/VirusTotal/assets/logo.svg)

VirusTotal is a comprehensive malware analysis platform aggregating results from 70+ antivirus engines and security tools, enabling rapid file, URL, domain, and IP reputation checks during incident investigations

**Category:** Malware Analysis  
**Homepage:** https://www.virustotal.com  
**Tags:** malware-analysis, threat-intelligence, file-analysis, url-analysis, multi-scanner, incident-response

## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes

## Analyzers (4)

### VirusTotal_DownloadSample `v3.1`
Use VirusTotal to download the original file for an hash.

- **Author:** LDO-CERT
- **License:** AGPL-V3
- **Data Types:** `hash`
- **Configuration:** [.upstream/cortex/analyzers/VirusTotal/VirusTotal_DownloadSample.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/VirusTotal/VirusTotal_DownloadSample.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/VirusTotal/VirusTotal_DownloadSample.json))

### VirusTotal_GetReport `v3.1`
Get the latest VirusTotal report for a file, hash, domain or an IP address.

- **Author:** CERT-BDF, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `file`, `hash`, `domain`, `fqdn`, `ip`, `url`
- **Configuration:** [.upstream/cortex/analyzers/VirusTotal/VirusTotal_GetReport.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/VirusTotal/VirusTotal_GetReport.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/VirusTotal/VirusTotal_GetReport.json))

### VirusTotal_Scan `v3.1`
Use VirusTotal to scan a file or URL.

- **Author:** CERT-BDF, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `file`, `url`
- **Configuration:** [.upstream/cortex/analyzers/VirusTotal/VirusTotal_Scan.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/VirusTotal/VirusTotal_Scan.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/VirusTotal/VirusTotal_Scan.json))

### VirusTotal_Rescan `v3.1`
Use VirusTotal to run new analysis on hash.

- **Author:** CERT-LDO
- **License:** AGPL-V3
- **Data Types:** `hash`
- **Configuration:** [.upstream/cortex/analyzers/VirusTotal/VirusTotal_Rescan.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/VirusTotal/VirusTotal_Rescan.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/VirusTotal/VirusTotal_Rescan.json))

---

## Statistics

- **Total Analyzers:** 4
- **Total Responders:** 0
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 4

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
