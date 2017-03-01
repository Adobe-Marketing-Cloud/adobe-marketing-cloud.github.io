---
layout: post
title:  "wcm.io CONGA - CONfiguration GenerAtor"
date:   2016-02-23 16:45:00
tags: [Tools]
author_avatar_url: http://wcm.io/images/favicon-16@3x.png
github_owner: wcm-io-devops
github_repository: conga
---

[wcm.io DevOps CONGA - CONfiguration GenerAtor](http://devops.wcm.io/conga/)

The configuration generator helps generating configuration based on templates for a set of environments, nodes, roles and tenants. It supports any file type that can be generated using a text-based template. Additionally it supports validators and post processors with a flexible Java ServiceLoader-based extensibility model.

It targets DevOps teams where developers are responsible for defining the roles and templates, and operations defines the environments with the nodes and tenants. The generator can be executed from the command line or via a maven plugin.

Based on the extensibility model the wcm.io DevOps project hosts CONGA plugins:

* [CONGA Plugin for Apache Sling](http://devops.wcm.io/conga/plugins/sling)
* [CONGA Plugin for Adobe Experience Manager (AEM)](http://devops.wcm.io/conga/plugins/aem)

The wcm.io DevOps project provides some generic templates implementing best practice configurations for certain environments:

* [CONGA Definitions for Adobe Experience Manager (AEM)](http://devops.wcm.io/conga/definitions/aem)

Talk on [adaptTo()](http://adapt.to) 2015: [CONGA - Configuration generation for Sling and AEM](http://adapt.to/2015/en/schedule/conga---configuration-generation-for-sling-and-aem.html)
