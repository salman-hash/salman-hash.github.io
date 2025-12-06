import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal, Cpu, FileText, Mail, Briefcase, Users } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: Terminal },
    { href: "/experience", label: "Experience", icon: Briefcase },
    { href: "/projects", label: "Projects", icon: Cpu },
    { href: "/research", label: "Research", icon: FileText },
    { href: "/activities", label: "Activities", icon: Users },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-display font-bold text-xl tracking-tighter flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <span className="text-2xl">&lt;/&gt;</span>
            SALMAN_SADIQ
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "font-mono text-sm tracking-wide transition-colors flex items-center gap-2",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-white/10 bg-background overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-mono text-sm p-2 rounded-md flex items-center gap-3 transition-colors",
                      location === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
