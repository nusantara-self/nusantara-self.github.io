# createAlertFromJAMFProtect

## Metadata

- **Version:** `1.0.0`
- **Vendor:** JAMFProtect
- **Kind:** `function`
- **Mode:** `Enabled`
- **Source File:** `integrations/vendors/JAMFProtect/thehive/functions/function_API_createAlertFromJAMFProtect.js`

## Description

Ingests alerts from JAMF Protect. Extracts analytic details, host and user information, MITRE ATT&CK tags, and file/path data. The function constructs a TheHive alert, including a title, markdown-formatted description (with original alert JSON), relevant observables (IP, hostname, file, hash, URL, FQDN, URI path, user agent), MITRE ATT&CK enrichment, and a link to the JAMF alert. Handles default values and supports tagging and mapping of MITRE tactics for easier triage and investigation. For the setup in JAMF Protect, go to Configuration > Actions > *your action* > Add an HTTP data endpoint + your Authorization Header and Bearer as value

## Code

```javascript
// Define the full array of MITRE ATT&CK tactics -- this will be used to match the correct tactic when multiple techniques are identified in the analytic
const mitreAttackTactics = [
    "Reconnaissance",
    "Resource Development",
    "Initial Access",
    "Execution",
    "Persistence",
    "Privilege Escalation",
    "Defense Evasion",
    "Credential Access",
    "Discovery",
    "Lateral Movement",
    "Collection",
    "Command and Control",
    "Exfiltration",
    "Impact"
];

function getFileName(filePath) {
    // Extract the file name by splitting the string by the '/' or '\' character and getting the last element
    const segments = filePath.split(/[/\\]/);
    return segments.pop();
}

function handle(input, context) {
    // Sometimes, JAMF returns input directly, or as a value of 'input' key with two additional values : caid & certid.
    // this helps making the function work consistently
    if (input.hasOwnProperty('caid')) {
    input = input.input;
    }

    // Safely extract values with default fallbacks
    const match = input?.match ?? {};
    const facts = match.facts?.[0] ?? {};
    const host = input?.host ?? {};
    const event = match.event ?? {};
    const relatedUser = input?.related?.users?.[0] ?? {};
    const relatedGroup = input?.related?.groups?.[0] ?? {};
    
    // Extract individual properties with default values
    const factName = facts.name ?? 'Unknown name';
    const factHuman = facts.human ?? 'Unknown fact';
    const hostname = host.hostname ?? 'Unknown host';
    const osVersion = host.os ?? 'Unknown OS';
    const hostSerial = host.serial ?? 'Unknown OS';
    const ipAddress = host.ips?.[0];
    const severity = match.severity ?? 1;
    const adjustedSeverity = severity === 0 ? severity + 1 : severity;
    const eventTimestamp = event.timestamp ? Math.round(event.timestamp * 1000) : Date.now();
    const filePath = event.path ?? 'Unknown path';
    const sha256hex = input?.related?.files?.[0]?.sha256hex;
    const fileFilepath = input?.related?.files?.[0]?.path;
    const fileName = fileFilepath ? getFileName(fileFilepath) : null;

    const userName = relatedUser.name ?? 'Unknown user';
    const groupName = relatedGroup.name ?? 'Unknown group';
    const eventType = input?.eventType ?? 'Unknown';
    const sourceRef = match.uuid ?? Math.random().toString(36).substring(2, 15);
    const mitreTags = match.tags?.filter(tag => /^T\d{4}(\.\d{3})?$/.test(tag)) ?? [];
    const filteredTactics = match.tags ? match.tags.filter(tactic => mitreAttackTactics.includes(tactic)).map(tactic => tactic.toLowerCase().replace(/ /g, '-')) : [];

    // If factHuman is an empty string, set it to the value of factName, for better support regarding Custom Analytics
    if (factHuman === "") {
        factHuman = factName;
    }

    // Construct strings for title and description
    const title = `${factHuman} on Host ${hostname}`;
    const jamf_url = `https://strangebee.protect.jamfcloud.com/alerts/${sourceRef}`;
    const description = `
${factName} - ${factHuman} on the host ${hostname}

File path: ${filePath}

[Link to JAMF Alert](${jamf_url})

\`\`\`
${JSON.stringify(input ?? {}, null, 2)}
\`\`\`
    `;
    
    const observables = [];

    // Add observables conditionally
    if (host.ips?.[0]) {
        observables.push({
            dataType: "ip",
            data: host.ips[0],
            tags: ["name:host-ip", "hostname:"+host.hostname]
        });
    }

    if (host.hostname) {
        observables.push({
            dataType: "hostname",
            data: host.hostname,
            tags: [`os-version:${host.os ?? 'Unknown OS'}`,"serial:"+hostSerial]
        });
    }

    if (event.path) {
        observables.push({
            dataType: "filename",
            data: fileName,
            tags: ["filepath:"+fileFilepath]
        });
    }

    if (event.url) {
        observables.push({
            dataType: "url",
            data: event.url,
            tags: ["name:threat-url"]
        });
    }

    if (sha256hex) {
        observables.push({
            dataType: "hash",
            data: sha256hex,
            tags: ["hash:type=sha256","filepath:"+fileFilepath,"filename:"+fileName]
        });
    }

    if (host.fqdn) {
        observables.push({
            dataType: "fqdn",
            data: host.fqdn,
            tags: ["name:fully-qualified-domain-name"]
        });
    }

    if (event.uri_path) {
        observables.push({
            dataType: "uri_path",
            data: event.uri_path,
            tags: ["name:uri-path"]
        });
    }

    if (event.user_agent) {
        observables.push({
            dataType: "user-agent",
            data: event.user_agent,
            tags: ["name:user-agent"]
        });
    }

    // Define theHiveAlert with pre-extracted values
    const theHiveAlert = {
        type: eventType,
        source: "JAMF Protect",
        sourceRef: sourceRef,
        title: title,
        severity: adjustedSeverity,
        description: description,
        date: eventTimestamp,
        observables: observables.length > 0 ? observables : [], // Only include observables if not empty
        tags: [
            "JAMF",
            ...mitreTags  // Include the identified MITRE ATT&CK tags
        ],
        procedures: mitreTags.map(tag => ({
            patternId: tag,
            occurDate: eventTimestamp,
            tactic: filteredTactics.length === 1 ? filteredTactics[0] : null  // Conditional assignment
        })),
        // customFields: [
        //     {
        //         name: "business-unit",
        //         value: groupName
        //     }
        // ]
    };

    // Call TheHive Context API for alert creation
    return context.alert.create(theHiveAlert);
}
```

---

*This documentation is auto-generated. Do not edit manually.*
