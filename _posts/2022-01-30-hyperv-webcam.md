---
layout: post
title: "Connecting a Webcam to a Hyper-V VM via RDP"
categories: TipsAndTricks
---

As mentioned [before](/tipsandtricks/2020/10/19/hyperv-webcam/), I run work on a VM on my
personal machine. I use Hyper-V as the hypervisor. For a while, struggled how to
get the webcam to be available in the VM. Turns out you can just use the Remote
Desktop Protocol (RDP) for this.

<!--more-->

It isn't quite as simple, however. When you enable "Enhanced Session" mode in
Hyper-V, you are in fact using RDP. But that path doesn't allow for the webcam
forwarding for some reason (Microsoft friends: please enlighten me). Instead,
you have to use RDP over the network:

## Step 1: Enable Remote desktop in the VM

![Screen recording of enabling RDP](/img/2022-01-30-enable-rdp.gif)

## Step 2: Determine the IP address the VM has on the local network

Your rooter will be able to tell you. Or use the hostname. For me, it is `mweimer-homevm`

## Step 3: Connnect via Remote Desktop Clien forward the webcam

![Screen recording of the needed configuration](/img/2022-01-30-configure_rdp.gif)

## Step 4 (maybe): Make sure that you can in fact log in

The above did not work for me. That is because I wasn't able to log in to the VM
using any credentials I could provide to the Remote Desktop Client. However, I
was able to circumvent this my disabling logging in via the Remote Desktop
Client. Instead, I now log in within the RDP session. To do so, open the `.rdp`
file with a text editor and add the following lines:

```
enablecredsspsupport:i:0
authentication level:i:2
```

*Note:* I don't have this sort of knowledge at my disposal. A kind coworker
found my other post and shared these two magic lines with me.
