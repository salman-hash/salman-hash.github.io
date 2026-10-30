import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  index: number;
}

export function ExperienceCard({ company, role, period, location, description, skills, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 transition-all hover:bg-white/10 group flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {company}
              </h3>
              <div className="text-md font-medium text-primary/80 mt-1 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {role}
              </div>
            </div>
            <Badge variant="outline" className="font-mono text-xs border-white/20 text-muted-foreground shrink-0">
              {period}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono mt-2">
            <MapPin className="w-3 h-3" /> {location}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {description.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs bg-black/20 text-muted-foreground hover:text-primary transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
