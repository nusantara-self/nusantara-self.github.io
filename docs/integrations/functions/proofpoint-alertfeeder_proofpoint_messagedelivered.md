# alertFeeder_ProofPoint_messageDelivered

## Metadata

- **Version:** `1.0.0`
- **Vendor:** Proofpoint
- **Kind:** `function`
- **Mode:** `Enabled`
- **Source File:** `integrations/vendors/Proofpoint/thehive/functions/function_Feeder_alertFromProofpoint_messageDelivered.js`

## Description

Ingests ProofPoint messageDelivered alerts in TheHive

## Code

```javascript
function extractEmailAndName(address) {
  // Handles "Name <email@domain.com>" or just "email@domain.com"
  if (!address) return { email: "", name: "" };
  const match = address.match(/^(.*)<(.+?)>$/);
  if (match) {
    // Remove quotes and trim whitespace
    return { email: match[2].trim(), name: match[1].replace(/["']/g, '').trim() };
  }
  return { email: address.trim(), name: "" };
}

function handle(input, context) {
  const events = input.messagesDelivered || [];
  events.forEach((event) => {
    // Deduplication
    const filters = [
      {
        _name: "filter",
        _and: [
          { _field: "sourceRef", _value: event.GUID }
        ]
      }
    ];
    if (context.alert.find(filters).length < 1) {
      // Compose alert details
      const subject = event.subject || "(no subject)";
      const title = `[Proofpoint] Delivered Suspicious Message - ${subject}`;
      const description =
        `A suspicious message was delivered to a user's mailbox by Proofpoint TAP.\n\n` +
        `**From:** ${event.fromAddress}\n` +
        `**To:** ${event.headerTo}\n` +
        `**Subject:** ${event.subject}\n` +
        `**Impostor Score:** ${event.impostorScore}\n` +
        `**Malware Score:** ${event.malwareScore}\n` +
        `**Phish Score:** ${event.phishScore}\n` +
        `**Spam Score:** ${event.spamScore}\n` +
        `**Threats:**\n${(event.threatsInfoMap || []).map(t => `- ${t.threat} (ID: ${t.threatID}, Status: ${t.threatStatus})`).join('\n')}\n` +
        `**Message Time:** ${event.messageTime}\n` +
        `\nFull Event JSON:\n\`\`\`json\n${JSON.stringify(event, null, 2)}\n\`\`\``;

      // Prepare mail observables with name in tags
      const fromInfo = extractEmailAndName(event.fromAddress);
      const headerFromInfo = extractEmailAndName(event.headerFrom);
      const headerToInfo = extractEmailAndName(event.headerTo);

      const observables = [
        ...(event.threatsInfoMap || []).map(t => ({
          dataType: "url",
          data: t.threat,
          tags: ["threat", t.threatStatus]
        })),
        { dataType: "mail", data: fromInfo.email, tags: ["from", ...(fromInfo.name ? [fromInfo.name] : [])] },
        { dataType: "mail", data: headerToInfo.email, tags: ["to", ...(headerToInfo.name ? [headerToInfo.name] : [])] },
        { dataType: "mail", data: headerFromInfo.email, tags: ["headerFrom", ...(headerFromInfo.name ? [headerFromInfo.name] : [])] },
        ...(event.headerTo ? [{ dataType: "mail", data: headerToInfo.email, tags: ["recipient", ...(headerToInfo.name ? [headerToInfo.name] : [])] }] : []),
        ...(event.headerFrom ? [{ dataType: "mail", data: headerFromInfo.email, tags: ["sender", ...(headerFromInfo.name ? [headerFromInfo.name] : [])] }] : [])
      ];

      // MITRE ATT&CK mapping (basic example)
      let mitreTag = null;
      let tactic = null;
      if ((event.phishScore || 0) > 70) {
        mitreTag = "T1566.002"; // Spearphishing Link
        tactic = "phishing";
      } else if ((event.malwareScore || 0) > 70) {
        mitreTag = "T1204.002"; // Malicious File
        tactic = "execution";
      }
      const dateStr = (event.threatsInfoMap && event.threatsInfoMap[0] && event.threatsInfoMap[0].threatTime) || event.messageTime;
      const eventTimestamp = dateStr ? new Date(dateStr).getTime() : Date.now();

      const procedures = mitreTag ? [{
        patternId: mitreTag,
        occurDate: eventTimestamp,
        ...(tactic ? { tactic: tactic } : {})
      }] : [];

      // Tags
      const tags = [
        "Proofpoint",
        "messagesDelivered",
        event.subject,
        ...(event.threatsInfoMap || []).map(t => t.threatStatus),
        ...(mitreTag ? ["TTP:" + mitreTag] : [])
      ];

      // Build alert
      const alert = {
        "type": "event",
        "source": "ProofpointTAP-messagesDelivered",
        "sourceRef": event.GUID,
        "title": title,
        "description": description,
        "tags": tags,
        "observables": observables,
        "date": eventTimestamp,
        "procedures": procedures
      };

      context.alert.create(alert);
    }
  });
}
```

---

*This documentation is auto-generated. Do not edit manually.*
