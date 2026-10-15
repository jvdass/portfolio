import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#fbfaf7]/90 dark:bg-neutral-950/90 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold tracking-tight text-lg">Jovial Dassanou</span>
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="#projets" className="no-underline text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 transition-colors">Projets</a>
          <a href="#a-propos" className="no-underline text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 transition-colors">À propos</a>
          <a href="#contact" className="no-underline text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 transition-colors">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}