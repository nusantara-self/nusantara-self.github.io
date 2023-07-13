# Remote SSH an IAP-secured server using a terminal or VSCode

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Getting started

### Install the gcloud CLI

[Official documentation](https://cloud.google.com/sdk/docs/install#linux)

### Authentication with the CLI {#gcloud-auth}
Before each session you may launch, make sure to be **authenticated with your gcloud account** within the CLI

<Tabs groupId="operating-systems">
  <TabItem value="Linux/mac" label="Standard"><pre>gcloud auth login</pre></TabItem>
  <TabItem value="WSL" label="WSL"><pre>gcloud auth login --no-launch-browser</pre></TabItem>
</Tabs>

---
    
## Using a standard terminal

Very straightforward, make sure to be authenticated and run the following command :
<pre>gcloud compute ssh my-instance --tunnel-through-iap </pre>

---

## Using VSCode Remote Explorer
### CLI Authentication

As usual, make sure to be authenticated : [gcloud authentication](#gcloud-auth)

### SSH tunnel dry run

Then, make sure to **dry run ssh tunnel** to your instance : 

<pre>gcloud compute ssh my-instance --tunnel-through-iap --dry-run</pre>

You should get a response similar to that one : 

```
/usr/bin/ssh -t -i /Users/YOURNAME/.ssh/google_compute_engine 
-o CheckHostIP=no 
-o HashKnownHosts=no -o HostKeyAlias=compute.XXXX -o IdentitiesOnly=yes 
-o StrictHostKeyChecking=yes 
-o UserKnownHostsFile=/Users/YOURNAME/.ssh/google_compute_known_hosts 
-o ProxyCommand="/Library/Frameworks/Python.framework/Versions/3.9/bin/python3 -S /Applications/google-cloud-sdk/lib/gcloud.py compute start-iap-tunnel my-instance %p --listen-on-stdin --project=my-project --zone=my-zone --verbosity=warning" 
-o ProxyUseFdpass=no YOURNAME@compute.XXXX
```

Now, what we are going to do is to **copy the ProxyCommand** out of it, which contains the info we need : 
`/Library/Frameworks/Python [....] -verbosity=warning`

### Updating your ~/.ssh/config

Now, using VScode, let's have a look at our ssh config file : 

 > **CMD + shift + P**

 > **Remote-SSH : Open SSH configuration file**

Into this file, add the following content and make sure to **replace the full ProxyCommand** by the way copied ealier :


```
Host my-instance-name
  HostName my-instance-name
  IdentityFile /Users/YOURNAME/.ssh/google_compute_engine
  CheckHostIP no
  HashKnownHosts no
  HostKeyAlias my-instance-name
  IdentitiesOnly yes
  StrictHostKeyChecking yes
  UserKnownHostsFile /Users/YOURNAME/.ssh/google_compute_known_hosts
  ProxyCommand /Library/Frameworks/Python [....] -verbosity=warning
  ProxyUseFdpass no
```


:::info
*Host, HostName & HostKeyAlias* can all be replaced by whatever value you wish.
Do not forget *setting the right UserKnownHostsFile* directory as well as pasting the *full ProxyCommand content*
:::

### Connect to Host on VSCode

Now, you should be able to remote SSH your IAP-secured instance directly on VScode.

> **CMD + shift + P**

> **Remote-SSH : Connect to Host**

> Pick your new entry **'my-instance-name'**, which should appear

You can now use File Explorer tab to go to whatever folder you wish and edit files directly in VSCode. Saving you ton of time if you are not an avid vim programmer.

:::caution
There might be a few additional steps on a **Windows** environment where you use ***Windows Subsystem for Linux***. By default, VSCode does not use the WSL's ssh, which is a problem. See [Troubleshoot](#troubleshoot) below.
:::

---

## Troubleshoot {#troubleshoot}
### SSH issues with WSL & VScode on Windows 

Coming later