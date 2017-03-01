---
layout: post
title:  "SecureCQ"
date:   2015-02-12 13:30:55
tags: [AEM]
author_avatar_url: https://avatars2.githubusercontent.com/u/932257?v=3&s=200
github_owner: Cognifide
github_repository: SecureCQ
---

Secure CQ is a tool which can be used to find the most popular security problems in your CQ instance. It tests both instances (author, publish) and also the dispatcher, as some resources should be restricted in the cache configuration. It checks:

* if the default passwords are changed,
* if there are no unnecessary protocols enabled after being published,
* if the the administrator console access is disabled,
* if content-grabbing selectors are restricted on the dispatcher,
* etc.