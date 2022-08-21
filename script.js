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

nav.addEventListener('mouseover', opacityOnHover.bind(.5))

nav.addEventListener('mouseout', opacityOnHover.bind(1));

function opacityOnHover(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

// sticky nav // 196. Implementing a Sticky Navigation: The Scroll Event
// bad practice for phones& too slow

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', (e)=> {
//   // console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// sticky nav // 197. A Better Way: The Intersection Observer API
// training:
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }

// const obsOptions = {
//   root: null,
//   // threshold: 0.1,
//   threshold: [0, 0.2],
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

function stickyNav(entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const headerObserver = new IntersectionObserver(
  stickyNav , 
  { 
    root: null, 
    threshold: 0, 
    rootMargin: `-${navHeight}px` }
);
headerObserver.observe(header);


//  198. Revealing Elements on Scroll

const allSections = document.querySelectorAll('.section');

function revealSection(entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(
  revealSection,
  { 
    root: null, 
    threshold: 0.15,
  }
);

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden'); //--------------------- --------- --- -----
});

// 199. Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

function loadImg(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    return;
  }

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(
  loadImg,
  {
    root: null,
    threshold: 0,
    rootMargin: '-200px'
  }
);

imgTargets.forEach(img => imgObserver.observe(img));

// slider
// 200. Building a Slider Component: Part 1
// 201. Building a Slider Component: Part 2

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
let curSlide = 0;

const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.5)';
// slider.style.overflow = 'visible';

btnRight.addEventListener('click', nextSlide); 
function nextSlide() {
  curSlide++;
  if (curSlide > slides.length - 1) {
    curSlide = 0;
  }
  console.log('++', curSlide);
  goToSlide(curSlide);
  activateDot(curSlide); 
};

btnLeft.addEventListener('click', prevSlide);
function prevSlide () {
  curSlide--;
  if (curSlide < 0) {
    curSlide = slides.length - 1;
  }
  console.log('--', curSlide);
  goToSlide(curSlide);
  activateDot(curSlide); 
};

function goToSlide(slide) {
  slides.forEach(
    (s, i) => s.style.transform = `
    translateX(${100 * (i - slide)}%)
    `
  );
}
goToSlide(curSlide);

//keybord
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    nextSlide();
  } 

  if (e.key === 'ArrowLeft') {
    prevSlide();
  } 
});

//dots 
function createDots() {
  slides.forEach((_, i) => {
   dotContainer.insertAdjacentHTML('beforeend',
   `<button class="dots__dot" data-slide="${i}"></button>`
   )
  });
}
createDots();

function activateDot(slide) {
  document.querySelectorAll('.dots__dot')
  .forEach(dot => {
    dot.classList.remove('dots__dot--active');
  });

  document.querySelector(`.dots__dot[data-slide="${slide}"]`)
  .classList.add('dots__dot--active'); //
}
activateDot(curSlide);

dotContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots__dot')) {
    // const slide = e.target.dataset.slide;
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activateDot(slide); 
  }
});

// 202. Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', (e) => {
  console.log(e);
});

window.addEventListener('load', (e) => {
  console.log(e);
});

window.addEventListener('beforeunload', (e) => {
  console.log(e);
  e.preventDefault();
  e.returnValue = '';
});

// 203. Efficient Script Loading: defer and async.