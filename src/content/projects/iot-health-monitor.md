---
title: IoT Health Monitor for Glucose, Cholesterol and Uric Acid
summary: An ESP32 device that reads vital signs with an optical sensor and publishes them to AWS, so doctors and caretakers can follow them remotely.
role: Designer & developer
date: 2023-06-01 # TODO: confirm date
tags: [IoT, Biomedical, Cloud]
stack: [ESP32, MAX301 optical sensor, AWS] # TODO: confirm exact sensor part number
cover: ../../assets/projects/iot-health-monitor-cover.png
coverAlt: Cover image for the IoT health monitoring device.
---

A connected device for monitoring glucose, cholesterol and uric acid.

## What I did

- Designed the **vital-signs detection system** around an optical sensor and an **ESP32**.
- Published the sensor data to an **AWS server** so a doctor or caretaker can access it.
- **Reimplemented a benchmark research paper** as the basis for the design.
