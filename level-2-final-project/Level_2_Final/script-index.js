/*Header Setup*/

const header = document.createElement("header");
const headerInfo = [
    {
        href : "./logworkout.html",
        class: "logTag",
        desc: "Log Your Workout"
    },
    {
        href : "./showexercise.html",
        class: "learnTag",
        desc: "Learn New Workout"
    }
]

const headerHTML = headerInfo
                    .map((item) => `<a href="${item.href}" class="${item.class}">${item.desc}</a>`)
                    .reduce((acc,cur)=>{
                        return acc + cur 
                    }, "");

header.innerHTML = headerHTML;
document.body.prepend(header);

/* Main Setup*/

const main = document.createElement("main");
const mainContents = ["mainIntro","mainAbout","mainContact"];
const createMainDivs = (props) => {
    return `
    <div class="${props}"></div>
    `
}
const mainHTML = mainContents.map(item=>createMainDivs(item)).reduce((acc,cur)=>(acc+cur),"");
main.innerHTML = mainHTML;
document.body.append(main);

const mainIntro = document.querySelector(".mainIntro");
const mainIntroH1 = document.createElement("h1");
mainIntroH1.textContent = "Daily Exercise Log & Learn";
mainIntroH1.style.color = "white";
mainIntro.appendChild(mainIntroH1);

const mainAbout = document.querySelector(".mainAbout");
const mainAboutH3 = document.createElement("h3");
const mainAboutText = "What is this about?";
mainAboutH3.textContent = mainAboutText.toUpperCase();
mainAbout.appendChild(mainAboutH3);

const aboutContents = document.createElement("div");
const descSentences= [
    "Log your exercise and track your workout.",
    "Learn about exercises and keep updated."
];

const aboutHtmlStrings = descSentences
    .map((item)=>`<p>${item}</p>`)
    .join("");

aboutContents.innerHTML = aboutHtmlStrings;
aboutContents.style.color = "white";
aboutContents.style.textAlign = "center";
mainAbout.appendChild(aboutContents);

const mainContact = document.querySelector(".mainContact");
const mainContactH3 = document.createElement("h3");
const mainContactText = "Contact for Further Information";
mainContactH3.textContent = mainContactText.toUpperCase();
mainContact.appendChild(mainContactH3);

const contactP = document.createElement("a");
contactP.href = "mailto:jamesyhr@gmail.com";
contactP.classList.add("mailInfo");
contactP.textContent = "Mail Me";
mainContact.appendChild(contactP);

/*Footer Setup*/

const footerSentence = "Copyright @ Harim Yoo"

const footer = document.createElement("footer");
document.body.append(footer);

const newP = document.createElement("p");
newP.textContent = footerSentence;
newP.style.color = "white";
footer.appendChild(newP);