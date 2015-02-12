---
layout: post
title:  "AEM hybris integration extensions"
date:   2014-11-28 14:26:55
tags: [AEM, Example]
author_avatar_url: https://avatars.githubusercontent.com/u/1440554?v=3
github_owner: adobe-marketing-cloud
github_repository: cq-java-hybris-extensions
---

This project shows how to extend/customize the Hybris connector to achieve the following:   
* Parse some custom Hybris data when importing products from Hybris: `MyResponseParser#parseProductData`   
* Import product references from Hybris: `MyResponseParser#parseUnknownProductAttribute`   
* Add/update some specific product attributes in CQ when importing products from Hybris: `MyImportHandler#updateProduct`   
* and more...