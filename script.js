function load() {
    document.body.className = 'pl';
}

window.onload = load;

function selectWebTabs(){
    webTabs =  document.getElementById("web-tabs");
    if(! webTabs.classList.contains('is-active')){
        webTabs.classList.add('is-active');
        document.getElementById("panel-web").classList.remove('is-hidden');
        document.getElementById("software-tabs").classList.remove('is-active');
        document.getElementById("panel-software").classList.add('is-hidden');
    }
}

function selectSoftwareTabs(){
    softwareTabs = document.getElementById("software-tabs");
    if(! softwareTabs.classList.contains('is-active')){
        softwareTabs.classList.add('is-active');
        document.getElementById("panel-software").classList.remove('is-hidden');
        document.getElementById("web-tabs").classList.remove("is-active");
        document.getElementById("panel-web").classList.add("is-hidden");
    }
}