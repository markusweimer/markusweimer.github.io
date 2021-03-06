---
layout: post
title: "Connecting a Webcam and USB Audio to a Hyper-V VM"
categories: TipsAndTricks
---

I run my work on a VM on my personal machine. In 2020, this includes video conferencing software. However, the process of connecting a webcam (and microphone) to a Hyper-V VM is a bit complicated. Here, I describe the steps in enough detail for me to replicate them. Hopefully, they are helpful to others.

## Step 1: Prepare the host

Open group policy editor and set the following entries to `enabled`:

| Setting | Path |
| - | - |
| Allow RDP redirection of other supported RemoteFX USB devices from this computer | `\Windows Components\Remote Desktop Services\Remote Desktop Connection |Client\RemoteFX USB Device Redirection`
| Configure RemoteFX | `\Windows Components\Remote Desktop Services\Remote Desktop Session Host\Remote Session Environment\RemoteFX for Windows Server 2008 R2`
| Enable RemoteFX encoding for RemoteFX clients designed for Windows Server 2008 R2 SP1 | `\Windows Components\Remote Desktop Services\Remote Desktop Session Host\Remote Session Environment` |
| Use advanced RemoteFX graphics for RemoteApp |  `\Windows Components\Remote Desktop Services\Remote Desktop Session Host\Remote Session Environment`

*Note*: I believe only the first setting is actually necessary. To be validated on my next install.

Once these are set, **reboot the host**.

## Step 2: Start the VM and set the connection properties

On the host:

1. Open Hyper-V manager. Right click the VM and select "Start". Wait for the VM to boot.
2. Right click the VM again and select "Edit Connection Settings ...".
3. Select "Show Options" on the next dialog.
4. Select the "Local Resources" tab.
5. In the "Local devices and resources" section, click "More...".
6. Select your webcam in the "Other supported RemoteFX USB Devices" section.
7. Launch the VM and check whether the webcam shows up.

## Step 3 (optional): Connect USB audio devices

To connect USB audio devices such as speaker phones or headsets:

1. Close the VM connection. Do not shut down the VM.
2. Right click the VM again and select "Edit Connection Settings ...".
3. Select "Show Options" on the next dialog.
4. Select the "Local Resources" tab.
5. In the "Remote Audio section, click "Settings...".
6. In the "Remote audio playback" section, select "Play on remote computer".
7. Close the dialog.
8. In the "Local devices and resources" section, click "More...".
9. Select your audio devices in the "Other supported RemoteFX USB Devices" section.
10. Connect to the VM and verify that the audio devices show up in the VM.
