# Microsoft Defender for Office 365

![Microsoft Defender for Office 365 Logo](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/MSDefenderOffice365/assets/logo.png)

Microsoft Defender for Office 365 provides advanced threat protection for email and collaboration tools, detecting phishing, malware, and business email compromise attempts with automated investigation and response capabilities

**Category:** Email Security  
**Homepage:** https://www.microsoft.com/security/business/threat-protection/office-365-defender  
**Tags:** email-security, phishing-protection, malware-detection, threat-protection, incident-response, microsoft

## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes
- **Free Subscription Available:** Yes

## Analyzers (1)

### MSDefenderOffice365_SafeLinksDecoder.json `v1.0`
Decodes Office 365 ATP Safe Links to extract original URLs. Supports url observables containing safelinks.protection.outlook.com domains.

- **Author:** Louis HUSSON
- **License:** AGPL-V3
- **Data Types:** `url`
- **Configuration:** [.upstream/cortex/analyzers/MSDefenderOffice365/MSDefenderOffice365_SafeLinksDecoder.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/MSDefenderOffice365/MSDefenderOffice365_SafeLinksDecoder.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/MSDefenderOffice365/MSDefenderOffice365_SafeLinksDecoder.json))

---

## Responders (2)

### MSDefenderOffice365_unblock `v1.0`
Add entries to the Tenant Allow/Block List in the Microsoft 365 Defender

- **Author:** Joe Lazaro
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderOffice365/MSDefenderOffice365_unblock.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderOffice365/MSDefenderOffice365_unblock.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderOffice365/MSDefenderOffice365_unblock.json))

### MSDefenderOffice365_block `v1.0`
Add entries to the Tenant Allow/Block List in the Microsoft 365 Defender

- **Author:** Joe Lazaro
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderOffice365/MSDefenderOffice365_block.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderOffice365/MSDefenderOffice365_block.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderOffice365/MSDefenderOffice365_block.json))

---

## Statistics

- **Total Analyzers:** 1
- **Total Responders:** 2
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 3

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
