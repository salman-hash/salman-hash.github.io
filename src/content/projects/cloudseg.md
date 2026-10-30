---
title: CloudSeg — Cloud Image Segmentation Service
summary: A FastAPI service on Azure that serves DeepLabV3 segmentation masks over REST, with PostgreSQL job tracking and about 2 seconds of CPU-only inference per image.
role: Solo developer
date: 2025-09-01 # TODO: confirm date
tags: [/vision, /cloud, /ml_ops]
stack: [Python, FastAPI, DeepLabV3, PostgreSQL, SQLAlchemy, Azure VM]
cover: ../../assets/projects/cloudseg.png
coverAlt: Placeholder graphic for the CloudSeg image segmentation service.
---

CloudSeg is a RESTful machine-learning inference service for semantic image segmentation, deployed on an Azure virtual machine.

## What I built

- A **FastAPI backend** that preprocesses uploaded images, runs **DeepLabV3** inference and returns segmentation masks through REST endpoints.
- **PostgreSQL + SQLAlchemy** tracking for inference jobs, model metadata and processing status.
- **CPU-only inference optimised** to about 2 seconds per image.
- **Secure database access** through SSH tunnelling.
