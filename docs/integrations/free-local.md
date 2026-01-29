# Free & Local Integrations

Integrations that are either free to use or run locally without external dependencies.

## Summary

- **Total Analyzers:** 72 (8 local, 64 free)
- **Total Responders:** 8 (0 local, 8 free)
- **Total Integrations:** 80

## Analyzers

### Local Analyzers

<details>
<summary><strong>Capa</strong> <code>v1.0</code> [Local] - CAPA</summary>

**Vendor:** [CAPA](vendors/Capa/overview)
**Data Types:** `file`

Analyze files with Capa

</details>

<details>
<summary><strong>ClamAV_FileInfo</strong> <code>v1.1</code> [Local] - ClamAV</summary>

**Vendor:** [ClamAV](vendors/ClamAV/overview)
**Data Types:** `file`

Use Clamscan with custom rules

</details>

<details>
<summary><strong>EmlParser</strong> <code>v2.1</code> [Local] - EmlParser</summary>

**Vendor:** [EmlParser](vendors/EmlParser/overview)
**Data Types:** `file`

Parse and visualise EML email message. Submit a .eml formatted file and extract some useful information.

</details>

<details>
<summary><strong>FileInfo</strong> <code>v8.0</code> [Local] - FileInfo</summary>

**Vendor:** [FileInfo](vendors/FileInfo/overview)
**Data Types:** `file`

Parse files in several formats such as OLE and OpenXML to detect VBA macros, extract their source code, generate useful information on PE, PDF files...

</details>

<details>
<summary><strong>Msg_Parser</strong> <code>v3.0</code> [Local] - MsgParser</summary>

**Vendor:** [MsgParser](vendors/MsgParser/overview)
**Data Types:** `file`

Parse Outlook MSG files and extract the main artifacts.

</details>

<details>
<summary><strong>QrDecode</strong> <code>v1.0</code> [Local] - QrDecode</summary>

**Vendor:** [QrDecode](vendors/QrDecode/overview)
**Data Types:** `file`

Extracts data from one or more QR codes.

</details>

<details>
<summary><strong>ValidateObservable</strong> <code>v1.0</code> [Local] - ValidateObservable</summary>

**Vendor:** [ValidateObservable](vendors/ValidateObservable/overview)
**Data Types:** `ip`, `domain`, `url`, `fqdn`, `mail`, `hash`, `filename`, `uri_path`, `user-agent`

Use regexes and libraries to indicate if observable is valid

</details>

<details>
<summary><strong>Yara</strong> <code>v3.0</code> [Local] - YARA</summary>

**Vendor:** [YARA](vendors/Yara/overview)
**Data Types:** `file`

Check files against YARA rules, either from local filesystem or from one or multiple GitHub repositories. NOTE: Performance & execution time may be much longer according to the number of rules checked.

</details>

### Free Subscription Analyzers

<details>
<summary><strong>AbuseIPDB</strong> <code>v1.1</code> [Free] - AbuseIPDB</summary>

**Vendor:** [AbuseIPDB](vendors/AbuseIPDB/overview)
**Data Types:** `ip`

Checks an IP against AbuseIPDB for abuse score, categories, and recent reports.

</details>

<details>
<summary><strong>AIL_OnionLookup</strong> <code>v1.0</code> [Free] - AILOnionLookup</summary>

**Vendor:** [AILOnionLookup](vendors/AILOnionLookup/overview)
**Data Types:** `domain`, `url`, `fqdn`

Checks the existence of Tor hidden services and retrieving their associated metadata. Onion-lookup relies on an AIL instance to obtain the metadata.

</details>

<details>
<summary><strong>OTXQuery</strong> <code>v2.0</code> [Free] - AlienVault OTX</summary>

**Vendor:** [AlienVault OTX](vendors/OTXQuery/overview)
**Data Types:** `url`, `domain`, `file`, `hash`, `ip`

Query AlienVault OTX for IPs, domains, URLs, or file hashes.

</details>

<details>
<summary><strong>CIRCLHashlookup</strong> <code>v1.1</code> [Free] - CIRCLHashlookup</summary>

**Vendor:** [CIRCLHashlookup](vendors/CIRCLHashlookup/overview)
**Data Types:** `hash`

CIRCL hashlookup uses a public API to lookup hash values against databases of known good files

</details>

