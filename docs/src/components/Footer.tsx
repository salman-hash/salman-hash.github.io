export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-8 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm font-mono">
          &copy; {new Date().getFullYear()} Salman Sadiq. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
