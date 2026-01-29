# deleteIPObsFromAlert

## Metadata

- **Version:** `1.0.0`
- **Type:** Generic Function
- **Function Type:** `Action:Alert`
- **Kind:** `function`
- **Mode:** `Enabled`
- **Source File:** `integrations/generic/functions/function_Action_deleteIPObsFromAlert.js`

## Description

This function will delete all the IP Observable from an alert

## Code

```javascript
function handle(input, context) {
    
    // Query to get the IP observables of the alert
    const query = [
        {
            "_name": "getAlert",
            "idOrName": input._id
        },
        {
            "_name": "observables"
        },
        {
            "_name": "filter",
            "_and":
            [
                {
                    "_field": "dataType",
                    "_value": "ip"
                }
            ]
        }
    ];
    
    // Get the IP observables of the alert
    const obsList = context.query.execute(query);
    
    // delete all the IP observables
    obsList.map((obs) => {
        context.observable.delete(obs._id);
      });

}
```

---

*This documentation is auto-generated. Do not edit manually.*
