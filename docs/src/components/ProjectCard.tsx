import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  role?: string;
  link?: string;
  index: number;
}

export function ProjectCard({ title, description, tags, role, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-white/10 bg-white/5 hover:border-primary/50 transition-colors group flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-xl font-display leading-tight group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                <ArrowUpRight className="w-5 h-5" />
              </a>
            )}
          </div>
          {role && (
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {role}
            </div>
          )}
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/5 text-xs text-muted-foreground border-transparent hover:bg-white/10">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
