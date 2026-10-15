export default function Skills() {
  const skillCategories = [
    {
      category: "LANGAGES",
      skills: ["Python", "C", "JavaScript", "TypeScript", "HTML5 / CSS3"],
    },
    {
      category: "FRAMEWORKS & LIBS",
      skills: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    },
    {
      category: "OUTILS & ENVIRONNEMENT",
      skills: ["Git / GitHub", "Vercel", "VS Code", "Linux"],
    },
    {
     category: "RESEAUX",
     skills: ["Cisco Packet Tracer", "Bash"],
    }
  ];

  return (
    <section id="competences" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-300 dark:border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">COMPÉTENCES</p>
          <h2 className="text-3xl font-bold mt-2 tracking-tight">Savoir-faire technique.</h2>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((item, idx) => (
            <div key={idx} className="border border-neutral-300 dark:border-neutral-800 p-6 bg-[#F8F7F4] dark:bg-neutral-900/60">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-4">
                {item.category}
              </span>
              <ul className="space-y-2">
                {item.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="font-medium text-neutral-800 dark:text-neutral-200 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full inline-block"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}