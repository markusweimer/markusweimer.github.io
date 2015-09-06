---
author: admin
comments: true
date: 2009-09-14 09:10:12+00:00
layout: post
slug: snow-leopard-authentication-issues-with-custom-keyboard-layouts
title: Snow Leopard Authentication Issues with Custom Keyboard Layouts
wordpress_id: 819
categories:
- Hackery
---

Like many people needing to program and to write German texts, I use the excellent [U.S. Keyboard map with German Umlauts provided by Jan Borchers](http://hci.rwth-aachen.de/USGermanKeyboard). However, there is a pitfall when upgrading to Snow Leopard: The "Please enter password to do this" dialog no longer appears when needed, e.g. when installing the 10.6.1 update.

**Here's the quick fix: **Delete the content of ~/Library/Preferences/By Host and log out and back in. The authentication dialog should work now, but you lost the German Umlauts.

**The complete solution goes like this: **To regain the German Umlauts, delete the Roman.bundle in ~/Library/Keyboard Layouts. Now re-install the current version of it into **/Library/Keyboard Layouts, and not into your home folder.**

After that, your German Umlauts should work fine again. At least they did for me.
