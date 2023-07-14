# Data Recovery Plan

## Resources

 - [C4 Model for software engineering](https://c4model.com)
 - [GCP Architecture diagram](https://googlecloudcheatsheet.withgoogle.com/architecture)


## Infrastructure as Code
- Used for provisioning and managing cloud resources
- Creating and provisioning a VM
- Referring to all APIs used to deploy infrastructure

- Declarative statements : the yaml configuration is a picture of the desired stage. Unlike CLI commands which are imperative and tells what to do : We can focus on how the infrastructure should be.

Popular solution : Hashicorp Terraform, which is multi API / multi-cloud with an open-source core.

## Configuration Management
- Used for virtual machine OS-level configuration
- Configuring the internals of the VMs
- Referring to package configuration & software maintenance

