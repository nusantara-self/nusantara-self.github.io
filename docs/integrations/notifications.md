# TheHive Notification Filters

Ready-to-use notification filters for TheHive. These filters can be used to trigger notifications based on specific events.

## Summary

- **Total Notifications:** 12
- **Generic Notifications:** 11
- **Vendor-Specific Notifications:** 1
- **Tested:** 10

## Generic Notifications

### Alert Update

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when an alert is updated

**Contributor:** Fabien Bloume, StrangeBee

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_is": {
                "objectType": "Alert"
            }
        }
    ]
}
```

---

### Assignee change on Alert

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when an alert is updated with a new assignee value. Does not trigger on alert creation with an assignee provided.

**Contributor:** Fabien Bloume, StrangeBee

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_is": {
                "objectType": "Alert"
            }
        },
        {
            "_contains": {
                "details.assignee": ""
            }
        }
    ]
}
```

---

### Assignee change on Case

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when a case is updated with a new assignee value. Does not trigger on case creation or when an alert is imported as a case.

**Contributor:** Fabien Bloume, StrangeBee

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_is": {
                "objectType": "Case"
            }
        },
        {
            "_contains": {
                "details.assignee": ""
            }
        }
    ]
}
```

---

### Case Update

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when a case is updated

**Contributor:** Fabien Bloume, StrangeBee

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_is": {
                "objectType": "Case"
            }
        }
    ]
}
```

---

### Comment Creation

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when a comment is created

**Contributor:** Fabien Bloume, StrangeBee

```json
{
    "_and": [
        {
            "_is": {
                "action": "create"
            }
        },
        {
            "_is": {
                "objectType": "Comment"
            }
        }
    ]
}
```

---

### Flagged Case

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when a case is flagged

**Contributor:** Fabien Bloume, StrangeBee

> **Note:** This is a way to get a single notification for an out-of-sla case (or soon out-of-sla), only if the flag is used only for this purpose.

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_is": {
                "objectType": "Case"
            }
        },
        {
            "_is": {
                "details.flag": true
            }
        }
    ]
}
```

---

### Stage change on Case or Alert

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when the stage changes on a Case or Alert

**Contributor:** Fabien Bloume, StrangeBee

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_or": [
                {
                    "_is": {
                        "objectType": "Alert"
                    }
                },
                {
                    "_is": {
                        "objectType": "Case"
                    }
                }
            ]
        },
        {
            "_contains": {
                "details.stage": ""
            }
        }
    ]
}
```

---

### Stage change on Case or Alert with priority custom field

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when the stage changes on a Case or Alert and the priority custom field is not empty

**Contributor:** Fabien Bloume, StrangeBee

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_or": [
                {
                    "_is": {
                        "objectType": "Alert"
                    }
                },
                {
                    "_is": {
                        "objectType": "Case"
                    }
                }
            ]
        },
        {
            "_contains": {
                "details.stage": ""
            }
        },
        {
            "_contains": {
                "context.customFieldValues.priority": ""
            }
        }
    ]
}
```

---

### Task Manually Assigned

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when a task is manually assigned to a user. Does not trigger when a task is automatically assigned to the user who saves the first task log.

**Contributor:** Fabien Bloume, StrangeBee

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_is": {
                "objectType": "Task"
            }
        },
        {
            "_contains": {
                "details.assignee": ""
            }
        }
    ]
}
```

---

### Tag added to Case

![Tested with Issues](https://img.shields.io/badge/Status-Tested%20with%20Issues-blue)

Triggers when a specific tag is added to a case

**Contributor:** Fabien Bloume, StrangeBee

> **Warning:** Whether we use tags or custom fields, all tags (or custom fields) are included in the payload at each update. As a result, any later update operation on tags or custom fields will trigger undesired notifications. For example: If we want to alert when a case is soon out-of-sla with 'out-of-sla' tag, then any later added tag will trigger the notification again.

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_is": {
                "objectType": "Case"
            }
        },
        {
            "_contains": {
                "details.tags": "out-of-sla"
            }
        }
    ]
}
```

---

### Action Required on Task

![Not Working](https://img.shields.io/badge/Status-Not_Working-red)

Triggers when a task has actionRequired set to true

**Contributor:** Fabien Bloume, StrangeBee

> **Issue:** Can't make it work, whether we use _is, _eq, etc.

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_is": {
                "objectType": "Task"
            }
        },
        {
            "_is": {
                "details.actionRequired_MYORG": true
            }
        }
    ]
}
```

---

## Vendor-Specific Notifications

### CrowdstrikeFalcon

#### Stage change on Case or Alert linked to CrowdStrike

![Tested](https://img.shields.io/badge/Status-Tested-brightgreen)

Triggers when the stage changes on a Case or Alert that has a linked CrowdStrike Falcon alert or incident

> **Note:** If customfield exists but has empty values, no notification is triggered. As a result, this notification will only trigger when the values are not empty for the custom fields (and not just 'existing' in the UI).

```json
{
    "_and": [
        {
            "_is": {
                "action": "update"
            }
        },
        {
            "_or": [
                {
                    "_is": {
                        "objectType": "Alert"
                    }
                },
                {
                    "_is": {
                        "objectType": "Case"
                    }
                }
            ]
        },
        {
            "_contains": {
                "details.stage": ""
            }
        },
        {
            "_or": [
                {
                    "_contains": {
                        "context.customFieldValues.csfalcon-alert-id": ""
                    }
                },
                {
                    "_contains": {
                        "context.customFieldValues.csfalcon-incident-id": ""
                    }
                }
            ]
        }
    ]
}
```

---

*This documentation is auto-generated. Do not edit manually.*
