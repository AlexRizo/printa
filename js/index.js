// Referencias HTML;
const btnMenu = document.querySelectorAll('.stroke');

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

const printaLogo = document.querySelectorAll('.icon-fill');

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
    closeMenu();

    if (y < 1080) {
        menu.style.transition = '0.2s';
        menu.style.color = 'white';
        removeClasses(btnMenu, 'transition-stroke-black')
        addClasses(btnMenu, 'transition-stroke-white')
        addClasses(printaLogo, 'transition-white');
    }
    
    if (y >= 1080) {
        menu.style.transition = '0.2s';
        menu.style.color = 'black';
        removeClasses(printaLogo, 'transition-white')
        removeClasses(btnMenu, 'transition-stroke-white')
        addClasses(printaLogo, 'transition-black');
        addClasses(btnMenu, 'transition-stroke-black')


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

const openMenu = () => {
    menu.classList.toggle('menu-transition')
}

const closeMenu = () => {
    menu.classList.remove('menu-transition');
} 

// SWIPERJS ;
const swiper = new Swiper(".mySwiper", {
    slidesPerGroup: 1,
    grabCursor: 'true',
    loop: true,
    centerSlider: 'true',
    fade: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 5
          },
        // when window width is >= ???px
        1900: {
          slidesPerView: 5,
          spaceBetween: 5
        }
      }
});

