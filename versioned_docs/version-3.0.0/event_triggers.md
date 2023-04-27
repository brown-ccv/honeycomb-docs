---
id: event_triggers
title: Set up event triggers
---

## BrainVision Trigger Box setup

Follow the TriggerBox setup instructions in the BrainVision Trigger Box manual. Plug the TriggerBox into the computer running the task. Check your operating system’s device list to identify the COM port that the TriggerBox is connected to. Create a new system environment variable:

```console
COMNAME
```

and set to the COM port to the correct value (e.g., COM3).

## Open Source Event Trigger setup

Details on how to make the open source event trigger and photodiode can be found [here](https://github.com/neuromotion/USB-event-marker).

Connect the open source event trigger to the computer running the task using a USB to micro-USB cable. Check your operating system’s USB device list to identify the product ID of the teensyduino event marker.

Create a new system environment variable: `EVENT_MARKER_PRODUCT_ID` and set to the product ID of the event marker.

## Send event code triggers

Change the eventCodes values listed in the src/config/trigger.js file to the desired values. Import eventCodes from `./trigger` and export as `eventCodes`.

Whenever you would like to send an event code in a trial, load `eventCodes` from `../config/main/`, and call `pdSpotEncode`with the proper eventCode (e.g. eventCode.Fixation) as input.

## Run the task with event triggers

Honeycomb automatically checks whether your event marker is connected and running at the start of the task. If it is not connected, the task will present an error and will not be able to run.
