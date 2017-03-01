---
layout: post
title:  "Prosper"
date:   2015-02-12 14:29:54
tags: [AEM, Tools, Testing]
author_avatar_url: https://avatars3.githubusercontent.com/u/527429?v=3&s=200
github_owner: ICF Olson
github_repository: prosper
---

Prosper is an integration testing library for AEM (Adobe CQ) projects using [Spock](http://spockframework.org/), a [Groovy](http://groovy.codehaus.org)-based testing framework notable for it's expressive specification language.  The library contains a base Spock specification using an in-memory repository for JCR session-based testing and also includes basic Sling request and resource implementations for testing interactions between CQ objects.

* Test AEM projects outside of an OSGi container in the standard Maven build lifecycle.
* Write test specifications in [Groovy](http://groovy.codehaus.org) using [Spock](http://spockframework.org/), a JUnit-based testing framework with an elegant syntax for writing tests more quickly and efficiently.
* Extends and augments the transient JCR implementation provided by the [Apache Sling Testing Tools](http://sling.apache.org/documentation/development/sling-testing-tools.html) to eliminate the need to deploy tests in OSGi bundles for most testing scenarios.
* more...