<details>
<summary><strong>CIRCLPassiveDNS</strong> <code>v2.0</code> [Free] - CIRCLPassiveDNS</summary>

**Vendor:** [CIRCLPassiveDNS](vendors/CIRCLPassiveDNS/overview)
**Data Types:** `domain`, `url`, `ip`

Check CIRCL's Passive DNS for a given domain or URL.

</details>

<details>
<summary><strong>CIRCLPassiveSSL</strong> <code>v2.0</code> [Free] - CIRCLPassiveSSL</summary>

**Vendor:** [CIRCLPassiveSSL](vendors/CIRCLPassiveSSL/overview)
**Data Types:** `ip`, `certificate_hash`, `hash`

Check CIRCL's Passive SSL for a given IP address or a X509 certificate hash.

</details>

<details>
<summary><strong>CIRCLVulnerabilityLookup</strong> <code>v1.0</code> [Free] - CIRCLVulnerabilityLookup</summary>

**Vendor:** [CIRCLVulnerabilityLookup](vendors/CIRCLVulnerabilityLookup/overview)
**Data Types:** `cve`, `cve_id`, `vuln`, `vuln_id`, `vulnerability`, `vulnerability_id`, `cveid`, `other`

Queries the CIRCL Vulnerability Lookup API to retrieve detailed information on security vulnerabilities, including CVEs, severity (CVSS), exploit prediction (EPSS), affected products, advisories, and recent sightings.

</details>

<details>
<summary><strong>Crowdsec_Analyzer</strong> <code>v1.1</code> [Free] - CrowdSec</summary>

**Vendor:** [CrowdSec](vendors/Crowdsec/overview)
**Data Types:** `ip`

Query Crowdsec API

</details>

<details>
<summary><strong>Crt_sh_Transparency_Logs</strong> <code>v1.0</code> [Free] - Crtsh</summary>

**Vendor:** [Crtsh](vendors/Crtsh/overview)
**Data Types:** `domain`

Query domains against the certificate transparency lists available at crt.sh.

</details>

<details>
<summary><strong>CyberCrime-Tracker</strong> <code>v1.0</code> [Free] - CyberCrime-Tracker</summary>

**Vendor:** [CyberCrime-Tracker](vendors/CyberCrime-Tracker/overview)
**Data Types:** `domain`, `fqdn`, `ip`, `url`, `other`

Search cybercrime-tracker.net for C2 servers.

</details>

<details>
<summary><strong>DShield_lookup</strong> <code>v1.0</code> [Free] - DShield</summary>

**Vendor:** [DShield](vendors/DShield/overview)
**Data Types:** `ip`

Query the SANS ISC DShield API to check for an IP address reputation.

</details>

<details>
<summary><strong>EchoTrail</strong> <code>v1.0</code> [Free] - EchoTrail</summary>

**Vendor:** [EchoTrail](vendors/EchoTrail/overview)
**Data Types:** `hash`, `filename`

EchoTrail Insights takes a Windows filename or hash and provides several unique pieces of analytical context including prevalence & rank scores, process ancestry, behavioral analysis, and security analysis.

</details>

<details>
<summary><strong>Elasticsearch_Analysis</strong> <code>v1.0</code> [Free] - Elasticsearch</summary>

**Vendor:** [Elasticsearch](vendors/Elasticsearch/overview)
**Data Types:** `url`, `domain`, `ip`, `hash`, `filename`, `fqdn`

Search for IoCs in Elasticsearch

</details>

<details>
<summary><strong>EmailRep</strong> <code>v1.0</code> [Free] - EmailRep</summary>

**Vendor:** [EmailRep](vendors/EmailRep/overview)
**Data Types:** `mail`

emailrep.io lookup.

</details>

<details>
<summary><strong>JA4_FoxIO</strong> <code>v1.0</code> [Free] - FoxIO</summary>

**Vendor:** [FoxIO](vendors/FoxIO/overview)
**Data Types:** `user-agent`, `ja4-fingerprint`

JA4 Fingerprint analysis with FoxIO Database

</details>

<details>
<summary><strong>GreyNoise</strong> <code>v3.2</code> [Free] - GreyNoise</summary>

**Vendor:** [GreyNoise](vendors/GreyNoise/overview)
**Data Types:** `ip`

Determine whether an IP has known scanning activity using GreyNoise.

</details>

