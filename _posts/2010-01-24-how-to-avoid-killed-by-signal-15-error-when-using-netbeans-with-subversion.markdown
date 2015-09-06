---
author: admin
comments: true
date: 2010-01-24 03:00:37+00:00
layout: post
slug: how-to-avoid-killed-by-signal-15-error-when-using-netbeans-with-subversion
title: How to avoid “Killed by signal 15″ error when using Netbeans with Subversion
wordpress_id: 852
categories:
- Hackery
---

At least if you use Netbeans on the Mac with a reasonably current version of Subversion (e.g. installed through MacPorts), you may have faced the following situation: After each action that involves a ssh link, you get a Dialog box stating "Killed by signal 15". Here is an easy way to solve this:



	
  * Open Preferences and navigate to the "Miscellaneous" tab.

	
  * Inside this tab, open the "Versioning" sub-tab

	
  * Lastly, click on "Subversion" in the list on the left side.

	
  * You should see the following on your screen now:




[![Screenshot of the preferences of Netbeans 6.8](http://farm5.static.flickr.com/4055/4298736737_2bb2028d8f_m.jpg)](http://www.flickr.com/photos/weimode/4298736737/)






	
  * Now, hit the "Manage Connection Settings" button. I'd have highlighted the button in the screenshot if I knew how to draw a simple circle in Photoshop ;-)

	
  * The following dialog box looks like this:




[![Netbeans 6.8 Subversion connection settings](http://farm3.static.flickr.com/2710/4299483384_3eb9bb24eb_m.jpg)](http://www.flickr.com/photos/weimode/4299483384/)






	
  * As you can see, I inserted "ssh -q" in the field "Tunnel Command". Do the same


The annoying dialog box should be gone for good now.
