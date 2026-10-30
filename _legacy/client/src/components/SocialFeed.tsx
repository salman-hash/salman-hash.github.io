import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageSquare, Share2, Linkedin } from "lucide-react";

export function SocialFeed() {
  const activities = [
    {
      content: "Excited to share that our paper 'Multi-Agent Situational Awareness for Visually Impaired' has been accepted at IBCAST 2024! 🚀 #Robotics #AI #Accessibility",
      date: "2 months ago",
      likes: 124,
      comments: 18
    },
    {
      content: "Just deployed a new computer vision pipeline for quality assurance using YOLOv8. The speed improvements are insane! ⚡️ #ComputerVision #Engineering",
      date: "1 week ago",
      likes: 89,
      comments: 12
    },
    {
      content: "Experimenting with VLMs (Vision Language Models) on Raspberry Pi. The edge AI possibilities are endless. 🤖 #EdgeAI #EmbeddedSystems",
      date: "3 days ago",
      likes: 245,
      comments: 42
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-display font-bold">Recent Activity</h3>
        <a href="https://linkedin.com/in/salman-sadiq" target="_blank" className="text-primary text-sm hover:underline flex items-center gap-2">
          <Linkedin className="w-4 h-4" />
          View Profile
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity, i) => (
          <Card key={i} className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-10 w-10 border border-white/10">
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Salman Sadiq</span>
                <span className="text-xs text-muted-foreground">{activity.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {activity.content}
              </p>
              <div className="flex items-center gap-6 text-muted-foreground text-xs">
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" /> {activity.likes}
                </button>
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <MessageSquare className="w-3.5 h-3.5" /> {activity.comments}
                </button>
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Share2 className="w-3.5 h-3.5" /> Share
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
