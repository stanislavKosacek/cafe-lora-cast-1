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

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((data) => {
    const drinks = data.results;
    const drinksListElm = document.querySelector('.drinks-list');
    drinks.forEach((drink) => {
      drinksListElm.appendChild(Drink(drink));
    });
  });
