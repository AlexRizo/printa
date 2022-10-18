// Referencias HTML;
const papCorpTitle = document.querySelector('.p-pap-corp');
const papPubTitle = document.querySelector('.p-pap-pub');
const papAdmTitle = document.querySelector('.p-pap-adm');
const papSocTitle = document.querySelector('.p-pap-soc');

const papCorpContainer = document.querySelector('.papeleria-corporativa');
const papPubContainer = document.querySelector('.papeleria-publicitaria');
const papAdmContainer = document.querySelector('.papeleria-administrativa');
const papSocContainer = document.querySelector('.papeleria-social');


const papCor = document.querySelector('.pap-corp');
const papPub = document.querySelector('.pap-pub');
const papAdm = document.querySelector('.pap-adm');
const papSoc = document.querySelector('.pap-soc');

const papCorDesc = document.querySelector('.pap-desc-corp');
const papPubDesc = document.querySelector('.pap-desc-pub');
const papAdmDesc = document.querySelector('.pap-desc-adm');
const papSocDesc = document.querySelector('.pap-desc-soc');

const menu = document.getElementById('menu');

const trazo3 = document.getElementById('Trazado_3');
const trazo4 = document.getElementById('Trazado_4');
const trazo5 = document.getElementById('Trazado_5');
const rect6 = document.getElementById('Rectangulo_6');
const trazo6 = document.getElementById('Trazado_6');
const rect7 = document.getElementById('Rectangulo_7');
const trazo7 = document.getElementById('Trazado_7');

const iconElements = [
    trazo3,
    trazo4,
    trazo5,
    rect6,
    trazo6,
    rect7,
    trazo7,
]

const papIcons = {
    papCor,
    papPub,
    papAdm,
    papSoc,
}

const papDescriptions = {
    papCorDesc,
    papPubDesc,
    papAdmDesc,
    papSocDesc,
}

const papContainers = {
    papCorpContainer,
    papPubContainer,
    papAdmContainer,
    papSocContainer,
}

const papTitles = {
    papCorpTitle,
    papPubTitle,
    papAdmTitle,
    papSocTitle,
}

window.onscroll = () => {
    const y = window.scrollY;

    if (y < 1080) {
        menu.style.transition = '0.2s';
        menu.style.color = 'white';
        addClasses(iconElements, 'transition-white');
    }
    
    if (y >= 1080) {
        menu.style.transition = '0.2s';
        menu.style.color = 'black';
        removeClasses(iconElements, 'transition-white')
        addClasses(iconElements, 'transition-black');

    }

};

const addClasses = (elements, className) => {
    elements.forEach(element => {
        element.classList.add(className);
    });
}

const removeClasses = (elements, className) => {
    elements.forEach(element => {
        element.classList.remove(className);
    });
}

const openPapeleria = (papeleria) => {
    switch (papeleria) {
        case 'corporativa':
            console.log('papeleria corporativa');
            papIcons.papCor.toggleAttribute('hidden');
            papDescriptions.papCorDesc.toggleAttribute('hidden');
            papTitles.papCorpTitle.classList.toggle('toggle-txt-color-black');
            papContainers.papCorpContainer.classList.toggle('toggle-bg-gray');
        break;

        case 'publicitaria':
            console.log('papeleria publicitaria');
            papIcons.papPub.toggleAttribute('hidden')
            papDescriptions.papPubDesc.toggleAttribute('hidden');
            papTitles.papPubTitle.classList.toggle('toggle-txt-color-black');
            papContainers.papPubContainer.classList.toggle('toggle-bg-gray');
        break;

        case 'administrativa':
            console.log('papeleria administrativa');
            papIcons.papAdm.toggleAttribute('hidden')
            papDescriptions.papAdmDesc.toggleAttribute('hidden');
            papTitles.papAdmTitle.classList.toggle('toggle-txt-color-black');
            papContainers.papAdmContainer.classList.toggle('toggle-bg-gray');
        break;
    
        case 'social':
            console.log('papeleria social');
            papIcons.papSoc.toggleAttribute('hidden')
            papDescriptions.papSocDesc.toggleAttribute('hidden');
            papTitles.papSocTitle.classList.toggle('toggle-txt-color-black');
            papContainers.papSocContainer.classList.toggle('toggle-bg-gray');
        break;
    }
}