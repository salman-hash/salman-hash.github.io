import { Hero } from "@/components/Hero";
import { SkillBadge } from "@/components/SkillBadge";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ArrowRight, Cpu, Users } from "lucide-react";
import { Link } from "wouter";

export function Home() {
  const skills = {
    languages: ["C/C++", "Python", "Verilog", "Bash", "JavaScript"],
    hardware: ["ESP32", "Raspberry Pi", "Arduino", "Orange Pi", "Intel"],
    ai: ["OpenCV", "YOLOv8", "LLMs", "VLMs", "Tensorflow"],
    tools: ["Docker", "Git", "ROS/ROS2", "AWS", "MQTT", "Solidworks"]
  };

  const experiences = [
    {
      company: "Cowlar Inc.",
      location: "Islamabad, PK (YC-W17)",
      role: "Automation Engineer",
      period: "Sep 2024 – June 2025",
      description: [
        "Leading industrial automation projects for North American clients.",
        "Developing robust retail solutions and managing project lifecycles.",
        "Coordinating with clients to identify competitive edges and future enhancements."
      ],
      skills: ["Automation", "Project Management", "Client Relations"]
    },
    {
      company: "Cowlar Inc.",
      location: "Islamabad, PK (YC-W17)",
      role: "Design Engineer (Intern)",
      period: "July 2024 - Aug 2024",
      description: [
        "Engineered embedded systems focusing on IoT and OTA updates.",
        "Implemented advanced features using ESP32 for scalable solutions."
      ],
      skills: ["IoT", "ESP32", "Embedded Systems", "OTA"]
    },
    {
      company: "RADWI Electronics",
      location: "Islamabad, PK",
      role: "Embedded Systems Intern",
      period: "Aug 2023 – Sep 2023",
      description: [
        "Prototyped Smart Intercom System with enhanced audio/video streaming.",
        "Implemented MQTT protocols on ESP32 for real-time communication."
      ],
      skills: ["MQTT", "Smart Intercom", "PlatformIO", "Arduino"]
    }
  ];

  const featuredProjects = [
    {
      title: "Multi-agent Situational Awareness for Visually Impaired",
      description: "Developed a generative AI and VLMs-based framework for environmental interpretation. Awarded Rector's Gold Medal.",
      tags: ["GenAI", "VLMs", "Embedded", "Raspberry Pi"],
      role: "FYP Lead",
    },
    {
      title: "Optical Fibers Termination Line Robot",
      description: "Designed control system for 3-axis movement using Festo motors. Integrated Vue.js dashboard for real-time monitoring.",
      tags: ["Robotics", "Vue", "Docker", "Industrial Automation"],
      role: "Automation Engineer",
    },
    {
      title: "Rock-removing and Tree-planting Robot",
      description: "Autonomous line-following robot with custom manipulator mechanism. Runner up in Mini National Engineering Robotics Contest.",
      tags: ["Robotics", "Path Planning", "Mechanism Design"],
      role: "Team Lead",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />

      {/* Featured Projects (First) */}
      <section className="py-20 bg-black/20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Featured Engineering</h2>
              <p className="text-muted-foreground">Select projects demonstrating end-to-end system design.</p>
            </div>
            <Link href="/projects">
              <a className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm">
                View All Projects <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={i} index={i} {...project} />
            ))}
          </div>
          
          <div className="mt-8 md:hidden flex justify-center">
            <Link href="/projects">
              <a className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm">
                View All Projects <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section (Second) */}
      <section className="py-20 border-b border-white/5 bg-white/2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Professional Journey</h2>
              <p className="text-muted-foreground">Engineering roles and industrial impact.</p>
            </div>
            <Link href="/experience">
              <a className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm">
                View Full Experience <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} index={i} {...exp} />
            ))}
          </div>

          <div className="mt-8 md:hidden flex justify-center">
            <Link href="/experience">
              <a className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm">
                View Full Experience <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section (Third) */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">Technical Arsenal</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit honed through rigorous academic research and industrial application. 
                Expertise spanning from hardware design to high-level AI integration.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 bg-white/5 p-8 rounded-xl border border-white/10">
              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(s => <SkillBadge key={s} name={s} category="lang" />)}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider border-b border-white/10 pb-2">AI & Vision</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map(s => <SkillBadge key={s} name={s} category="ai" />)}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Hardware & Embedded</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.hardware.map(s => <SkillBadge key={s} name={s} category="hardware" />)}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Tools & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(s => <SkillBadge key={s} name={s} category="tool" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Engineering (Fourth) */}
      <section className="py-20 bg-white/2">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-xl p-8 border border-primary/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                   <h3 className="text-xl font-display font-bold mb-2 flex items-center gap-2">
                     <Users className="w-5 h-5 text-primary" /> 
                     Beyond Engineering
                   </h3>
                   <p className="text-muted-foreground text-sm max-w-lg">
                     Discover my journey in leadership, community building, and academic honors. 
                     From leading autonomous vehicle teams to mentoring the next generation of engineers.
                   </p>
                 </div>
                 <Link href="/activities">
                   <a className="whitespace-nowrap px-6 py-3 bg-background border border-white/10 hover:border-primary/50 rounded-md text-sm font-mono transition-all hover:text-primary flex items-center gap-2">
                     View Activities & Honors <ArrowRight className="w-4 h-4" />
                   </a>
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
