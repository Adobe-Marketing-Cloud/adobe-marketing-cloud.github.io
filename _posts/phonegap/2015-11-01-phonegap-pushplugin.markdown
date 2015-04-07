---
layout: post
title:  "Cordova Push Notifications Plugin"
date:   2015-04-07 14:29:55
tags: [PhoneGap]
author_avatar_url: https://pbs.twimg.com/profile_images/1451965535/BuildBot-square_400x400.png
github_owner: phonegap-build
github_repository: PushPlugin
---

This plugin is for use with [Cordova](http://incubator.apache.org/cordova/), and allows your application to receive push notifications on Amazon Fire OS, Android, iOS, Windows Phone and Windows8 devices.
* The Amazon Fire OS implementation uses [Amazon's ADM(Amazon Device Messaging) service](https://developer.amazon.com/sdk/adm.html).
* The Android implementation uses [Google's GCM (Google Cloud Messaging) service](http://developer.android.com/guide/google/gcm/index.html).
* The BlackBerry 10 version  uses [blackberry push service](https://developer.blackberry.com/devzone/develop/platform_services/push_service_overview.html).
* The iOS version is based on [Apple APNS Notifications](http://developer.apple.com/library/mac/#documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/ApplePushService/ApplePushService.html).
* The WP8 implementation is based on [MPNS](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402558(v=vs.105).aspx).
* Windows8 uses [Microsoft WNS Notifications](http://msdn.microsoft.com/en-us/library/windows/apps/hh913756.aspx).