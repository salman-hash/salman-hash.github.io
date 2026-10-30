import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, GraduationCap } from "lucide-react";

export function CoCurricular() {
  const education = [
    {
      school: "National University of Sciences and Technology",
      degree: "Bachelors in Mechatronics Engineering",
      grade: "CGPA: 3.32/4.00",
      period: "Nov 2021 – Oct 2025",
      details: [
        "1st FYP Position in Department & Rector's Gold Medal",
        "Relevant Coursework: Robotics, Control Systems, Embedded Systems, AI"
      ]
    },
    {
      school: "Fazaia Degree College",
      degree: "HSSC in Pre-Engineering",
      grade: "Marks: 94.45%",
      period: "Mar 2019 – Aug 2021",
      details: []
    }
  ];

  const activities = [
    {
      role: "General Secretary",
      org: "Society for Promotion of Community Services & Media (SPCS&M)",
      period: "May 2024 – Present",
      description: "Collaborated with the Dean to lead six student clubs. Organized initiatives to empower students and drive positive social impact."
    },
    {
      role: "Autonomous Vehicles Team Lead",
      org: "NUST Automotive Group",
      period: "Oct 2023 – Sep 2024",
      description: "Led a team of 50 members specializing in Autonomous Systems. Coordinated technical training and strategic planning for national/international competitions."
    },
    {
      role: "Club Mentor",
      org: "Robotics and Automation Club",
      period: "Oct 2023 – Sep 2024",
      description: "Mentored 30+ unprivileged students in building Line Follower robots and competing in the National Engineering Robotics Contest."
    }
  ];

  const honors = [
    "Rector's Gold Medal (Best FYP)",
    "College Medal of Excellence (GS SPCS&M)",
    "Runner Up Mini National Engineering Robotics Contest (Indigenous)",
    "2nd Runner up in IoT & Digital Systems, COMPPEC",
    "Millennium Fellowship 2023"
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Background & Activities</h1>
            <p className="text-muted-foreground text-lg">
              My academic foundation, leadership roles, and honors beyond the technical curriculum.
            </p>
          </div>

          <div className="grid gap-12">
            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary w-6 h-6" /> Education
              </h2>
              <div className="grid gap-4">
                {education.map((edu, i) => (
                  <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{edu.school}</h3>
                          <p className="text-primary/80">{edu.degree}</p>
                        </div>
                        <Badge variant="outline" className="font-mono">{edu.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{edu.grade}</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {edu.details.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Leadership Section */}
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <Users className="text-primary w-6 h-6" /> Leadership & Co-Curricular
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {activities.map((act, i) => (
                  <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <h3 className="font-bold text-lg">{act.role}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{act.org}</p>
                      <p className="text-xs text-primary/60 mt-1">{act.period}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {act.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Honors Section */}
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <Award className="text-primary w-6 h-6" /> Honors & Awards
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  {honors.map((honor, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{honor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
