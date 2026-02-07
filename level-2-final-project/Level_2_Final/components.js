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

class IdxBodyComponent {
    constructor(tagName,parentSelector) {
        this.element = document.createElement(tagName);
        const parent = document.querySelector(parentSelector);
        if (parent) {
            parent.appendChild(this.element)
        }        
    }
    setText(txt) {
        this.element.textContent = txt;
    }
    setUpperText(txt) {
        this.element.textContent = txt.toUpperCase();
    }
    setColor(color) {
        this.element.style.color = color;
    }
}

export class IntroTitle extends IdxBodyComponent {
    constructor(parentSelector,txt,color){
        super("h1",parentSelector);
        this.setText(txt);
        this.setColor(color);
    }
}

export class IntroFirstPart extends IdxBodyComponent {
    constructor(parentSelector,txt){
        super("h3", parentSelector)
        this.setUpperText(txt);
    }
}

export class IntroSecondPart extends IdxBodyComponent {
    constructor(parentSelector,txt){
        super("h3",parentSelector);
        this.setUpperText(txt);
    }
}

export class Footer {
    constructor() {
        this.element = document.createElement("footer");
        this.element.textContent = "Copyright @ Harim Yoo";
        document.body.append(this.element);
    }
}