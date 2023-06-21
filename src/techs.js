import cssImage from "./images/techLogos/css.png";
import bootstrapImage from "./images/techLogos/bootstrap.png";
import djangoImage from "./images/techLogos/django.png";
import githubImage from "./images/techLogos/github.png";
import htmlImage from "./images/techLogos/html.png";
import javascriptImage from "./images/techLogos/javascript.png";
import postgresqlImage from "./images/techLogos/postgresql.png";
import pythonImage from "./images/techLogos/python.png";
import reactImage from "./images/techLogos/react.png";
import vscodeImage from "./images/techLogos/vscode.png";
import pygameImage from "./images/techLogos/pygame.png";

const techs = [
    {name: "python", image: pythonImage, title: "Python", isProjectTech: true},
    {name: "django", image: djangoImage, title: "Django", isProjectTech: true},
    {name: "javascript", image: javascriptImage, title: "Javascript", isProjectTech: true},
    {name: "html", image: htmlImage, title: "HTML", isProjectTech: true},
    {name: "css", image: cssImage, title: "CSS", isProjectTech: true},
    {name: "react", image: reactImage, title: "React JS", isProjectTech: true},
    {name: "postgresql", image: postgresqlImage, title: "PostgreSQL", isProjectTech: true},
    {name: "github", image: githubImage, title: "GitHub", isProjectTech: false},
    {name: "bootstrap", image: bootstrapImage, title: "Bootstrap", isProjectTech: true},
    {name: "vscode", image: vscodeImage, title: "VS Code", isProjectTech: false},
    {name: "pygame", image: pygameImage, title: "Pygame", isProjectTech: true},
]

export default techs;