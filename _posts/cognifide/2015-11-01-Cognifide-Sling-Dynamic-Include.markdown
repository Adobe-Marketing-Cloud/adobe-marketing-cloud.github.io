---
layout: post
title:  "Sling Dynamic Include"
date:   2015-02-12 12:30:55
tags: [AEM]
author_avatar_url: https://avatars2.githubusercontent.com/u/932257?v=3&s=200
github_owner: Cognifide
github_repository: Sling-Dynamic-Include
---

The purpose of the module presented here is to replace dynamic generated components (eg. current time or foreign exchange rates) with server-side include tag (eg. [SSI](http://httpd.apache.org/docs/current/howto/ssi.html) or [ESI](http://www.w3.org/TR/esi-lang)). Therefore the dispatcher is able to cache the whole page but dynamic components are generated and included with every request. Components to include are chosen in filter configuration using `resourceType` attribute.

When the filter intercepts request for a component with given `resourceType`, it'll return a server-side include tag (eg. `<!--#include virtual="/path/to/resource" -->` for Apache server). However the path is extended by new selector (`nocache` by default). This is required because filter has to know when to return actual content.

Components don't have to be modified in order to use this module (or even aware of its existence). It's servlet filter, installed as an OSGi bundle and it can be enabled, disabled or reconfigured without touching CQ installation.