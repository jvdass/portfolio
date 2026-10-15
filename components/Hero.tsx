export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
        DÉVELOPPEMENT • DATA • RÉSEAUX
      </p>
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
        Jovial Dassanou
      </h1>
      <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-12 leading-relaxed">
        Étudiant en informatique, je conçois des expériences numériques claires, accessibles et rigoureuses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div>
          <span className="font-mono text-xs uppercase text-neutral-400 block mb-1">LOCALISATION</span>
          <span className="font-semibold">Lyon, Rhône, France</span>
        </div>
        <div>
          <span className="font-mono text-xs uppercase text-neutral-400 block mb-1">FORMATION</span>
          <span className="font-semibold">Informatique</span>
        </div>
        <div>
          <span className="font-mono text-xs uppercase text-neutral-400 block mb-1">DOMAINES D’EXPLORATION</span>
          <span className="font-semibold">Web / Data / Réseaux</span>
        </div>
      </div>
    </section>
  );
}