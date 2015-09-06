---
author: admin
comments: true
date: 2008-11-04 18:11:20+00:00
excerpt: "> *Update:* Selbst mit dem Trick unten gelingt nur das Laden des Treibers.\
  \ Die Vodafone Software weigert sich beharrlich, eine Verbindung aufzubauen. Das\
  \ auf [Apfelquak beschriebene Vorgehen](http://www.apfelquak.de/2008/10/09/vodafone-umts-stick-einrichten/)\
  \ scheint mehr Erfolg zu versprechen. Insgesamt ist es schon bedauerlich, dass man\
  \ einen UMTS Stick von Vodafone auf eine Promotion einer Mac Nachrichtenseite hin\
  \ bestellt, dann aber Windows braucht um den Stick auch in Betrieb zu nehmen. Das\
  \ war dann wohl das letzte Produkt von Vodafone, was ich gekauft habe.\n\nWie wahrscheinlich\
  \ viele andere auch, habe ich bei einem kürzlichen [Sonderangebot][angebot] zugeschlagen\
  \ und mir einen UMTS-Stick von Vodafone bestellt.\n\nBekommen habe ich ein Gerät\
  \ mit der Vodafone-Bezeichnung 'K3520'. Es handelt sich dabei um ein Gerät das Herstellers\
  \ Huawei, der es unter dem Namen 'E169' führt.\n\n[angebot]: http://www.mactechnews.de/news/index.html?id=142487\n\
  \nNachdem ich die Vodafone Software dazu installiert hatte, wurde ich jedoch von\
  \ dieser wunderschönen Dialogbox gegrüsst:\n\n\n\n<a href=\"http://www.flickr.com/photos/weimode/3003549656/\"\
  \ title=\"Error when using a Vodafone UMTS Stick by Markus.Weimer, on Flickr\"><img\
  \ src=\"http://farm4.static.flickr.com/3001/3003549656_9a662dd683.jpg\" width=\"\
  500\" height=\"255\" alt=\"Error when using a Vodafone UMTS Stick\" /></a>\n\nNach\
  \ einigem Suchen bin ich drauf gekommen, dass man bei Vodafone wohl übersehen hatte,\
  \ dass [Kernel Extensions auf dem Mac bestimmte Rechte brauchen][apple]. Das ist\
  \ auch sehr richtig so, sonst könnte eine Sicherheitslücke in z.B. einem Browser\
  \ viel zu leicht missbraucht werden, um den ganzen Rechner zu übernehmen (Windows\
  \ Anwender wissen, was ich hier meine).\n\nLösen liess sich das Problem für mich\
  \ durch einen kleinen Ausflug ins Terminal, wie von Apple in dem oben verlinkten\
  \ Dokument beschrieben:\n\n[apple]: http://developer.apple.com/documentation/Darwin/Conceptual/KEXTConcept/Articles/kext_permissions_ownership.html#//apple_ref/doc/uid/TP40005417\n\
  \n    $ cd /System/Library/Extensions\n    $ sudo /usr/sbin/chown -R root:wheel\
  \ HuaweiDataCardDriver.kext/\n    $ sudo find HuaweiDataCardDriver.kext/ -type d\
  \ -exec /bin/chmod 0755 {} \\;\n    $ sudo find HuaweiDataCardDriver.kext/ -type\
  \ f -exec /bin/chmod 0644 {} \\;\n\nSiehe da, schon geht's. Hoffentlich hilft das\
  \ dem ein oder anderen bei ähnlichen Problemen."
layout: post
slug: vodafone-umts-auf-dem-mac-update
title: Vodafone UMTS auf dem Mac (Update)
wordpress_id: 732
categories:
- Hackery
---

> *Update:* Selbst mit dem Trick unten gelingt nur das Laden des Treibers. Die Vodafone Software weigert sich beharrlich, eine Verbindung aufzubauen. Das auf [Apfelquak beschriebene Vorgehen](http://www.apfelquak.de/2008/10/09/vodafone-umts-stick-einrichten/) scheint mehr Erfolg zu versprechen. Insgesamt ist es schon bedauerlich, dass man einen UMTS Stick von Vodafone auf eine Promotion einer Mac Nachrichtenseite hin bestellt, dann aber Windows braucht um den Stick auch in Betrieb zu nehmen. Das war dann wohl das letzte Produkt von Vodafone, was ich gekauft habe.

Wie wahrscheinlich viele andere auch, habe ich bei einem kürzlichen [Sonderangebot][angebot] zugeschlagen und mir einen UMTS-Stick von Vodafone bestellt.

Bekommen habe ich ein Gerät mit der Vodafone-Bezeichnung 'K3520'. Es handelt sich dabei um ein Gerät das Herstellers Huawei, der es unter dem Namen 'E169' führt.

[angebot]: http://www.mactechnews.de/news/index.html?id=142487

Nachdem ich die Vodafone Software dazu installiert hatte, wurde ich jedoch von dieser wunderschönen Dialogbox gegrüsst:



[![Error when using a Vodafone UMTS Stick](http://farm4.static.flickr.com/3001/3003549656_9a662dd683.jpg)](http://www.flickr.com/photos/weimode/3003549656/)

Nach einigem Suchen bin ich drauf gekommen, dass man bei Vodafone wohl übersehen hatte, dass [Kernel Extensions auf dem Mac bestimmte Rechte brauchen][apple]. Das ist auch sehr richtig so, sonst könnte eine Sicherheitslücke in z.B. einem Browser viel zu leicht missbraucht werden, um den ganzen Rechner zu übernehmen (Windows Anwender wissen, was ich hier meine).

Lösen liess sich das Problem für mich durch einen kleinen Ausflug ins Terminal, wie von Apple in dem oben verlinkten Dokument beschrieben:

[apple]: http://developer.apple.com/documentation/Darwin/Conceptual/KEXTConcept/Articles/kext_permissions_ownership.html#//apple_ref/doc/uid/TP40005417

    $ cd /System/Library/Extensions
    $ sudo /usr/sbin/chown -R root:wheel HuaweiDataCardDriver.kext/
    $ sudo find HuaweiDataCardDriver.kext/ -type d -exec /bin/chmod 0755 {} \;
    $ sudo find HuaweiDataCardDriver.kext/ -type f -exec /bin/chmod 0644 {} \;

Siehe da, schon geht's. Hoffentlich hilft das dem ein oder anderen bei ähnlichen Problemen.
