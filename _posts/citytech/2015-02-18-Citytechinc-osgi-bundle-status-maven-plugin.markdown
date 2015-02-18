---
layout: post
title:  "OSGi Bundle Status Maven Plugin"
date:   2015-02-12 14:29:54
tags: [AEM, Tools]
author_avatar_url: https://pbs.twimg.com/profile_images/1857098986/citytech-twitter-avatar_400x400.jpg
github_owner: Citytechinc
github_repository: osgi-bundle-status-maven-plugin
---

The OSGi Bundle Status Maven Plugin is used during the install phase of the build lifecycle to check the status of one or more bundles in an OSGi container, such as Apache Felix. The plugin expects the OSGi container to be running at build time in order to connect and perform the check remotely. A typical use case for the plugin would be to verify that an OSGi bundle that is deployed by the project is running as expected after a successful build.

See the [project site](http://code.citytechinc.com/osgi-bundle-status-maven-plugin/) for the User Guide and project details.