export default function Contact() {
  return (
    <footer id="contact" className="max-w-6xl mx-auto px-6 pt-20 pb-12 border-t border-neutral-300 dark:border-neutral-800 bg-[#F8F7F4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 ">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">CONTACT</p>
          <h2 className="text-4xl md:text-4xl font-bold mb-6 tracking-tight">Vous avez un projet ?  Parlons-en.</h2>
          <a
            href="mailto:jovialdassanou@gmail.com"
            className="text-xl font-medium text-black dark:text-white underline underline-offset-4 hover:text-neutral-500 transition-colors"
          >
            jovialdassanou@gmail.com
          </a>
        </div>
        <div className="space-y-6">
          <div>
            <span className="font-mono text-xs uppercase text-neutral-400 block mb-2">RÉSEAUX</span>
            <div className="flex gap-4 font-medium text-black dark:text-white">
              <a href="https://www.linkedin.com/in/jovial-dassanou-25711040b/" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">LinkedIn</a>
              <a href="https://github.com/jvdass" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-500">
        <p>© 2026 Jovial Dassanou — Tous droits réservés.</p>
      </div>
    </footer>
  );
}