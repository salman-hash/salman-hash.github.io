import { Switch, Route } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { Experience } from "@/pages/Experience";
import { Projects } from "@/pages/Projects";
import { Research } from "@/pages/Research";
import { CoCurricular } from "@/pages/CoCurricular";
import { Contact } from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/research" component={Research} />
          <Route path="/activities" component={CoCurricular} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
