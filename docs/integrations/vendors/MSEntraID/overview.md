# Microsoft Entra ID

![Microsoft Entra ID Logo](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/MSEntraID/assets/logo.png)

Microsoft Entra ID (formerly Azure Active Directory) is an enterprise identity and access management platform that provides user authentication data, sign-in logs, and security insights to investigate account compromises, suspicious access patterns, and identity-based attacks

**Category:** Identity & Access Management  
**Homepage:** https://www.microsoft.com/security/business/identity-access/microsoft-entra-id  
**Tags:** identity-management, authentication, access-control, user-activity, sign-in-logs, account-security, incident-response

## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** Yes
- **Free Subscription Available:** No

## Analyzers (4)

### MSEntraID_GetDirectoryAuditLogs `v1.0`
Pull Microsoft Entra ID directory audit logs for a user within the specified timeframe.

- **Author:** Fabien Bloume, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `mail`
- **Configuration:** [.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetDirectoryAuditLogs.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetDirectoryAuditLogs.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetDirectoryAuditLogs.json))

### MSEntraID_GetUserInfo `v1.0`
Get information about the user from Microsoft Entra ID, using the mail

- **Author:** Fabien Bloume, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `mail`
- **Configuration:** [.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetUserInfo.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetUserInfo.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetUserInfo.json))

### MSEntraID_GetSignIns `v1.0`
Pull all Microsoft Entra ID sign ins for a user within the specified amount of time.

- **Author:** @jahamilto
- **License:** AGPL-V3
- **Data Types:** `mail`
- **Configuration:** [.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetSignIns.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetSignIns.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetSignIns.json))

### MSEntraID_GetManagedDevicesInfo `v1.0`
Get Microsoft Intune Managed Device(s) Details from hostname or mail

- **Author:** Fabien Bloume, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `mail`, `hostname`
- **Configuration:** [.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetManagedDevicesInfo.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetManagedDevicesInfo.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/MSEntraID/MSEntraID_GetManagedDevicesInfo.json))

---

## Responders (5)

### MSEntraID_enableUser `v1.0`
Enable user in Microsoft Entra ID for a User Principal Name. (mail)

- **Author:** nusatanra-self, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSEntraID/MSEntraID_enableUser.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSEntraID/MSEntraID_enableUser.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSEntraID/MSEntraID_enableUser.json))

### MSEntraID_revokeSignInSessions `v1.1`
Invalidates all the refresh tokens issued to applications for a Microsoft Entra ID user (as well as session cookies in a user's browser)

- **Author:** Daniel Weiner @dmweiner; revised by @jahamilto; Fabien Bloume, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSEntraID/MSEntraID_revokeSignInSessions.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSEntraID/MSEntraID_revokeSignInSessions.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSEntraID/MSEntraID_revokeSignInSessions.json))

### MSEntraID_disableUser `v1.0`
Disable user in Microsoft Entra ID for a User Principal Name. (mail)

- **Author:** nusatanra-self, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSEntraID/MSEntraID_disableUser.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSEntraID/MSEntraID_disableUser.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSEntraID/MSEntraID_disableUser.json))

### MSEntraID_ForcePasswordResetWithMFA `v1.0`
Force password reset at next login with MFA verification before password change for a User Principal Name. (mail)

- **Author:** nusatanra-self, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSEntraID/MSEntraID_ForcePasswordResetWithMFA.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSEntraID/MSEntraID_ForcePasswordResetWithMFA.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSEntraID/MSEntraID_ForcePasswordResetWithMFA.json))

### MSEntraID_ForcePasswordReset `v1.0`
Force password reset at next login for a User Principal Name. (mail)

- **Author:** nusatanra-self, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case_artifact`
- **Configuration:** [.upstream/cortex/responders/MSEntraID/MSEntraID_ForcePasswordReset.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/MSEntraID/MSEntraID_ForcePasswordReset.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/MSEntraID/MSEntraID_ForcePasswordReset.json))

---

## Statistics

- **Total Analyzers:** 4
- **Total Responders:** 5
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 9

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
