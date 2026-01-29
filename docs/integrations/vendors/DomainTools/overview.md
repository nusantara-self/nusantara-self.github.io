# DomainTools


## Analyzers (10)

### DomainTools_Risk `v2.0`
Use DomainTools to get a risk score and evidence details on a domain or fqdn

- **Author:** CERT-BDF
- **License:** AGPL-V3
- **Data Types:** `domain`, `fqdn`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_Risk.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_Risk.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_Risk.json))

### DomainTools_WhoisLookup `v2.0`
Use DomainTools to get the ownership record for a domain or an IP address with basic registration details parsed.

- **Author:** CERT-BDF
- **License:** AGPL-V3
- **Data Types:** `domain`, `ip`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_WhoisLookup.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_WhoisLookup.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_WhoisLookup.json))

### DomainTools_Reputation `v2.0`
Use DomainTools to get a reputation score on a domain or fqdn

- **Author:** CERT-BDF
- **License:** AGPL-V3
- **Data Types:** `domain`, `fqdn`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_Reputation.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_Reputation.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_Reputation.json))

### DomainTools_WhoisLookupUnparsed `v2.0`
Use DomainTools to get the ownership record for an IP address or a domain without parsing.

- **Author:** CERT-BDF
- **License:** AGPL-V3
- **Data Types:** `ip`, `domain`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_WhoisLookupUnparsed.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_WhoisLookupUnparsed.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_WhoisLookupUnparsed.json))

### DomainTools_HostingHistory `v2.0`
Use DomainTools to get a list of historical registrant, name servers and IP addresses for a domain name.

- **Author:** ANSSI
- **License:** AGPL-V3
- **Data Types:** `domain`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_HostingHistory.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_HostingHistory.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_HostingHistory.json))

### DomainTools_ReverseNameServer `v2.0`
Use DomainTools to get a list of domain names that share the same primary or secondary name server.

- **Author:** CERT-BDF
- **License:** AGPL-V3
- **Data Types:** `domain`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseNameServer.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseNameServer.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseNameServer.json))

### DomainTools_WhoisHistory `v2.0`
Use DomainTools to get a list of historical Whois records associated with a domain name.

- **Author:** CERT-BDF
- **License:** AGPL-V3
- **Data Types:** `domain`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_WhoisHistory.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_WhoisHistory.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_WhoisHistory.json))

### DomainTools_ReverseIP `v2.0`
Use DomainTools to get a list of domain names sharing the same IP address.

- **Author:** CERT-BDF
- **License:** AGPL-V3
- **Data Types:** `ip`, `domain`, `fqdn`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseIP.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseIP.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseIP.json))

### DomainTools_ReverseIPWhois `v2.0`
Use DomainTools to get a list of IP addresses which share the same registrant information.

- **Author:** ANSSI
- **License:** AGPL-V3
- **Data Types:** `mail`, `ip`, `domain`, `other`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseIPWhois.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseIPWhois.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseIPWhois.json))

### DomainTools_ReverseWhois `v2.0`
Use DomainTools to get a list of domain names which share the same registrant information.

- **Author:** CERT-BDF
- **License:** AGPL-V3
- **Data Types:** `mail`, `ip`, `domain`, `other`
- **Configuration:** [.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseWhois.json](https://github.com/nusantara-self/strangebee-integrations/blob/main/.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseWhois.json) ([raw](https://raw.githubusercontent.com/nusantara-self/strangebee-integrations/refs/heads/main/.upstream/cortex/analyzers/DomainTools/DomainTools_ReverseWhois.json))

---

## Statistics

- **Total Analyzers:** 10
- **Total Responders:** 0
- **Total Functions:** 0
- **Total External Integrations:** 0
- **Total Integrations:** 10

---

*This file is auto-generated from the integration manifest. Do not edit manually.*
