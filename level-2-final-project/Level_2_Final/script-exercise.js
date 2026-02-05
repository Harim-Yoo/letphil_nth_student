/* Header Setup */

const header = document.createElement("header");
const headerInfo = [
    {
        href:"./index.html",
        class:"homeTag",
        desc:"Home"
    },
    {
        href:"./logworkout.html",
        class:"logTag",
        desc:"Log Your Workout"
    },
    {
        href:"./showexercise.html",
        class:"learnTag",
        desc:"Learn New Exercise"
    }
];

const headerHTML = headerInfo
    .map(item => {
        return `
            <a href="${item.href}" class="${item.class}">${item.desc}</a>
        `
    });

header.innerHTML = headerHTML;
document.body.prepend(header);
