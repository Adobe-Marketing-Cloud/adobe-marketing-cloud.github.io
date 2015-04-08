---
layout: post
title:  "CRX Content Package Deployer Plugin"
date:   2015-04-06 14:31:55
tags: [Tools, AEM]
author_avatar_url: https://avatars2.githubusercontent.com/u/107424?v=3&s=200
github_owner: jenkinsci
github_repository: crx-content-package-deployer-plugin
---
Deploys content packages to AEM applications.

* Supports password-less HTTP Signature authentication using your configured SSH Private Keys, eliminating the need to
coordinate password exchange between developers, devops, and operations teams.
* Downloads and/or deploys 1-to-many CRX packages per execution, and deploys each CRX package to 1-to-many servers per
execution
* The multiselect-enabled Package Choice Parameter allows for execution of parameterized builds using a selection
widget populated with a list of packages retrieved from a CRX server.