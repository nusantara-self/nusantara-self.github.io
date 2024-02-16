# Cortex Neurons

## Introduction 

As stated in the [Cortex Neurons documentation](https://thehive-project.github.io/Cortex-Analyzers/)


## Build & Test cortex-neurons

### Build my Cortex Neuron locally from Dockerfile

```bash 
docker build -t myneuron:latest .
```

### Test the local neuron
```bash
docker run --rm -v ${PWD}:/job myneuron:latest
```

## Test remote existing cortex-neurons (on MacOS)

```bash
docker run --platform=linux/amd64 -v ${PWD}:/job cortexneurons/dshield_lookup:devel
```

:::info
Make sure to have a ./input/input.json file configured locally. If the cortex neuron runs successfully, an output.json should appear in output folder.
:::

```json title="input/input.json"
{
   "data":"185.162.131.25",
   "tlp":0,
   "parameters":{
      
   },
   "dataType":"ip",
   "config":{
      "jobTimeout":30,
      "service":"",
      "url":"",
      "api_key":"",
      "proxy_http":"",
      "proxy":{
         "http":"",
         "https":""
      },
      "max_tlp":2,
      "max_pap":2,
      "check_tlp":true,
      "check_pap":true,
      "proxy_https":"",
      "cacerts":"",
      "auto_extract_artifacts":false,
      "jobCache":10
   },
   "pap":2,
   "message":"1"
}
```