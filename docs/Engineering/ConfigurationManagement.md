# Configuration Management
## Summary

- Used for virtual machine OS-level configuration
- Ex: Configuring the internals of the VMs
- Referring to package configuration & software maintenance
## Tools

- Puppet *(might be covered here later on)*
- Ansible
- Chef

## OS Hardening

 - [OVH Debian CIS OS Hardening helper](https://github.com/ovh/debian-cis/tree/master)

 ### Basic Debian 11 hardening example

``` bash
git clone https://github.com/ovh/debian-cis.git && cd debian-cis
cp debian/default /etc/default/cis-hardening
sed -i "s#CIS_ROOT_DIR=.*#CIS_ROOT_DIR='$(pwd)'#" /etc/default/cis-hardening
bin/hardening.sh --audit-all
bin/hardening.sh --audit --set-hardening-level 2
bin/hardening.sh --apply

## Optional / for reference
sed -i "s/status=.+/status=enabled/" etc/conf.d/*audit*.cfg
sed -i "s/status=.+/status=enabled/" etc/conf.d/*kernel*.cfg
sed -i "s/status=disabled/status=enabled/g" etc/conf.d/*audit*.cfg
sed -i "s/status=disabled/status=enabled/g" etc/conf.d/*kernel*.cfg
sed -i "s/status=disabled/status=enabled/g" etc/conf.d/4.1.*.cfg
sed -i "s/status=disabled/status=enabled/g" etc/conf.d/4.1.15_record_sudo_usage.cfg 
sed -i "s/status=enabled/status=disabled/g" etc/conf.d/4.1.17_freeze_auditd_conf.cfg
bin/hardening.sh --apply

## 5.1.8 CIS
rm /etc/cron.deny
touch /etc/cron.allow
chmod 600 /etc/cron.allow
chown root:root /etc/cron.allow
touch /etc/at.allow
chmod 600 /etc/at.allow
chown root:root /etc/at.allow
## 5.2.1
chmod 600 /etc/ssh/sshd_config
```
