import memoryGame from "./assets/MemoryGame2.png";
import Expenses from "./assets/expensetracker.png";
import DevBuds from "./assets/devbudLight.png";

export const PROJECTS = [
    {
        title: 'DevBuds',
        image: DevBuds,
        description: 'DevBuds is a collaborative platform where developers can get together and work on non-commercial projects. By posting project needs and applying to specific roles, users can find collaborators with matching skills to bring their ideas to life.',
        technologies: ["React.JS", "Tailwind CSS", "HTML / CSS", "Firebase", ],
    },
    {
        title: 'Expense Tracker',
        image: Expenses,
        description: 'Built an expense tracker using Vue.JS, git & Composition API',
        technologies: ["Vue.JS", "HTML / CSS", "Vue Composition API"],
    },
    {
        title: 'Light and Sound Memory Game',
        image: memoryGame,
        description: 'Game plays a variety of sounds and flashes button being pressed. User must repeat the sequence to win.',
        technologies: ["Javascript", "HTML / CSS"],
    },
    
];

export default PROJECTS;