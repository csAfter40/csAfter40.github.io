import wordleImg1 from "./images/projectImages/wordle/wordle1.png";
import wordleImg2 from "./images/projectImages/wordle/wordle2.png";
import wordleImg3 from "./images/projectImages/wordle/wordle3.png";
import wordleImg4 from "./images/projectImages/wordle/wordle4.png";
import walletImg1 from "./images/projectImages/wallet/wallet1.png";
import walletImg2 from "./images/projectImages/wallet/wallet2.png";
import walletImg3 from "./images/projectImages/wallet/wallet3.png";
import walletImg4 from "./images/projectImages/wallet/wallet4.png";
import walletImg5 from "./images/projectImages/wallet/wallet5.png";
import walletImg6 from "./images/projectImages/wallet/wallet6.png";
import walletImg7 from "./images/projectImages/wallet/wallet7.png";
import jumpImg from "./images/projectImages/jump/jump.png";
import jumpImg1 from "./images/projectImages/jump/jump1.jpg";
import jumpImg2 from "./images/projectImages/jump/jump2.jpg";
import jumpImg3 from "./images/projectImages/jump/jump3.jpg";
import jumpImg4 from "./images/projectImages/jump/jump4.jpg";
import jumpImg5 from "./images/projectImages/jump/jump5.jpg";

 
const projects = [
    {
        id: 1,
        title: "Wallet",
        image: walletImg1,
        description: "A simple cost management app in which users can input their expences and incomes so that financial status and reports can be viewed. App supports multi currencies.",
        techStack: ["python", "django", "html", "javascript", "css", "postgresql", "bootstrap"],
        year: 2023,
        liveUrl: "https://costmanagementapp-production.up.railway.app/",
        codeUrl: "https://github.com/csAfter40/cost_management_app",
        detailPictures: [walletImg1, walletImg2, walletImg3, walletImg4, walletImg5, walletImg6, walletImg7],
    },
    {
        id: 2,
        title: "Wordle Clone",
        image: wordleImg1,
        description: "A clone of the popular Wordle game with multiple language and word length selection option.",
        techStack: ["react", "html", "javascript", "css", "bootstrap"],
        year: 2023,
        liveUrl: "https://main--super-florentine-6222ff.netlify.app/",
        codeUrl: "https://github.com/csAfter40/wordle-clone",
        detailPictures: [wordleImg1, wordleImg2, wordleImg3, wordleImg4],
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
        detailPictures: [jumpImg1, jumpImg2, jumpImg3, jumpImg4, jumpImg5],
    },
]

export default projects