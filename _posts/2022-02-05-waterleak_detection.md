---
layout: post
title: "Home Assistant: Water leak detection and notification with the Aqara Water Leak Sensor"
categories: HomeAutomation
excerpt_separator: <!--more-->
---

This week, I added a bunch of
[Aqara Water Leak Sensors](https://www.aqara.com/us/water_leak_sensor.html) to
my home assistant setup.

<!--more-->

## Pairing the Aqara Water Leak Sensor with Home Assistant

The first hurdle was how to trigger pairing mode of the Aqara Water Leak Sensor.
The manual only describes this process for their own hub / app combination. I
run Home Assistant with a ZigBee stick and would rather not add a hub for each
device maker. Turns our the solution is simple: Press on the top of the sensor
till a blue light just below the water drop starts flashing. This switches the
device into pairing mode. I was able to pair the sensor as usual in the Zigbee
panel of Home Assistant.

## Rename the Sensors

The names chosen for the actual sensor entities were a bit random and hard to
parse for me. Hence, I renamed the sensor entities to something like
`binary_sensor.water_leak_detector_kitchen_sink` in the Home Assistant UI. This
makes subsequent references to them from YAML code a lot easier.

## Test the sensor

When initially testing the sensor, they failed to detect water even when
submerged for a few minutes. When I repeated the same test a few minutes later,
they detected water in much smaller volume instantly. Not sure why this is.
Could be that the sensor calibrates itself after startup and needs some time to
do so.

## Group the sensors

When thinking about water leak notification, I don't actually care which sensor
is detecting a leak. I can look that up in the Home Assistant UI whenever I
want. Hence, I grouped the devices into one meta sensor using the
[Binary Sensor Group][group] platform like so in my `configuration.xml`:

```yaml
binary_sensor:
  - platform: group
    name: Water Leak
    device_class: moisture
    entities:
      - binary_sensor.water_leak_detector_kitchen_sink
      - binary_sensor.water_leak_detector_main_bath_sink_right
      - binary_sensor.water_leak_detector_main_bath_sink_left
      - binary_sensor.water_leak_detector_main_bath_toilet
      - binary_sensor.water_leak_detector_utility_room
      - binary_sensor.water_leak_detector_washing_machine
```

This creates a new sensor named `Water Leak` with the entity id
`binary_sensor.water_leak`. This sensor will detect a leak whenever any one of
the grouped sensors does so.

## Setup an Alert

This new group then allows me to send alerts to my phone using the [Alert]
platform like so:

```yaml
alert:
  water_leak:
    name: Water leak detected
    message: Water leak detected
    done_message: Water leak no longer detected
    entity_id: binary_sensor.water_leak
    state: "on"
    repeat: 1
    notifiers:
      - mobile_app_pixel_4_xl
```

This will send a notification to my phone (entity `mobile_app_pixel_4_xl`) once
a minute while a leak is detected. It will send the "all clear" notification
when the leak is no longer detected. This might be a bit excessive, but better
safe than sorry :-).

[Alert]: https://www.home-assistant.io/integrations/alert/
[group]: https://www.home-assistant.io/integrations/binary_sensor.group/
