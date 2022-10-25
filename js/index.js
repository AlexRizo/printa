// Referencias HTML;
const us = document.querySelector('.us')
const services = document.querySelector('.services')
const experience = document.querySelector('.experience')
const contact = document.querySelector('.contact')

const underline = document.querySelector('.underline')

underline.style.transition = '1s'

let init = 0;

us.addEventListener('click', () => {
    click(0)
})

services.addEventListener('click', () => {
    click(1)
})

experience.addEventListener('click', () => {
    click(2)
})

contact.addEventListener('click', () => {
    click(3)
})

const click = (pos) => {
    if (init == 0 ) {
        switch (pos) {
            case 1:
                console.log('servicios');
                underline.style.marginLeft = '264px'
                break;
            case 2:
                console.log('experiencia');
                underline.style.marginLeft = '528px'
                break;
            case 3:
                console.log('contacto');
                underline.style.marginLeft = '832px'
                break;
            default: break;
        }
    }

    if (init == 1 ) {
        switch (pos) {
            case 0:
                console.log('nosotros');
                underline.style.marginLeft = '0px'
                break;
            case 2:
                console.log('experiencia');
                underline.style.marginLeft = '528px'
                break;
            case 3:
                console.log('contacto');
                underline.style.marginLeft = '832px'
                break;
            default: break;
        }
    }

    if (init == 2 ) {
        switch (pos) {
            case 0:
                console.log('nosotros');
                underline.style.marginLeft = '0px'
                break;
            case 1:
                console.log('servicios');
                underline.style.marginLeft = '264px'
                break;
            case 3:
                console.log('contacto');
                underline.style.marginLeft = '832px'
                break;
            default: break;
        }
    }

    if (init == 3 ) {
        switch (pos) {
            case 0:
                console.log('nosotros');
                underline.style.marginLeft = '0px'
                break;
            case 1:
                console.log('nosotros');
                underline.style.marginLeft = '264px'
                break;
            case 2:
                console.log('experiencia');
                underline.style.marginLeft = '528px'
                break;
            default: break;
        }
    }

    init = pos;
}

const plusIcon = document.querySelectorAll('.plus-icon');
const minusIcon = document.querySelectorAll('.fa-minus');

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

const head = document.getElementById('header');
const menu = document.getElementById('menu');

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
    console.log(y);

    if (y < 100) {
        head.classList.remove('menu-background-transition');
    }
    
    if (y >= 100) {
        head.classList.add('menu-background-transition');
    }

    switch (y) {
        case 1330 :
            underline.style.marginLeft = '0px'
            break;
    
        case 2437 :
            underline.style.marginLeft = '264px'
            break;
        case 3534 :
            underline.style.marginLeft = '528px'
            break;
        case 3955 :
            underline.style.marginLeft = '832px'
            break;
        default:
            break;
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

const toggleClass = (element, className) => {
    element.classList.toggle(className);
}

const openPapeleria = (papeleria) => {
    switch (papeleria) {
        case 'corporativa':
            papIcons.papCor.toggleAttribute('hidden');
            toggleClass(plusIcon[0], 'toggle-display-false');
            toggleClass(minusIcon[0], 'toggle-display-true');
            papDescriptions.papCorDesc.toggleAttribute('hidden');
            papTitles.papCorpTitle.classList.toggle('toggle-txt-color-black');
            papContainers.papCorpContainer.classList.toggle('toggle-bg-gray');
        break;

        case 'publicitaria':
            papIcons.papPub.toggleAttribute('hidden')
            toggleClass(plusIcon[1], 'toggle-display-false');
            toggleClass(minusIcon[1], 'toggle-display-true');
            papDescriptions.papPubDesc.toggleAttribute('hidden');
            papTitles.papPubTitle.classList.toggle('toggle-txt-color-black');
            papContainers.papPubContainer.classList.toggle('toggle-bg-gray');
        break;

        case 'administrativa':
            papIcons.papAdm.toggleAttribute('hidden')
            toggleClass(plusIcon[2], 'toggle-display-false');
            toggleClass(minusIcon[2], 'toggle-display-true');
            papDescriptions.papAdmDesc.toggleAttribute('hidden');
            papTitles.papAdmTitle.classList.toggle('toggle-txt-color-black');
            papContainers.papAdmContainer.classList.toggle('toggle-bg-gray');
        break;
    
        case 'social':
            papIcons.papSoc.toggleAttribute('hidden')
            toggleClass(plusIcon[3], 'toggle-display-false');
            toggleClass(minusIcon[3], 'toggle-display-true');
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

