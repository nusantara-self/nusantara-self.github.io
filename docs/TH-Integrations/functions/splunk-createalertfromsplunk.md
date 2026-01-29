# createAlertFromSplunk

## Metadata

- **Version:** `1.0.0`
- **Vendor:** Splunk
- **Kind:** `function`
- **Mode:** `Enabled`
- **Source File:** `integrations/vendors/Splunk/thehive/functions/function_API_createAlertFromSplunk.js`

## Description

This function creates a TheHive Alert based on an input coming from Splunk, and matches the Splunk fields to TheHive fields. In Splunk, you'll need to configure the webhook URL to point to the TheHive function URL

## Code

```javascript
function handle(input, context) {
    const theHiveAlert = {
        "type": "splunk",
        "source": input.search_name,
        "sourceRef": input.result._serial,
        "title": `Splunk Alert triggered: ${input.search_name} by ${input.result.sourcetype}`,
        "description": `Alert created by splunk search '${input.search_name}:\n${input.result._raw}'`,
        "date": (new Date(parseFloat(input.result._time)*1000)).getTime(),
        "observables": [
            {"dataType": "hostname", "data": input.result.host},
            {"dataType": "other", "data": input.result.action, "message": "action"},
            {"dataType": "other", "data": input.result._raw, "message": "raw"}
        ]
    };
    return context.alert.create(theHiveAlert);
}
```

---

*This documentation is auto-generated. Do not edit manually.*
