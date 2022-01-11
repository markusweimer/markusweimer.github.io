---
layout: post
title: "Home Automation: What works for me"
excerpt_separator: <!--more-->
---

Home automation has been an interest of mine for a while. Here, I collect notes
on what worked for me. Both as a reminder for myself and in the hopes that it is
useful to others dabbling in the space. This is **not a tutorial** for any of
the devices mentioned. There are plenty of those available on the internet.

<!--more-->

## The core: Home Assistant on a RaspBerry Pi

[Home Assistant][hassi] is a piece of software which serves as the controller of
my home. There are many reasons why it is great (OSS, easy to use, supports
anything under the sun, ...), but one blew me away as soon as I started using
it: Home Assistant bridges the various IoT ecosystems. Within minutes of
installing it, I had my Hue light switch switch of the lights (duh!) but *also*
switch off the music on my Sonos players. That is the sort of thing we expect
home automation to do. But without a connector between the various vendor
ecosystems, it is plain impossible.

I run Home Assistant on a [Raspberry Pi 4 (8 GB)][raspi]. This is way too much
hardware for my use case. But for others, it may be way too little as Home
Assistant can also integrate surveillance cameras and do computer vision on
those feeds. My RaspBerry Pi is in a [flirc] case and boots off of a MicroSD
card. For larger installations, it is probably better to use a USB SSD in e.g.
the [Argone 40 One case][argon]. I use that case for another Pi and can
recommend it. It is powered by the USB port of a APC backup battery and
connected via ethernet to my home network to maximize reliability.

[hassi]: https://www.home-assistant.io/
[raspi]: https://www.raspberrypi.com/
[flirc]: https://flirc.tv/more/raspberry-pi-4-case
[argon]: https://www.argon40.com/argon-one-m-2-case-for-raspberry-pi-4.html

## Stuff I already had

Home Assistant found a bunch of devices and Services in my home that it automatically integrated with:

* Hue Lights
* Sonos Speakers
* Xbox
* Synology NAS
* pfSense router

## The magic: Zigbee or Z-Wave devices

Home assistant can not only control devices on the local network, but also via
the common home automation mesh networks Zigbee and Z-Wave. I picked Zigbee,
mostly because I have the Hue bulbs already. They are Zigbee devices and provide
a strong backbone for the mesh network. Starting fresh, there are good reasons
for Z-Wave as well.

To connect to these mesh networks, I use the well named
[GoControl CECOMINOD016164 HUSBZB-1 USB Hub](https://www.amazon.com/gp/product/B01GJ826F8).
I found this product mentioned in one of the Home Assistant forums. It supports
both Zigbee and Z-Wave. I use only the Zigbee part of it. I haven't done enough
research to judge whether this is the best or even good device. But it works for
me.

With this device setup, I can connect sensors directly to Home Assistant without
using the vendor gateway. While this should work with the Hue lights, I have yet
to try it. Here are devices I was able to just use:

* [Linkind Door Window Sensor](https://www.amazon.com/gp/product/B07YDF7967)
* [Sonoff SNZB-01 Zigbee Wireless Switch](https://www.amazon.com/gp/product/B08BF9YQK1)
* [Sonoff SNZB-03 ZigBee Motion Sensor](https://www.amazon.com/gp/product/B08BFFJ69V)
* [Sonoff SNZB-02 ZigBee Mini Indoor Temperature and Humidity Sensor](https://www.amazon.com/gp/product/B08BCJNDYQ)

(This list was last updated on 2022-01-11)