<details>
<summary><strong>Hashdd_Detail</strong> <code>v2.0</code> [Free] - Hashdd</summary>

**Vendor:** [Hashdd](vendors/Hashdd/overview)
**Data Types:** `hash`

Determine whether a hash is good or bad; if good then list what it is.

</details>

<details>
<summary><strong>Hashdd_Status</strong> <code>v2.0</code> [Free] - Hashdd</summary>

**Vendor:** [Hashdd](vendors/Hashdd/overview)
**Data Types:** `hash`

Determine whether a hash is good or bad.

</details>

<details>
<summary><strong>Hunterio_DomainSearch</strong> <code>v1.0</code> [Free] - Hunter.io</summary>

**Vendor:** [Hunter.io](vendors/Hunterio/overview)
**Data Types:** `domain`, `fqdn`

hunter.io is a service to find email addresses from a domain.

</details>

<details>
<summary><strong>Inoitsu</strong> <code>v1.0</code> [Free] - Inoitsu</summary>

**Vendor:** [Inoitsu](vendors/Inoitsu/overview)
**Data Types:** `mail`

Query Inoitsu for a compromised email address.

</details>

<details>
<summary><strong>IntezerCommunity</strong> <code>v1.0</code> [Free] - IntezerCommunity</summary>

**Vendor:** [IntezerCommunity](vendors/IntezerCommunity/overview)
**Data Types:** `file`, `hash`

Analyze a possible malicious file with Intezer Analyzer

</details>

<details>
<summary><strong>isMalicious_GetReport</strong> <code>v1.0</code> [Free] - isMalicious</summary>

**Vendor:** [isMalicious](vendors/isMalicious/overview)
**Data Types:** `ip`, `domain`, `fqdn`

Check if an IP address or domain is malicious using isMalicious.com threat intelligence. Returns risk score, threat categories, reputation data, and detection sources.

</details>

<details>
<summary><strong>Jupyter_Run_Notebook_Analyzer</strong> <code>v1.0</code> [Free] - Jupyter</summary>

**Vendor:** [Jupyter](vendors/Jupyter/overview)
**Data Types:** `domain`, `hostname`, `ip`, `url`, `fqdn`, `uri_path`, `user-agent`, `hash`, `mail`, `mail_subject`, `registry`, `regexp`, `other`, `filename`, `mail-subject`

Execute a parameterized notebook in Jupyter

</details>

<details>
<summary><strong>Lookyloo_Screenshot</strong> <code>v1.0</code> [Free] - Lookyloo</summary>

**Vendor:** [Lookyloo](vendors/Lookyloo/overview)
**Data Types:** `url`, `domain`, `fqdn`, `ip`

Take a screenshot of an url, domain, FQDN or IP and report all HTTP redirections

</details>

<details>
<summary><strong>MalwareBazaar</strong> <code>v1.0</code> [Free] - MalwareBazaar</summary>

**Vendor:** [MalwareBazaar](vendors/MalwareBazaar/overview)
**Data Types:** `hash`

Search hashes on MalwareBazaar.

</details>

<details>
<summary><strong>Malwares_GetReport</strong> <code>v1.0</code> [Free] - Malwares</summary>

**Vendor:** [Malwares](vendors/Malwares/overview)
**Data Types:** `file`, `hash`, `domain`, `ip`

Get the latest Malwares report for a file, hash, domain or an IP address.

</details>

<details>
<summary><strong>Malwares_Scan</strong> <code>v1.0</code> [Free] - Malwares</summary>

**Vendor:** [Malwares](vendors/Malwares/overview)
**Data Types:** `file`

Use Malwares' API to scan a file or URL.

</details>

<details>
<summary><strong>MSDefenderOffice365_SafeLinksDecoder.json</strong> <code>v1.0</code> [Free] - Microsoft Defender for Office 365</summary>

**Vendor:** [Microsoft Defender for Office 365](vendors/MSDefenderOffice365/overview)
**Data Types:** `url`

Decodes Office 365 ATP Safe Links to extract original URLs. Supports url observables containing safelinks.protection.outlook.com domains.

</details>

<details>
<summary><strong>MISP</strong> <code>v2.1</code> [Free] - MISP</summary>

**Vendor:** [MISP](vendors/MISP/overview)
**Data Types:** `domain`, `ip`, `url`, `fqdn`, `uri_path`, `user-agent`, `hash`, `mail`, `mail_subject`, `registry`, `regexp`, `other`, `filename`, `mail-subject`

