import memoryGame from "./MemoryGame2.png";
import Expenses from "./expensetracker.png";
import DevBuds from "./devbudlight.png";

export const EXPERIENCES = [
    {
        year: 'August 2024 - Present',
        role: 'Full Stack Developer',
        company: 'NDA',
        description: 'Contributed to an privately sourced repository for a server. Uses Vue3 and integrated older Vue2 code to the new Vue3 platform. Uses different databases hosting mock player values to test frontend and backend technologies.',
        technologies: ["Vue3", "Node.JS", "Python", "HTML / CSS"],
    },
    {
        year:'June 2024 - August 2024',
        role: 'SWE Intern',
        company: 'Airia',
        description: 'Worked with React JS for the front end and .NET framework for the backend (in addition to python and JSON) to create prompt engineering workbench.',
        technologies: ["React.JS", "Tailwind CSS", ".NET", "Python"],
    },
    {
        year:'January 2024 - June 2024',
        role: 'Research and Development Intern',
        company: 'BaseCamp305',
        description: 'Created multiple websites on Wix for Miami Food and Wine Festival, securing them under a private domain with Scaleflex. ',
        technologies: ["Javascript", "HTML", "CSS", "Wix", "Java"],
    },
];
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
        technologies: ["Javascript, HTML, CSS"],
    },
    
];

export default EXPERIENCES;