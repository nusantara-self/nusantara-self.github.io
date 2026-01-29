# Slack

![Slack Logo](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/Slack/assets/logo.png)

Slack is a is a team collaboration platform that provides channels, direct messaging, file sharing, and an app ecosystem for workflows and incident response.

**Category:** Collaboration  
**Homepage:** https://slack.com  
**Tags:** communication, collaboration, notifications, chat

## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** No
- **Free Subscription Available:** Yes

## Responders (2)

### Slack_SyncChannel `v1.0`
Syncs Slack channel conversations to TheHive task logs. Imports messages chronologically with file attachments for traceability.

- **Author:** Fabien Bloume, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case`
- **Configuration:** [.upstream/cortex/responders/Slack/Slack_SyncChannel.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/Slack/Slack_SyncChannel.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/Slack/Slack_SyncChannel.json))

### Slack_CreateChannel `v1.0`
Creates a Slack channel for a TheHive case, invites participants, and optionally posts a case summary and description.

- **Author:** Fabien Bloume, StrangeBee
- **License:** AGPL-V3
- **Data Types:** `thehive:case`
- **Configuration:** [.upstream/cortex/responders/Slack/Slack_CreateChannel.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/responders/Slack/Slack_CreateChannel.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/responders/Slack/Slack_CreateChannel.json))

---

## Use Cases (2)

### Notify Slack When an Alert Is Created in TheHive
For each new alert in TheHive, create a Slack block message with a title, severity & link to the alert.

**Tags:** slack, communication, notification
📄 [Documentation](https://github.com/nusantara-self/strangebee-integrations/blob/main/integrations/vendors/Slack/use-cases/slack-notifier-alert-creation.md) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/Slack/use-cases/slack-notifier-alert-creation.md))

---

### Notify Slack When a Case Assignee Changes in TheHive
For each assignee change for a case in TheHive, create a Slack block message and link to the case. @here will inform only active users.

**Tags:** slack, communication, notification
📄 [Documentation](https://github.com/nusantara-self/strangebee-integrations/blob/main/integrations/vendors/Slack/use-cases/slack-case-assignee-change.md) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/Slack/use-cases/slack-case-assignee-change.md))

---

## Statistics

- **Total Analyzers:** 0
- **Total Responders:** 2
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 2

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
