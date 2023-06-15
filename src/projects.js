import wordleImg from "./images/projectImages/wordle.png";
import walletImg from "./images/projectImages/wallet.png"

const projects = [
    {
        id: 1,
        title: "Wallet",
        image: walletImg,
        description: "A simple cost management app in which users can input their expences and incomes so that financial status and reports can be viewed. App supports multi currencies.",
        techStack: ["python", "django", "html", "javascript", "css", "postgresql"],
        year: 2023,
        liveUrl: "https://costmanagementapp-production.up.railway.app/",
        codeUrl: "https://github.com/csAfter40/cost_management_app",
    },
    {
        id: 2,
        title: "Wordle Clone",
        image: wordleImg,
        description: "A clone of the popular Wordle game with multiple language and word length selection option.",
        techStack: ["react", "html", "javascript", "css"],
        year: 2023,
        liveUrl: "https://main--super-florentine-6222ff.netlify.app/",
        codeUrl: "https://github.com/csAfter40/wordle-clone",
    },
]

export default projects