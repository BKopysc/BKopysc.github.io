// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }

function selectWebTabs(){
    webTabs =  document.getElementById("web-tabs");
    if(! webTabs.classList.contains('is-active')){
        webTabs.classList.add('is-active');
        document.getElementById("panel-web").classList.remove('is-hidden');
        document.getElementById("software-tabs").classList.add('has-text-black');
        document.getElementById("software-tabs").classList.remove('is-active', 'has-text-light');
        document.getElementById("web-tabs").classList.add("has-text-light");
        document.getElementById("panel-software").classList.add('is-hidden');
    }
}



function selectSoftwareTabs(){
    softwareTabs = document.getElementById("software-tabs");
    if(! softwareTabs.classList.contains('is-active')){
        softwareTabs.classList.add('is-active');
        document.getElementById("panel-software").classList.remove('is-hidden');
        document.getElementById("web-tabs").classList.remove("is-active", "has-text-light");
        document.getElementById("web-tabs").classList.add("has-text-black");
        document.getElementById("software-tabs").classList.add('has-text-light');
        document.getElementById("panel-web").classList.add("is-hidden");
    }
}

function changeLanguage(lang){
    if(lang === 'pl'){
        document.getElementById("en-language").classList.remove("lang-border");
        document.getElementById("pl-language").classList.add("lang-border");
        document.body.className='pl'
    }
    else{
        document.getElementById("pl-language").classList.remove("lang-border");
        document.getElementById("en-language").classList.add("lang-border");
        document.body.className='en'
    }
}