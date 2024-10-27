---
layout: post
title: "Setting up OpenSpeedTest on a Synology NAS with docker compose"
excerpt_separator: <!--more-->
---

[OpenSpeedTest](https://openspeedtest.com/) is handy to measure the performance of the local (W)LAN: It is like any other speed test service, but it runs locally. Setting it up on a Synology NAS is easy.

<!--more-->

Create a new Project in Container Manager as usual. Use this `docker-compose.yml` to set it up.

```yaml
version: '3.3'
services:
    speedtest:
       environment:
           - DOMAIN_NAME=ssyn2.markusweimer.com
       restart: unless-stopped
       container_name: openspeedtest
       network_mode: "host"
       ports:
            - '80:3000'
            - '443:3001'
       image: openspeedtest/latest
```

This makes it so that OpenSpeedTest is available on port `3000` of your NAS.
