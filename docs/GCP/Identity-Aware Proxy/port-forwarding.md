# Port-forwarding to localhost

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Install the gcloud CLI

[Official documentation](https://cloud.google.com/sdk/docs/install#linux)

## Authentication with the CLI {#gcloud-auth}
Before each session you may launch, make sure to be **authenticated with your gcloud account** within the CLI

<Tabs groupId="operating-systems">
  <TabItem value="Linux/mac" label="Standard"><pre>gcloud auth login</pre></TabItem>
  <TabItem value="WSL" label="WSL"><pre>gcloud auth login --no-launch-browser</pre></TabItem>
</Tabs>

## Port-forwarding your application port to your localhost

If for instance, I am testing the great vectr purple team's app on a cloud-based instance. The frontend will be by default running on localhost:8501. As a result, I'll able to redirect such traffic to my local machine thanks to this command.

<pre>gcloud compute start-iap-tunnel vectr-test-instance 8501     --local-host-port=localhost:8501</pre>

[Official documentation](https://cloud.google.com/solutions/connecting-securely#:~:text=or%20SOCKS%20proxy.-,Port%20forwarding%20over%20SSH,host%20over%20an%20SSH%20connection.&text=LOCAL_PORT%20%3Alocalhost%3A%20REMOTE_PORT-,Replace%20the%20following%3A,your%20Google%20Cloud%20project%20ID.)