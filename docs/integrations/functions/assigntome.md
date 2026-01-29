# assignToMe

## Metadata

- **Version:** `1.0.0`
- **Type:** Generic Function
- **Function Type:** `Action:Case`
- **Kind:** `function`
- **Mode:** `Enabled`
- **Source File:** `integrations/generic/functions/function_Action_assignToMe.js`

## Description

This function changes the assignee of the Case and all the associated tasks to the user who launches the function

## Code

```javascript
function handle(input, context) {
    
    // Query to get the tasks of the case
    const query = [
        {
            "_name": "getCase",
            "idOrName": input._id
        },
        {
            "_name": "tasks"
        },
    ];
    
    // get the tasks
    const taskList = context.query.execute(query);
    
    // change the tasks assignee
    taskList.map((task) => {
        context.task.update(task._id, { assignee: context.userId })
    });
    
    // change the case assignee
    context.caze.update(input._id, { assignee: context.userId });
}
```

---

*This documentation is auto-generated. Do not edit manually.*
