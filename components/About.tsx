export default function About() {
  return (
    <section id="a-propos" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200 dark:border-neutral-800 bg-[#F8F7F4]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">À PROPOS</p>
        </div>
        <div className="md:col-span-2 space-y-6 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            Étudiant en informatique à l'université Lumière Lyon 2, je suis passionné par la science des données, le développement web et la cybersécurité. 

            <p>
            J'aime concevoir des projets, explorer de nouvelles technologies et développer mes compétences techniques. 

            Curieux et rigoureux, je suis constamment à la recherche de nouveaux défis pour approfondir mes connaissances. </p>
          </p>
          <p>
            Mon domaine d'intérêt couvre principalement le <strong>développement web</strong>, la <strong>data science</strong> et la <strong>cybersécurité</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}