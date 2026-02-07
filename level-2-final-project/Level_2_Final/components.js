/* Header Component */

export class Header {
    constructor(isHome) {
        this.element = document.createElement("header");
        const headerInfo = [
            {
                href: "./index.html",
                class: "homeTag",
                desc: "Go Home"
            },
            {
                href: "./logworkout.html",
                class: "logTag",
                desc: "Log Your Workout"
            },
            {
                href: "./showexercise.html",
                class: "learnTag",
                desc: "Learn New Exercise"
            }
        ]

        const toggleHeaderInfo = isHome ? headerInfo.filter(item => item.class !== "homeTag") : headerInfo;

        const headerHTML = toggleHeaderInfo
            .map((props) => {
                return `
            <a href="${props.href}" class="${props.class}">
            ${props.desc}
            </a>
            `
            })
            .reduce((a, c) => { return (a + c) }, "");

        this.element.innerHTML = headerHTML;
        document.body.prepend(this.element);
    }
}

/* Common Component Class */
class ComponentDiv {
    constructor(tagName, parentSelector) {
        this.element = document.createElement(tagName);
        const parent = document.querySelector(parentSelector);
        if (parent) {
            parent.appendChild(this.element)
        }
    }
    setText = (txt) => {
        this.element.textContent = txt;
    }
    setUpperText = (txt) => {
        this.element.textContent = txt.toUpperCase();
    }
    setColor = (color) => {
        this.element.style.color = color;
    }
    setClass = (className) => {
        this.element.classList.add(className);
    }
    setId = (id) => {
        this.element.id = id;
    }
    setHref = (href) => {
        this.element.href = href;
    }
}

/* Index.html */

export class MainBody extends ComponentDiv {
    constructor(mainContents) {
        super("main", "body");
        this.renderHTML(mainContents);
    }
    renderHTML = (mainContents) => {
        this.element.innerHTML = mainContents.map(item => `<div class=${item}></div>`).join("")
    }
}

export class IntroTitle extends ComponentDiv {
    constructor(parentSelector, txt, color) {
        super("h1", parentSelector);
        this.setText(txt);
        this.setColor(color);
    }
}

export class IntroFirstPart extends ComponentDiv {
    constructor(parentSelector, txt) {
        super("h3", parentSelector)
        this.setUpperText(txt);
    }
}

export class IntroSecondPart extends ComponentDiv {
    constructor(parentSelector, txt) {
        super("h3", parentSelector);
        this.setUpperText(txt);
    }
}

export class IntroMail extends ComponentDiv {
    constructor(parentSelector, href, className, txt) {
        super("a", parentSelector);
        this.setHref(href);
        this.setClass(className);
        this.setText(txt);
    }
}

export class IntroFirstDescription extends ComponentDiv {
    constructor(parentSelector, sentences) {
        super("div", parentSelector);
        this.element.style.color = "white";
        this.element.style.textAlign = "center";
        this.renderHTML(sentences);
    }
    renderHTML = (sentences) => {
        this.element.innerHTML = sentences.map((item) => `<p>${item}</p>`).join("");
    }
}

/* ShowExercise.html */

export class FetchDiv extends ComponentDiv {
    constructor(parentSelector, className) {
        super("div", parentSelector);
        this.setClass(className);
    }
}


export class FetchIntro extends ComponentDiv {
    constructor(parentSelector, txt) {
        super("h1", parentSelector)
        this.setUpperText(txt);
    }
}

export class FetchBtn extends ComponentDiv {
    constructor(parentSelector, txt, className, sendBundle ) {
        super("button", parentSelector);
        this.setText(txt);
        this.setClass(className);
        this.element.addEventListener("click", this.fetchData);
        this.callBack = sendBundle; // sendBundle on the righthand side will disappear as soon as we close constructor(){}, so we keep them saved as as calling method. If I write down this.sendBundle, then it will call back. 
    }
    fetchData = async () => {
        try {
            const response = await fetch("https://wger.de/api/v2/exerciseinfo/", {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();

            const randomIdx = Math.floor(Math.random() * data.results.length);
            console.log("We have selected", data.results[randomIdx]);

            const { category, muscles, muscles_secondary } = data.results[randomIdx];
            const workoutName = category ? category.name : "Unknown Category";
            const firstMuscles = muscles.map(item => item.name_en);
            const secondMuscles = muscles_secondary.map(item => item.name_en);
            const finalData = {
                name: workoutName,
                main_muscles: firstMuscles.length !== 0 ? firstMuscles : "No main muscles used",
                secondary_muscles: secondMuscles.length !== 0 ? secondMuscles : "No secondary muscles used",
            }
            if (this.callBack) {
                this.callBack(finalData);
            }

        } catch (e) {
            throw e
        }
    }
}

export class FetchDisplay extends ComponentDiv {
    constructor(parentSelector, txt, className) {
        super("div", parentSelector);
        this.setText(txt);
        this.setClass(className);
    }
    renderData = (data) => {
        const { name, main_muscles, secondary_muscles } = data;
        const spanTags = (item) => {
            if (Array.isArray(item)) {
                return item.map(i => `<span style="color:yellow">${i}</span>`).join("");
            } else {
                return item;
            }
        }
        this.setClass("fetchDisplay");
        this.element.innerHTML = `
            <h3>Workout: ${name}</h3>
            <p>Main Muscles: ${spanTags(main_muscles)}</p>
            <p>Sub Muscles: ${spanTags(secondary_muscles)}</p>
        `;
    }
}

/* Footer Component */

export class Footer {
    constructor() {
        this.element = document.createElement("footer");
        this.element.textContent = "Copyright @ Harim Yoo";
        document.body.append(this.element);
    }
}
