---
title: Smart Power Management & Backup for Telecom Servers
summary: Firmware and over-the-air update framework for a telecom-server battery backup system, with OTA delivered to slave batteries over CAN ISO-TP and UL pre-compliance testing.
role: Embedded Design Engineer
org: Cowlar
date: 2025-01-01 # TODO: confirm date
tags: [Embedded, Firmware, Power systems, CAN]
stack: [CAN ISO-TP, UART, MQTT, HTTP, OTA]
cover: ../../assets/projects/telecom-power-backup-cover.png
coverAlt: Cover image for the telecom server power backup project.
---

A smart power-management and battery-backup system for telecom servers, built at Cowlar.

## What I did

- Developed **over-the-air (OTA) firmware updates** for the main control board.
- Built an **OTA framework for the slave batteries**, delivering updates from the master over a **CAN ISO-TP** transport layer.
- The system communicates over **UART, CAN, MQTT and HTTP**.
- Ran **UL pre-testing** for the backup system: heat tests, BMS overcharge and over-discharge, over-voltage and imbalanced-charging tests.
