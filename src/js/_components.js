/*
  Preloader
*/

const preloader = document.getElementById('preloader')

document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    preloader.classList.add('loaded')
  },4000)
},{once: true});

/* Burger Menu Logic */

const burger = document.getElementById('burger');
const burgerFirstRect = document.getElementById('burgerFirstRect');
const burgerSecondRect = document.getElementById('burgerSecondRect');

burger.addEventListener('click',() => {
  burgerFirstRect.classList.toggle('firstRect');
  burgerSecondRect.classList.toggle('secondRect');
})
