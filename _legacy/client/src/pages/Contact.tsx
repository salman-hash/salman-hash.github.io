import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's Connect</h1>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always open to discussing new opportunities in Robotics, AI, and Automation. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:salman_sadiq@outlook.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">salman_sadiq@outlook.com</div>
                </div>
              </a>

              <a href="tel:+923048882045" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground">Phone</div>
                  <div className="font-medium text-foreground">+92 304 888 2045</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground">Location</div>
                  <div className="font-medium text-foreground">Islamabad, Pakistan</div>
                </div>
              </div>

              <a href="https://linkedin.com/in/salman-sadiq" target="_blank" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground">LinkedIn</div>
                  <div className="font-medium text-foreground">in/salman-sadiq</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">Name</label>
                  <Input placeholder="John Doe" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">Email</label>
                  <Input placeholder="john@example.com" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">Message</label>
                <Textarea placeholder="Hello, I'd like to discuss..." className="min-h-[150px] bg-background/50" />
              </div>
              <Button type="submit" className="w-full gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
