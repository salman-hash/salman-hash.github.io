import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  category?: "lang" | "tool" | "hardware" | "ai";
}

export function SkillBadge({ name, category = "tool" }: SkillBadgeProps) {
  const variants = {
    lang: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
    tool: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
    hardware: "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20",
    ai: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20",
  };

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "px-3 py-1 font-mono text-xs tracking-wide transition-colors cursor-default", 
        variants[category]
      )}
    >
      {name}
    </Badge>
  );
}
