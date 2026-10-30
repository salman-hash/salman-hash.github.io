import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  const projects = [
    {
      title: "Multi-agent Situational Awareness for Visually Impaired",
      description: "Generative AI and VLM-based framework for environmental interpretation. Developed a custom wearable VR headset to reduce cognitive load for visually impaired users.",
      tags: ["GenAI", "VLMs", "ESP32", "Raspberry Pi", "Assistive Tech"],
      role: "FYP Lead - Gold Medalist"
    },
    {
      title: "Optical Fibers Termination Line Robot",
      description: "Designed 3-axis control system using Festo servos and pneumatics. Built firmware for data logging and a Vue.js dashboard for real-time control.",
      tags: ["Industrial Automation", "Vue.js", "Flask", "Docker", "Festo"],
      role: "Automation Engineer @ Cowlar"
    },
    {
      title: "Kitchen Display System",
      description: "ESP32-based display system using LVGL for UI. Integrated MQTT for real-time order updates and designed a custom control box.",
      tags: ["ESP32", "LVGL", "MQTT", "Embedded Systems"],
      role: "Design Engineer @ Cowlar"
    },
    {
      title: "Optical Fiber Sorting Machine",
      description: "Integrated ML model for fiber defect detection using OpenCV. Optimized system for bulk production.",
      tags: ["OpenCV", "Machine Learning", "Orange Pi", "Quality Assurance"],
      role: "QA Automation"
    },
    {
      title: "Smart Power Management System",
      description: "Developed OTA firmware updates for control boards and battery management systems using CAN ISOTP layer.",
      tags: ["OTA", "CAN Bus", "Power Management", "Embedded C"],
      role: "Firmware Engineer"
    },
    {
      title: "Rock-removing & Tree-planting Robot",
      description: "Line-following robot with custom manipulator for clearing paths and planting trees. Runner up in Mini National Engineering Robotics Contest.",
      tags: ["Robotics", "Mechanical Design", "Path Planning"],
      role: "Competition Team Lead"
    },
    {
      title: "Brain-Computer Interface (BCI)",
      description: "Decoded EEG data for hand/arm movement detection using MATLAB and Python. Analyzed motor cortex signals for real-time tracking.",
      tags: ["BCI", "Signal Processing", "MATLAB", "Python"],
      role: "Researcher"
    },
    {
      title: "IoT Health Monitor",
      description: "Vital signs detection system using MAX301 optical sensor and ESP32, publishing data to AWS for remote monitoring.",
      tags: ["IoT", "AWS", "Healthcare", "Sensors"],
      role: "Developer"
    },
    {
      title: "Traffic Monitoring System",
      description: "Implemented YOLOv8 with ByteTrack for precise vehicle counting and traffic congestion management.",
      tags: ["Computer Vision", "YOLOv8", "Deep Learning"],
      role: "ML Engineer"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Engineering Projects</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A showcase of technical challenges solved through hardware-software integration, 
            from industrial automation to assistive AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} index={i} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
