# assignAlert

## Metadata

- **Version:** `1.0.0`
- **Type:** Generic Function
- **Function Type:** `Notifier`
- **Kind:** `function`
- **Mode:** `Enabled`
- **Source File:** `integrations/generic/functions/function_notifier_assignAlert.js`

## Description

This function is designed to trigger on alert creation event. It automatically assignes severity High & Critical alerts to a given user

## Code

```javascript
function handle(input, context) {
    // assignee for high & critical severity alerts. It has to be a valid TheHive login.
    const NewAssignee = 'userassignee@yourcompany.test';

    if (input.object.severity >= 3) {
        context.alert.update(input.object._id, { assignee: NewAssignee })
    };
}
```

---

*This documentation is auto-generated. Do not edit manually.*
