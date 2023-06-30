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
    {
        name: "python", 
        image: pythonImage, 
        title: "Python", 
        isProjectTech: true,
        text: "My programming journey began with Python, and I have dedicated considerable time and effort to mastering the language. Confident in my ability to write clean, efficient, and maintainable Python code, I extensively utilize object-oriented programming (OOP) principles in my personal projects in order to create modular and scalable programs. \nI have hands-on experience with diverse Python modules and frameworks such as Django, Selenium, Tkinter, Pygame, and unittest. I can write unit and integration tests in order to identify and prevent defects, ensure that the software performs as expected. Furthermore, I am familiar with the TDD approach. I am also familiar with both MySQL and PostgreSQL and have utilized them in my Django projects."
    },
    {
        name: "django", 
        image: djangoImage, 
        title: "Django", 
        isProjectTech: true,
        text: "Having developed myself as a software developer for about 3 years, I have honed my skills in developing web applications using various technologies, with Django being my primary expertise. I have a good understanding of Django's core concepts, including MVT architecture, models, views, templates, and forms. I am proficient in utilizing Django's ORM to interact with databases, implementing complex business logic and writing efficient queries. \nMy abilities extends beyond Django to encompass front-end technologies like HTML, CSS, and JavaScript. I am skilled in building responsive and user-friendly interfaces, integrating them seamlessly with Django-powered backends.  I am well-versed in working with databases, particularly PostgreSQL and MySQL, ensuring efficient data modeling, optimization, and query performance. I can design and implement database schemas, migrations, and perform advanced queries to meet project requirements. \nI understand the importance of writing testable code and employ best practices for unit testing and integration testing in Django. I use Django Debug Toolbar to identify and resolve issues like n+1 problem. I also use Factory Boy library to generate model data for my tests. \nI leverage class-based views extensively in my Django development projects. Class-based views provide a structured and reusable approach to handling common web application patterns. By utilizing inheritance and mixins, I am able to encapsulate and reuse code across multiple views, promoting code modularity and reducing duplication. This approach allows for cleaner and more maintainable code, enabling me to efficiently implement complex functionality while adhering to best practices and design patterns in Django development."
    },
    {
        name: "javascript", 
        image: javascriptImage, 
        title: "Javascript", 
        isProjectTech: true,
        text: " I have a good understanding of core JavaScript concepts such as variables, functions, loops, and conditionals.  I am capable of working with the Document Object Model (DOM) to manipulate web page elements dynamically. I have utilized JavaScript to create dynamic forms and handle user interactions effectively. I am familiar with asynchronous programming in JavaScript, using techniques such as Promises and async/await to handle asynchronous operations efficiently. I have implemented AJAX requests, fetching data from APIs, and updating the UI accordingly."
    },
    {
        name: "html", 
        image: htmlImage, 
        title: "HTML", 
        isProjectTech: true,
        text: "Having worked on several web applications using Django and React JS(personal projects) has allowed me to develop a solid understanding of HTML as a frontend development tool. \nI prioritize writing clean, well-structured HTML code that adheres to best practices. I understand the importance of using appropriate tags and elements to enhance accessibility and maintain a high level of code quality. \nI am familiar with using HTML and CSS to build responsive web pages that adapt seamlessly to different screen sizes and devices. I understand the importance of mobile-first design and consistently strive to create user interfaces that provide an optimal experience across platforms."
    },
    {
        name: "css", 
        image: cssImage, 
        title: "CSS", 
        isProjectTech: true,
        text: "I have a solid understanding of the fundamental CSS selectors and properties, such as class selectors, ID selectors, and commonly used properties. I am able to apply these concepts effectively to style and layout web elements. \nI have begun exploring the concepts of responsive web design and understand the importance of creating websites that adapt to different screen sizes and devices. I am familiar with using CSS media queries and fluid grids to build responsive layouts. \n I have a good grasp of the CSS box model and can effectively utilize padding, margins, and borders to control the spacing and layout of elements on a web page. \ I have gained a foundational understanding of CSS Flexbox. I can utilize Flexbox properties, such as flex-direction, justify-content, and align-items, to create dynamic and adaptive layouts. "
    },
    {
        name: "react", 
        image: reactImage, 
        title: "React JS", 
        isProjectTech: true,
        text: "I have a good understanding of the fundamental concepts of React, including creating and composing reusable components. I am able to structure my code in a modular manner, enhancing maintainability and reusability. I am familiar with managing component state and utilizing props to pass data between components. I understand the importance of maintaining a single source of truth and strive to write clean and efficient code by appropriately managing state and props. I am comfortable using JSX to create component templates and efficiently render dynamic content. \nI have gained practical experience with React Router, a widely used library for implementing routing in React applications. I am proficient in setting up and configuring routes, creating nested routes, and implementing dynamic routing. I have leveraged React Router to build single-page applications with multiple views and smooth navigation."
    },
    {
        name: "postgresql", 
        image: postgresqlImage, 
        title: "PostgreSQL", 
        isProjectTech: true,
        text: " PostgreSQL skills are at an introductory level, I have a good understanding of the fundamental concepts. I am familiar with setting up a PostgreSQL database, creating tables, and performing basic CRUD (Create, Read, Update, Delete) operations. Additionally, I have worked with Django's Object-Relational Mapping (ORM) system, which has provided me with exposure to handling database interactions through Django models."
    },
    {
        name: "github", 
        image: githubImage, 
        title: "GitHub", 
        isProjectTech: false,
        text: "I can implement basic GIT operations like initializing a repository, committing changes, creating and switching between branches, merging branches, and pushing code to a remote repository. "
    },
    {
        name: "bootstrap", 
        image: bootstrapImage, 
        title: "Bootstrap", 
        isProjectTech: true,
        text: "Bootstrap provides a rich library of pre-styled components, such as navigation bars, buttons, forms, and cards. I have utilized Bootstrap in some of my personal projects and experienced integrating these components into web applications, ensuring a cohesive and professional user interface."
    },
    {
        name: "vscode", 
        image: vscodeImage, 
        title: "VS Code", 
        isProjectTech: false,
        text: "I familiar with VSCode's user-friendly interface and I can easily navigate through the different panels, use the integrated terminal effectively, and manage my workspace efficiently."
    },
    {
        name: "pygame", 
        image: pygameImage, 
        title: "Pygame", 
        isProjectTech: true,
        text: " I have developed a few games using Pygame, incorporating features such as character movement, collision detection, and level design. This projects taught me the importance of efficient code organization, game logic implementation, and user interface design."
    },
]

export default techs;