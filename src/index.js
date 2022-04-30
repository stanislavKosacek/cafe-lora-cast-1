import { Layer } from './Layer/index.js';
import { Drink } from './Drink/index.js';
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

const drinksListElm = document.querySelector('.drinks-list');
drinksListElm.appendChild(
  Drink({
    id: 'romano',
    name: 'Romano',
    ordered: false,
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  }),
);

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
