import { ExperienceCard } from "@/components/ExperienceCard";

export function Experience() {
  const experiences = [
    {
      company: "Cowlar Inc.",
      location: "Islamabad, PK (YC-W17)",
      role: "Automation Engineer",
      period: "Sep 2024 – June 2025",
      description: [
        "Contributing to robust and scalable solutions, especially retail solutions.",
        "Worked with North American Clients for the Industrial Automation Product/Project.",
        "Project Management including coordination with Clients, enhancements related to Competitive Edge and Limitations for Future Work."
      ],
      skills: ["Automation", "Project Management", "Client Relations"]
    },
    {
      company: "Cowlar Inc.",
      location: "Islamabad, PK (YC-W17)",
      role: "Design Engineer (Intern)",
      period: "July 2024 - Aug 2024",
      description: [
        "Engineered embedded systems, focusing on IoT, OTA updates, and advanced features using ESP32.",
        "Contributed to robust, scalable solutions."
      ],
      skills: ["IoT", "ESP32", "Embedded Systems", "OTA"]
    },
    {
      company: "RADWI Electronics",
      location: "Islamabad, PK",
      role: "Embedded Systems Intern",
      period: "Aug 2023 – Sep 2023",
      description: [
        "Prototyped Smart Intercom System with enhanced audio and camera streaming using MQTT protocols on ESP32.",
        "Demonstrated proficiency in IoT and Embedded systems using Microcontroller programming on Arduino IDE and PlatformIO."
      ],
      skills: ["MQTT", "Smart Intercom", "PlatformIO", "Arduino"]
    },
    {
      company: "Pakistan Aeronautical Complex",
      location: "Kamra, PK",
      role: "Mechatronics Intern",
      period: "Aug 2023",
      description: [
        "Discovered PMI (Plant Maintenance & Installation) Department, with insights into the three levels of maintenance.",
        "Studied and surveyed the operations of water purification plant, boiler, compressor, and treatment of three types of waste treatment.",
        "Attained knowledge of heavy-duty 3-axis and 5-axis CNC machining centers, equipped with advanced Siemens controllers."
      ],
      skills: ["CNC", "Plant Maintenance", "Industrial Systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional Experience</h1>
            <p className="text-muted-foreground text-lg">
              My journey through industrial automation, embedded systems design, and engineering leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} index={i} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
