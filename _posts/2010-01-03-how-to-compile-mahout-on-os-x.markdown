---
author: admin
comments: true
date: 2010-01-03 02:34:20+00:00
layout: post
slug: how-to-compile-mahout-on-os-x
title: How to compile Apache Mahout on OS X
wordpress_id: 840
categories:
- Hackery
tags:
- Java
- Mahout
- Software
---

Compiling [Apache Mahout](http://lucene.apache.org/mahout/) should be straight forward on OS X, as the system comes with all the requirements needed. Turns out that is only partially true, as I hit two issues along the way:


### Wrong Java Version


**Problem:** I got the error 'javac: invalid target release: 1.6' even though I set Java 6 to be the default in the Java Preferences. Even on the command line, 'java -version' showed 1.6 as the version number. However, this did not carry over to Maven, as 'mvn -v' confirmed.

**Solution:** Explicitly set the 'JAVA_HOME' environment variable. In my case, I set it via 'export JAVA_HOME=/System/Library/Frameworks/JavaVM.framework/Versions/1.6/Home/'


### Out of Memory when compiling


**Problem:** I got an 'java.lang.OutOfMemoryError: Java heap space' when compiling the current svn checkout of Mahout (not the release)

**Solution: **Set the environment variable 'MAVEN_OPTS' to allow for more memory via 'export MAVEN_OPTS=-Xmx1024m'

Hope this helps when setting up your [Apache Mahout](http://lucene.apache.org/mahout/) development.
