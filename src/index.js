import { Layer } from './Layer/index.js';
import './style.css';

const navBtn = document.querySelector('#nav-btn');
navBtn.addEventListener('click', () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

const closeMenu = () => {
  const navElm = document.querySelector('nav');
  navElm.classList.add('nav-closed');
};

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', closeMenu);
});

let ordered = false;
const orderBtnElm = document.querySelector('.order-btn');
orderBtnElm.addEventListener('click', () => {
  const drinkCupElm = document.querySelector('.drink__cup');
  if (!ordered) {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.remove('drink__cup--selected');
    ordered = false;
  }
});

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const drinkInfoElm = document.querySelector('.drink__info');
layers.forEach((layer) => {
  drinkInfoElm.innerHTML += Layer(layer);
});
