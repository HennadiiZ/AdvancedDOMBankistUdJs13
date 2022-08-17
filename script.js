'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
})

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// cookie-message
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `
  We use cookies 
  <button class="btn btn--close-cookie">Got it!</button>
  `;
message.style.background = '#37383d';
message.style.width = '120%';
message.style.padding = '10px';
header.append(message);

const btnCloseCookie = document.querySelector('.btn--close-cookie')
.addEventListener('click', ()=> {
  // message.parentElement.removeChild(message);
  message.remove();
});

// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(
  getComputedStyle(message).height, 10
) + 30 + 'px';


// document.documentElement.style.setProperty('--color-primary', 'red');

// Atributes
console.log(logo);
console.log(logo.src);
console.log(logo.getAttribute('src'));

// Data Atributes

// Classes

// scroll to 
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const section1coords = section1.getBoundingClientRect();
  
  console.log(section1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset , window.pageYOffset);
  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // window.scrollTo(section1coords.left, section1coords.top);
  
  // window.scrollTo(
  //   section1coords.left + window.pageXOffset, 
  //   section1coords.top + window.pageYOffset
  // );

  //-1
  // window.scrollTo({
  //   left: section1coords.left + window.pageXOffset, 
  //   top: section1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //-2
  section1.scrollIntoView({
    behavior: 'smooth'
  });
})

//page navigation
// const allLinks = document.querySelectorAll('.nav__link');
// allLinks.forEach((link) => {
//   link.addEventListener('click',(e) => {
//     e.preventDefault();
//     console.log('click');

//     // const id = this.getAttribute('href');
//     const id = e.target.getAttribute('href')
//     console.log(id); //#section--1

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });
//   })
// });

//my vers
// const headerNavv = document.querySelector('.nav');
// headerNavv.addEventListener('click', (e)=> {
//   if(e.target.classList.contains('nav__link')) {

//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });
//   }
// });

// his vers
const headerNavv = document.querySelector('.nav__links');
headerNavv.addEventListener('click', (e)=> {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// button tabs
const tabsContainer = document.querySelector('.operations__tab-container');
const tabBtns = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', (e) => {
  // const clicked = e.target;
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  tabBtns.forEach((tab) => {
    tab.classList.remove('operations__tab--active');
  })

  if (!clicked) {
    return;
  }

  if (clicked) {
    clicked.classList.add('operations__tab--active');
  }

  // console.log(clicked.dataset);
  // console.log(clicked.dataset.tab);

  tabsContent.forEach(c => {
    c.classList.remove('operations__content--active');
  });

  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');
})

// menu fade animation

const nav = document.querySelector('.nav')

// nav.addEventListener('mouseover', (e) => {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = .5;
//       }
//     });
//     logo.style.opacity = .5;
//   }
// });

// nav.addEventListener('mouseout', (e) => {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = 1;
//       }
//     });
//     logo.style.opacity = 1;
//   }
// });

nav.addEventListener('mouseover', (e) => {
  opacityOnHover(.5, e.target);
});

nav.addEventListener('mouseout', (e) => {
  opacityOnHover(1, e.target);
});

function opacityOnHover(opacity, target) {
  if (target.classList.contains('nav__link')) {
    const link = target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
}