Query multiple MISP instances for events containing an observable.

</details>

<details>
<summary><strong>NERD</strong> <code>v1.1</code> [Free] - NERD</summary>

**Vendor:** [NERD](vendors/NERD/overview)
**Data Types:** `ip`

Get Reputation score and other basic information from Network Entity Reputation Database (NERD)

</details>

<details>
<summary><strong>ONYPHE_ASM</strong> <code>v1.1</code> [Free] - ONYPHE</summary>

**Vendor:** [ONYPHE](vendors/Onyphe/overview)
**Data Types:** `ip`, `domain`, `fqdn`, `hash`

Manage an attack surface from The Hive using ONYPHE riskscan category

</details>

<details>
<summary><strong>ONYPHE_Ctiscan</strong> <code>v1.0</code> [Free] - ONYPHE</summary>

**Vendor:** [ONYPHE](vendors/Onyphe/overview)
**Data Types:** `ip`, `domain`, `fqdn`, `hash`, `autonomous-system`, `other`

Query ONYPHE Ctiscan threat hunting data for open services (takes ip, domain, fqdn, autonomous-system or hash.)

</details>

<details>
<summary><strong>ONYPHE_Search</strong> <code>v1.1</code> [Free] - ONYPHE</summary>

**Vendor:** [ONYPHE](vendors/Onyphe/overview)
**Data Types:** `ip`, `domain`, `fqdn`, `hash`

Retrieve results from ONYPHE Search API for a given ip, domain, fqdn or hash (sha256 TLS fingerprint) from specified category

</details>

<details>
<summary><strong>ONYPHE_Summary_API</strong> <code>v1.2</code> [Free] - ONYPHE</summary>

**Vendor:** [ONYPHE](vendors/Onyphe/overview)
**Data Types:** `ip`, `domain`, `fqdn`

Retrieve summary information Onyphe has for given ip, domain, or fqdn.

</details>

<details>
<summary><strong>ONYPHE_Vulnscan</strong> <code>v1.1</code> [Free] - ONYPHE</summary>

**Vendor:** [ONYPHE](vendors/Onyphe/overview)
**Data Types:** `ip`, `domain`, `fqdn`, `hash`

Retrieve vulnerability data from ONYPHE vulnscan category for a given ip, domain, fqdn or hash (sha256 TLS fingerprint)

</details>

<details>
<summary><strong>PhishingInitiative_Lookup</strong> <code>v2.0</code> [Free] - PhishingInitiative</summary>

**Vendor:** [PhishingInitiative](vendors/PhishingInitiative/overview)
**Data Types:** `url`

Use Phishing Initiative to check if a URL is a verified phishing site.

</details>

<details>
<summary><strong>PhishingInitiative_Scan</strong> <code>v1.0</code> [Free] - PhishingInitiative</summary>

**Vendor:** [PhishingInitiative](vendors/PhishingInitiative/overview)
**Data Types:** `url`

Use Phishing Initiative to scan a URL.

</details>

<details>
<summary><strong>PhishTank_CheckURL</strong> <code>v2.1</code> [Free] - PhishTank</summary>

**Vendor:** [PhishTank](vendors/PhishTank/overview)
**Data Types:** `url`

Use PhishTank to check if a URL is a verified phishing site.

</details>

<details>
<summary><strong>Shodan_DNSResolve</strong> <code>v1.0</code> [Free] - Shodan</summary>

**Vendor:** [Shodan](vendors/Shodan/overview)
**Data Types:** `domain`, `fqdn`

Retrieve domain resolutions on Shodan.

</details>

<details>
<summary><strong>Shodan_Host</strong> <code>v1.0</code> [Free] - Shodan</summary>

**Vendor:** [Shodan](vendors/Shodan/overview)
**Data Types:** `ip`

Retrieve key Shodan information on an IP address.

</details>

<details>
<summary><strong>Shodan_Host_History</strong> <code>v1.0</code> [Free] - Shodan</summary>

**Vendor:** [Shodan](vendors/Shodan/overview)
**Data Types:** `ip`

Retrieve Shodan history scan results  for an IP address.

</details>

<details>
<summary><strong>Shodan_InfoDomain</strong> <code>v1.0</code> [Free] - Shodan</summary>

