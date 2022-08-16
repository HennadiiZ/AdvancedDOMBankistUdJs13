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

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

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

