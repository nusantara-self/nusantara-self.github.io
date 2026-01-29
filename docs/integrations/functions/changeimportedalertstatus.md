# changeImportedAlertStatus

## Metadata

- **Version:** `1.0.0`
- **Type:** Generic Function
- **Function Type:** `Notifier`
- **Kind:** `function`
- **Mode:** `Enabled`
- **Source File:** `integrations/generic/functions/function_notifier_changeImportedAlertStatus.js`

## Description

This function is designed to trigger on case closed event. It automatically changes imported alerts to a given custom status

## Code

```javascript
function handle(input, context) {
    // Query to get the LinkedAlerts
    const query = [
            {
              "_name" : "getCase",
              "idOrName": input.object._id
            },
            {
              "_name":"alerts"
            }
          ]
        
      // Get the linkedAlert list
      const alertList = context.query.execute(query);
      
      if (alertList.length > 0) {
        // change linked Alerts to ignore
        for (alert of alertList) {
          context.alert.update(alert._id, { "status": "Ignored", "stage": "Closed"})
        }
      }
}
```

---

*This documentation is auto-generated. Do not edit manually.*