**Vendor:** [Shodan](vendors/Shodan/overview)
**Data Types:** `domain`, `fqdn`

Retrieve key Shodan information on a domain.

</details>

<details>
<summary><strong>Shodan_ReverseDNS</strong> <code>v1.0</code> [Free] - Shodan</summary>

**Vendor:** [Shodan](vendors/Shodan/overview)
**Data Types:** `ip`

Retrieve ip reverse DNS resolutions on Shodan.

</details>

<details>
<summary><strong>Shodan_Search</strong> <code>v2.0</code> [Free] - Shodan</summary>

**Vendor:** [Shodan](vendors/Shodan/overview)
**Data Types:** `other`

Search query on Shodan

</details>

<details>
<summary><strong>Splunk_Search_Domain_FQDN</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `domain`, `fqdn`

Execute a savedsearch on a Splunk instance with a domain or a FQDN as argument

</details>

<details>
<summary><strong>Splunk_Search_File_Filename</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `file`, `filename`

Execute a savedsearch on a Splunk instance with a file/filename as argument

</details>

<details>
<summary><strong>Splunk_Search_Hash</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `hash`

Execute a savedsearch on a Splunk instance with a hash as argument

</details>

<details>
<summary><strong>Splunk_Search_IP</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `ip`

Execute a savedsearch on a Splunk instance with an IP as argument

</details>

<details>
<summary><strong>Splunk_Search_Mail_Email</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `mail`, `email`

Execute a savedsearch on a Splunk instance with a mail/email as argument

</details>

<details>
<summary><strong>Splunk_Search_Mail_Subject</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `mail_subject`, `mail-subject`

Execute a savedsearch on a Splunk instance with a mail subject as argument

</details>

<details>
<summary><strong>Splunk_Search_Other</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `other`

Execute a savedsearch on a Splunk instance with an unidentified data as argument

</details>

<details>
<summary><strong>Splunk_Search_Registry</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `registry`

Execute a savedsearch on a Splunk instance with a registry data as argument

</details>

<details>
<summary><strong>Splunk_Search_URL_URI_Path</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `url`, `uri_path`

Execute a savedsearch on a Splunk instance with an URL or a URI path as argument

</details>

<details>
<summary><strong>Splunk_Search_User</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `other`

Execute a savedsearch on a Splunk instance with a user ID as argument

</details>

<details>
<summary><strong>Splunk_Search_User_Agent</strong> <code>v3.0</code> [Free] - Splunk</summary>

**Vendor:** [Splunk](vendors/Splunk/overview)
**Data Types:** `user-agent`

Execute a savedsearch on a Splunk instance with a user agent as argument

</details>

<details>
<summary><strong>TorBlutmagie</strong> <code>v1.0</code> [Free] - TorBlutmagie</summary>

**Vendor:** [TorBlutmagie](vendors/TorBlutmagie/overview)
**Data Types:** `ip`, `domain`, `fqdn`

Query https://torstatus.rueckgr.at/query_export.php/Tor_query_EXPORT.csv (formerly TorBlutmagie) for TOR exit nodes IP addresses or names.

</details>

<details>
<summary><strong>Triage</strong> <code>v2.0</code> [Free] - Triage</summary>

**Vendor:** [Triage](vendors/Triage/overview)
**Data Types:** `ip`, `url`, `file`

Submit artifacts to the Recorded Future Triage sandbox service. This analyzer requires a paid subscription for the Private and Recorded Future sandboxes.

</details>

<details>
<summary><strong>UrlDNA_New_Scan</strong> <code>v0.1.0</code> [Free] - urlDNA.io</summary>

**Vendor:** [urlDNA.io](vendors/urlDNA.io/overview)
**Data Types:** `url`

Perform a new scan on urlDNA.io

</details>

<details>
<summary><strong>UrlDNA_Search</strong> <code>v0.1.0</code> [Free] - urlDNA.io</summary>

**Vendor:** [urlDNA.io](vendors/urlDNA.io/overview)
**Data Types:** `ip`, `domain`, `url`

Perform a search on urlDNA.io for IPs, domains or URLs

</details>

<details>
<summary><strong>URLhaus</strong> <code>v2.0</code> [Free] - URLhaus</summary>

**Vendor:** [URLhaus](vendors/URLhaus/overview)
**Data Types:** `domain`, `fqdn`, `url`, `hash`, `ip`

