---
title: ROS2 LiDAR Obstacle Avoidance
summary: A reactive obstacle-avoidance controller for a simulated mobile robot. It turns LiDAR scans into velocity commands, written in Python with ROS2 and Gazebo.
role: Solo developer
date: 2026-08-01 # TODO: confirm date
tags: [ROS2, LiDAR, Navigation, Simulation]
stack: [ROS2, Python, Gazebo, rclpy]
cover: ../../assets/projects/ros2-lidar-avoidance.png
coverAlt: Placeholder graphic for the ROS2 LiDAR obstacle avoidance project.
featured: true
---

A ROS2 node in Python that drives a mobile robot through a Gazebo world, reacting to obstacles in its LiDAR scan. The animation on this site's home page is a small browser version of the same idea.

## What I built

- A **ROS2 controller node** that subscribes to the LiDAR scan topic, detects obstacles in the scan and publishes velocity commands back to the robot.
- A **Gazebo simulation** setup for testing the controller.
- A debugging workflow built on ROS2 CLI tools (`ros2 topic`, `ros2 node`, message inspection), the same way you would troubleshoot a real robot.
