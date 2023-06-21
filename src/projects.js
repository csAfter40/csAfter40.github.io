import wordleImg from "./images/projectImages/wordle.png";
import walletImg from "./images/projectImages/wallet.png";
import jumpImg from "./images/projectImages/jump.png";
 
const projects = [
    {
        id: 1,
        title: "Wallet",
        image: walletImg,
        description: "A simple cost management app in which users can input their expences and incomes so that financial status and reports can be viewed. App supports multi currencies.",
        techStack: ["python", "django", "html", "javascript", "css", "postgresql", "bootstrap"],
        year: 2023,
        liveUrl: "https://costmanagementapp-production.up.railway.app/",
        codeUrl: "https://github.com/csAfter40/cost_management_app",
    },
    {
        id: 2,
        title: "Wordle Clone",
        image: wordleImg,
        description: "A clone of the popular Wordle game with multiple language and word length selection option.",
        techStack: ["react", "html", "javascript", "css", "bootstrap"],
        year: 2023,
        liveUrl: "https://main--super-florentine-6222ff.netlify.app/",
        codeUrl: "https://github.com/csAfter40/wordle-clone",
    },
    {
        id: 3,
        title: "Jump Jump",
        image: jumpImg,
        description: "Jump Jump is a vertical endless platformer game written in Python using the Pygame module. The aim is to achieve the highest score by reaching higher platforms and collecting coins.",
        techStack: ["python", "pygame"],
        year: 2021,
        liveUrl: null,
        codeUrl: "https://github.com/csAfter40/jump-jump",
    },
]

export default projects