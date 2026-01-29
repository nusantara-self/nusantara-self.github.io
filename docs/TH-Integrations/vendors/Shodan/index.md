# Shodan

![Shodan Logo](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/integrations/vendors/Shodan/assets/logo.png)

Shodan is the search engine for internet-connected devices, providing reconnaissance data on exposed services, vulnerabilities, and infrastructure that helps identify attack surfaces, compromised systems, and threat actor infrastructure

**Category:** Attack Surface Intelligence  
**Homepage:** https://www.shodan.io  
**Tags:** internet-scanning, infrastructure-intelligence, reconnaissance, exposed-services, threat-hunting, incident-response

## Subscription Information

- **Registration Required:** Yes
- **Subscription Required:** No
- **Free Subscription Available:** Yes

## Analyzers (6)

### Shodan_DNSResolve `v1.0`
Retrieve domain resolutions on Shodan.

- **Author:** ANSSI
- **License:** AGPL-V3
- **Data Types:** `domain`, `fqdn`
- **Configuration:** [.upstream/cortex/analyzers/Shodan/Shodan_DNSResolve.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Shodan/Shodan_DNSResolve.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Shodan/Shodan_DNSResolve.json))

### Shodan_InfoDomain `v1.0`
Retrieve key Shodan information on a domain.

- **Author:** ANSSI
- **License:** AGPL-V3
- **Data Types:** `domain`, `fqdn`
- **Configuration:** [.upstream/cortex/analyzers/Shodan/Shodan_InfoDomain.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Shodan/Shodan_InfoDomain.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Shodan/Shodan_InfoDomain.json))

### Shodan_Host_History `v1.0`
Retrieve Shodan history scan results  for an IP address.

- **Author:** ANSSI
- **License:** AGPL-V3
- **Data Types:** `ip`
- **Configuration:** [.upstream/cortex/analyzers/Shodan/Shodan_Host_History.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Shodan/Shodan_Host_History.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Shodan/Shodan_Host_History.json))

### Shodan_Search `v2.0`
Search query on Shodan

- **Author:** Sebastien Larinier @Sebdraven
- **License:** AGPL-V3
- **Data Types:** `other`
- **Configuration:** [.upstream/cortex/analyzers/Shodan/Shodan_Search.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Shodan/Shodan_Search.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Shodan/Shodan_Search.json))

### Shodan_Host `v1.0`
Retrieve key Shodan information on an IP address.

- **Author:** Sebastien Larinier @Sebdraven
- **License:** AGPL-V3
- **Data Types:** `ip`
- **Configuration:** [.upstream/cortex/analyzers/Shodan/Shodan_Host.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Shodan/Shodan_Host.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Shodan/Shodan_Host.json))

### Shodan_ReverseDNS `v1.0`
Retrieve ip reverse DNS resolutions on Shodan.

- **Author:** ANSSI
- **License:** AGPL-V3
- **Data Types:** `ip`
- **Configuration:** [.upstream/cortex/analyzers/Shodan/Shodan_ReverseDNS.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/Shodan/Shodan_ReverseDNS.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/Shodan/Shodan_ReverseDNS.json))

---

## Statistics

- **Total Analyzers:** 6
- **Total Responders:** 0
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 6

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
