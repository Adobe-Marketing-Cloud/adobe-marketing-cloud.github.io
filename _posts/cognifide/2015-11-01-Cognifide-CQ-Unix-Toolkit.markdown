---
layout: post
title:  "CQ Unix Toolkit"
date:   2015-02-12 15:28:55
tags: [AEM, Tools]
categories: [Cognifide]
author_avatar_url: https://avatars2.githubusercontent.com/u/932257?v=3&s=200
github_owner: Cognifide
github_repository: CQ-Unix-Toolkit
---

CQ Unix Toolkit is a set of POSIX shell tools that calls curl and other 3rd
party commands to perform some different tasks on Adobe CQ platform such as:

* Create, Build, upload, list, download, install and deletion of CRX zip
  packages
* Maintenance tasks: consistency checks, TarPM compaction and index merge,
  DataStore garbage collection
* Clear/invalidate dispatcher cache for subtree specified by `/statfilelevel`
* Active workflow instances list
* Display OSGI bundles list and start/stop specified bundles

Each action is wrapped in separate stand-alone script with additional usage
output that allows to perform these tasks easily.