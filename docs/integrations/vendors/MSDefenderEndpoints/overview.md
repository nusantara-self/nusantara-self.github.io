# Microsoft Defender for Endpoint

![Microsoft Defender for Endpoint Logo](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/MSDefenderEndpoints/assets/logo.png)

Microsoft Defender for Endpoint is an enterprise EDR platform that provides threat detection, investigation, and automated response capabilities across Windows, macOS, Linux, iOS, and Android devices for comprehensive endpoint security

**Category:** EDR  
**Homepage:** https://www.microsoft.com/security/business/endpoint-security/microsoft-defender-endpoint  
**Tags:** edr, endpoint-protection, threat-detection, automated-response, incident-response, microsoft

## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes
- **Free Subscription Available:** No

## Responders (8)

### MSDefender-FullVirusscan `v1.0`
Run full virus scan to machine with Microsoft Defender for Endpoints

- **Author:** Keijo Korte
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_VirusScan.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_VirusScan.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_VirusScan.json))

### MSDefender-UnRestrictAppExecution `v1.0`
Enable execution of any application on the device

- **Author:** Keijo Korte, Louis-Maximilien Dupouy
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_UnRestrictAppExecution.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_UnRestrictAppExecution.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_UnRestrictAppExecution.json))

### MSDefender-RestrictAppExecution `v1.0`
Restrict execution of all applications on the device except a predefined set

- **Author:** Keijo Korte, Louis-Maximilien Dupouy
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_RestrictAppExecution.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_RestrictAppExecution.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_RestrictAppExecution.json))

### MSDefender-AutoInvestigation `v1.0`
Start an automated investigation on a device

- **Author:** Keijo Korte, Louis-Maximilien Dupouy
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_AutoInvestigation.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_AutoInvestigation.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_AutoInvestigation.json))

### MSDefender-PushIOC-Alert `v2.0`
Push IOC to Defender client. Alert mode

- **Author:** Keijo Korte, Louis-Maximilien Dupouy
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_PushIOCAlert.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_PushIOCAlert.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_PushIOCAlert.json))

### MSDefender-IsolateMachine `v1.0`
Isolate machine with Microsoft Defender for Endpoints

- **Author:** Keijo Korte
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_Isolate.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_Isolate.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_Isolate.json))

### MSDefender-PushIOC-Block `v2.0`
Push IOC to Defender client. Blocking mode

- **Author:** Keijo Korte, Louis-Maximilien Dupouy
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_PushIOCBlock.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_PushIOCBlock.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_PushIOCBlock.json))

### MSDefender-UnisolateMachine `v1.0`
Unisolate machine with Microsoft Defender for Endpoints

- **Author:** Keijo Korte
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_Unisolate.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_Unisolate.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSDefenderEndpoints/MSDefenderEndpoints_Unisolate.json))

---

## Statistics

- **Total Analyzers:** 0
- **Total Responders:** 8
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 8

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
