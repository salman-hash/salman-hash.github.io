import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award } from "lucide-react";
import { motion } from "framer-motion";

interface ResearchCardProps {
  title: string;
  authors: string;
  publication: string;
  type: "paper" | "patent";
  description?: string;
  index: number;
}

export function ResearchCard({ title, authors, publication, type, description, index }: ResearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative pl-8 border-l border-white/10 py-4 hover:border-primary/50 transition-colors group">
        <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-background border border-muted-foreground group-hover:border-primary group-hover:bg-primary transition-colors" />
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider">
            {type === "paper" ? <FileText className="w-3 h-3" /> : <Award className="w-3 h-3" />}
            {type}
          </div>
          
          <h3 className="text-lg font-bold font-display leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground font-mono">
            {publication}
          </p>
          
          <p className="text-sm text-muted-foreground italic">
            {authors}
          </p>
          
          {description && (
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
