import { Header, Footer, IntroTitle, IntroFirstPart, IntroSecondPart } from "./components.js";

/* Header Setup */

new Header(true);

/* Main Setup*/

const main = document.createElement("main");
const mainContents = ["mainIntro","mainAbout","mainContact"];

const createMainDivs = (props) => {
    return `
    <div class="${props}"></div>
    `
}

const mainHTML = mainContents
    .map(item=>createMainDivs(item))
    .reduce((acc,cur)=>(acc+cur),"");

main.innerHTML = mainHTML;
document.body.append(main);

new IntroTitle(".mainIntro", "Daily Exercise Log & Learn", "white");
new IntroFirstPart(".mainAbout", "What is this About?")

const aboutContents = document.createElement("div");
const descSentences= [
    "Log your exercise and track your workout.",
    "Learn about exercises and keep updated."
];

const aboutHtmlStrings = descSentences
    .map((item)=>`<p>${item}</p>`)
    .join("");


const mainAbout = document.querySelector("." + mainContents[1]);
const mainContact = document.querySelector("." + mainContents[2]);

aboutContents.innerHTML = aboutHtmlStrings;
aboutContents.style.color = "white";
aboutContents.style.textAlign = "center";
mainAbout.appendChild(aboutContents);

new IntroSecondPart(".mainContact","Contact for Further Information")

const contactP = document.createElement("a");
contactP.href = "mailto:jamesyhr@gmail.com";
contactP.classList.add("mailInfo");
contactP.textContent = "Mail Me";
mainContact.appendChild(contactP);

/*Footer Setup*/

new Footer();