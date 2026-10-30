---
title: Optical Fiber Termination Line Robot
summary: Multi-axis motion control, firmware and a custom UART driver for a production robot that inserts optical fibers into ferrules.
role: Embedded Design Engineer
org: Cowlar
date: 2025-03-01 # TODO: confirm date
tags: [Industrial automation, Embedded, Motion control]
stack: [Python, C, C++, Festo servos, Stepper motors, UART, Linux]
cover: ../../assets/projects/fiber-termination-robot-cover.png
coverAlt: Cover image for the optical fiber termination line robot.
featured: true
---

A production-line robot at Cowlar that terminates optical fibers by inserting them into ferrules. Every insertion is logged, along with inspection images, to a web-based monitoring platform.

## What I built

- The **ferrule-insertion logic and motion control for the X, Y and Z axes**, driving Festo servo motors and stepper motors.
- A **custom communication driver** that connects the motor controller to Python over UART.
- **Embedded firmware and a camera interface** that log production data and inspection images to the web platform in real time.
- **Python tooling** for rapid prototyping, system monitoring and automation on the line.
