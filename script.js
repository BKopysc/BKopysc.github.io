// consts
const currentlyList = [
    {
        name: {
            pl: "Shortmind - aplikacja do zamieszczania krótkich postów (myśli)",
            eng: "Shortmind - an application for posting short posts (thoughts)"
        },
        tags: ["Java Spring Boot", "Angular", "PostgreSQL"]
    },
    {
        name: {
            pl: "QIzz - zdecentralizowana platforma do tworzenia quizów ze wsparciem promptów dla AI (ChatGPT, Bing Copilot)",
            eng: "QIzz - decentralized platform for creating quizzes with AI prompts support (ChatGPT, Bing Copilot)"
        },
        tags: ["Angular"]
    },
    {
        name: {
            pl: "Edytor low-code do generowania aplikacji w Angularze",
            eng: "Low-code editor for generating applications in Angular"
        },
        tags: ["UML", "Obeo", "Sirius"]
    }
]

// On start
document.addEventListener('DOMContentLoaded', function () {
    generateCurrentlyWorkingList();
});


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onscroll = function () { hideArrow() };


function generateCurrentlyWorkingList() {
    const currentlyWorking = document.getElementById("currently-working-list");
    currentlyList.forEach((element, index) => {
        const li = document.createElement("li");
        li.classList.add("has-text-grey-lighter", "li-block");
        const t = document.createElement("t");
        t.classList.add("lang");
        t.setAttribute("lang", "en");
        t.textContent = element.name.eng;
        li.appendChild(t);
        const t2 = document.createElement("t");
        t2.classList.add("lang");
        t2.setAttribute("lang", "pl");
        t2.textContent = element.name.pl;
        li.appendChild(t2);
        const div = document.createElement("div");
        div.classList.add("working-tag-div");
        element.tags.forEach(tag => {
            const span = document.createElement("span");
            span.classList.add("tag");
            span.textContent = tag;
            div.appendChild(span);
        });
        li.appendChild(div);
        currentlyWorking.appendChild(li);
    });

    // template

    /* 
    <ul>
    <li class="has-text-grey-lighter li-block">
        <t lang="en">en-content</t>
        <t lang="pl">pl-content</t>
        
        <div class="working-tag-div">
            <span class="tag>tag-content</span>
        </div>
    </li>
    </ul> 
    */
}


function selectWebTabs() {
    webTabs = document.getElementById("web-tabs");
    if (!webTabs.classList.contains('is-active')) {
        webTabs.classList.add('is-active');
        document.getElementById("panel-web").classList.remove('is-hidden');
        document.getElementById("software-tabs").classList.add('has-text-unselect');
        document.getElementById("software-tabs").classList.remove('is-active', 'has-text-light');
        document.getElementById("web-tabs").classList.add("has-text-light");
        document.getElementById("panel-software").classList.add('is-hidden');
    }
}

function hideArrow() {
    if (document.getElementById("down-arrow")) {
        const arrow = document.getElementById("down-arrow");
        arrow.style.opacity = '0';
        arrow.addEventListener('transitionend', () => arrow.remove());
    }
}


function selectSoftwareTabs() {
    softwareTabs = document.getElementById("software-tabs");
    if (!softwareTabs.classList.contains('is-active')) {
        softwareTabs.classList.add('is-active');
        document.getElementById("panel-software").classList.remove('is-hidden');
        document.getElementById("web-tabs").classList.remove("is-active", "has-text-light");
        document.getElementById("web-tabs").classList.add("has-text-unselect");
        document.getElementById("software-tabs").classList.add('has-text-light');
        document.getElementById("panel-web").classList.add("is-hidden");
    }
}

function changeLanguage(lang) {
    if (lang === 'pl') {
        document.getElementById("en-language").classList.remove("lang-border");
        document.getElementById("pl-language").classList.add("lang-border");
        document.body.className = 'pl'
    }
    else {
        document.getElementById("pl-language").classList.remove("lang-border");
        document.getElementById("en-language").classList.add("lang-border");
        document.body.className = 'en'
    }
}