Search domains, IPs, URLs or hashes on URLhaus.

</details>

<details>
<summary><strong>Urlscan.io_Scan</strong> <code>v0.1.0</code> [Free] - URLScan.io</summary>

**Vendor:** [URLScan.io](vendors/Urlscan.io/overview)
**Data Types:** `url`, `domain`, `fqdn`

Scan URLs on urlscan.io

</details>

<details>
<summary><strong>Urlscan.io_Search</strong> <code>v0.1.1</code> [Free] - URLScan.io</summary>

**Vendor:** [URLScan.io](vendors/Urlscan.io/overview)
**Data Types:** `ip`, `domain`, `hash`, `fqdn`, `url`

Search IPs, domains, hashes or URLs on urlscan.io

</details>

<details>
<summary><strong>Vulners_CVE</strong> <code>v1.0</code> [Free] - Vulners</summary>

**Vendor:** [Vulners](vendors/Vulners/overview)
**Data Types:** `cve`

Get information about CVE from powerful Vulners database.

</details>

<details>
<summary><strong>Vulners_IOC</strong> <code>v1.0</code> [Free] - Vulners</summary>

**Vendor:** [Vulners](vendors/Vulners/overview)
**Data Types:** `url`, `domain`, `ip`

Get information from the RST Threat Feed, which integrated with Vulners, for a domain, url or an IP address.

</details>

## Responders

### Free Subscription Responders

<details>
<summary><strong>AbuseIPDB_Report</strong> <code>v1.0</code> [Free] - AbuseIPDB</summary>

**Vendor:** [AbuseIPDB](vendors/AbuseIPDB/overview)
**Data Types:** `thehive:case_artifact`

Report an IP address to AbuseIPDB for abuse tracking and community sharing. Please, make sure to use the correct category in your Cortex responder configuration.

</details>

<details>
<summary><strong>Jupyter_Run_Notebook_Responder</strong> <code>v1.0</code> [Free] - Jupyter</summary>

**Vendor:** [Jupyter](vendors/Jupyter/overview)
**Data Types:** `thehive:case`, `thehive:case_artifact`, `thehive:alert`, `thehive:case_task`, `thehive:case_task_log`

Execute a parameterized notebook in Jupyter

</details>

<details>
<summary><strong>MSDefenderOffice365_block</strong> <code>v1.0</code> [Free] - Microsoft Defender for Office 365</summary>

**Vendor:** [Microsoft Defender for Office 365](vendors/MSDefenderOffice365/overview)
**Data Types:** `thehive:case_artifact`

Add entries to the Tenant Allow/Block List in the Microsoft 365 Defender

</details>

<details>
<summary><strong>MSDefenderOffice365_unblock</strong> <code>v1.0</code> [Free] - Microsoft Defender for Office 365</summary>

**Vendor:** [Microsoft Defender for Office 365](vendors/MSDefenderOffice365/overview)
**Data Types:** `thehive:case_artifact`

Add entries to the Tenant Allow/Block List in the Microsoft 365 Defender

</details>

<details>
<summary><strong>n8n</strong> <code>v1.0</code> [Free] - n8n</summary>

**Vendor:** [n8n](vendors/n8n/overview)
**Data Types:** `thehive:case`, `thehive:alert`, `thehive:case_artifact`, `thehive:case_task`, `thehive:case_task_log`

Send data to n8n via webhook

</details>

<details>
<summary><strong>Slack_CreateChannel</strong> <code>v1.0</code> [Free] - Slack</summary>

**Vendor:** [Slack](vendors/Slack/overview)
**Data Types:** `thehive:case`

Creates a Slack channel for a TheHive case, invites participants, and optionally posts a case summary and description.

</details>

<details>
<summary><strong>Slack_SyncChannel</strong> <code>v1.0</code> [Free] - Slack</summary>

**Vendor:** [Slack](vendors/Slack/overview)
**Data Types:** `thehive:case`

Syncs Slack channel conversations to TheHive task logs. Imports messages chronologically with file attachments for traceability.

</details>

<details>
<summary><strong>Telegram</strong> <code>v1.0</code> [Free] - Telegram</summary>

**Vendor:** [Telegram](vendors/Telegram/overview)
**Data Types:** `thehive:case`

Send a message to Telegram with information from TheHive case

</details>

---

*This catalog is auto-generated. Do not edit manually.*
