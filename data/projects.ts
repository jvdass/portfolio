export interface Project {
  title: string;
  category: string;
  description: string;
  competences : string;
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "RPG-cmd-game ",
    category: "Python",
    description: "Jeu de rôle textuel en Python jouable directement dans la console. Le projet intègre un système de combat au tour par tour, une boutique avec gestion des équipements et une interface console interactive.",
    competences: "Python, POO, algorithmique, gestion de données, logique de jeu, UX console.",
    github: "https://github.com/jvdass/RPG-cmd-game",
  },
  {
    title: "Find Series ",
    category: "Web",
    description: "Application web responsive permettant de rechercher des séries et de découvrir les plateformes de streaming disponibles en France.Intégration des API TVmaze et TMDB avec JavaScript pour récupérer et afficher les données en temps réel.",
    competences: "HTML5, CSS3, Flex Box CSS, JavaScript, API REST, Fetch API, Async/Await, LocalStorage, Responsive Design.",
    github: "https://github.com/jvdass/FindSeries",
    demo: "https://jvdass.github.io/FindSeries/",
  },

  {
    title: "TaskMaster",
    category: "Web",
    description: "Application web de gestion de tâches de type Kanban développée en Vanilla JavaScript ES6+. Elle intègre la persistance des données via LocalStorage, le support du mode sombre et un système de rendu dynamique de l'interface.",
    competences: "HTML5, CSS3, Vanilla JavaScript (ES6+), Web Storage API (LocalStorage)",
    github: "https://github.com/jvdass/TaskMaster",
    demo: "https://jvdass.github.io/TaskMaster/",
  },


];