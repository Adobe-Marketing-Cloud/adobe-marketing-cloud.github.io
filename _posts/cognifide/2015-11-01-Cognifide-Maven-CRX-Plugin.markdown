---
layout: post
title:  "Maven CRX Plugin"
date:   2015-02-12 13:30:55
tags: [AEM]
author_avatar_url: https://pbs.twimg.com/profile_images/459253580101201920/prQ2K63O_normal.png
github_owner: Cognifide
github_repository: Maven-CRX-Plugin
---

This is a plugin designed for Maven 2.x+ based builds to automate CRX compliant packages deployment. It allows to set up upload and install commands as a step in a build process speeding up entire development cycle.

On CQ 5.5, it also simplifies package deployment process by providing a goal (crx:activate) for one-step installation of packages on all publish instances (provided that replication agents are properly configured).