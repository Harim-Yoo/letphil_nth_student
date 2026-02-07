import { Header, Footer, MainBody, IntroTitle, IntroFirstPart, IntroSecondPart, IntroFirstDescription, IntroMail } from "./components.js";

/* Header Setup */

new Header(true);

/*Body Setup */

const mainContents = ["mainIntro","mainAbout","mainContact"];

new MainBody(mainContents);
new IntroTitle(".mainIntro", "Daily Exercise Log & Learn", "white");
new IntroFirstPart(".mainAbout", "What is this About?")

const descSentences= [
    "Log your exercise and track your workout.",
    "Learn about exercises and keep updated."
];

new IntroFirstDescription(".mainAbout", descSentences);
new IntroSecondPart(".mainContact","Contact for Further Information")
new IntroMail(".mainContact","mailto:jamesyhr@gmail.com","mailInfo","Mail Me");

/*Footer Setup*/

new Footer();