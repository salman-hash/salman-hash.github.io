import { ResearchCard } from "@/components/ResearchCard";

export function Research() {
  const research = [
    {
      title: "Multi-Agent Situational Awareness for Visually Impaired",
      authors: "Z Mahboob, S Sadiq, U Shahbaz Khan, A Zeb, M Islam Tiwana",
      publication: "International Bhurban Conference on Applied Sciences & Technology (IBCAST) 2024",
      type: "paper" as const,
      description: "Designed a multi-agent workflow for real-time environment perception tailored to user queries. DOI: 10.1109/IBCAST61650.2024.10877205"
    },
    {
      title: "Towards Inclusive Education: AI-Driven Solutions",
      authors: "Z Mahboob, S Sadiq, U Shahbaz Khan, A Zeb, M Islam Tiwana",
      publication: "Journal (In Progress)",
      type: "paper" as const,
      description: "Developing an Adaptive AI-based solution for interpreting complex educational content like graphs and charts for visually impaired students."
    },
    {
      title: "Adaptive AI-enabled Framework for Navigation",
      authors: "S Sadiq, Z Mahboob, U Shahbaz Khan, A Zeb, M Islam Tiwana",
      publication: "Utility Patent (Filed)",
      type: "patent" as const,
      description: "Proposed a Generative AI and generalizable model-based navigation framework for the visually impaired in complex scenarios."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Research & Patents</h1>
            <p className="text-muted-foreground text-lg">
              Contributing to the advancement of Assistive Technologies and AI. 
              Focusing on practical applications of Generative AI and Robotics for social impact.
            </p>
          </div>

          <div className="space-y-8 bg-white/5 p-8 rounded-lg border border-white/10">
            {research.map((item, i) => (
              <ResearchCard key={i} index={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
