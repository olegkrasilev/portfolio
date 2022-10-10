/*
  Preloader
*/

const preloader = document.getElementById('preloader');
const animationDuration = 4000;

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    preloader.classList.add('loaded')
  },animationDuration)
},{once: true});

/* Burger Menu Logic */
const bodyScrollLock = require('body-scroll-lock');
const { disableBodyScroll,  enableBodyScroll } = bodyScrollLock;

const burger = document.getElementById('burger');
const burgerFirstRect = document.getElementById('burgerFirstRect');
const burgerSecondRect = document.getElementById('burgerSecondRect');
const menu = document.getElementById('menu');

burger.addEventListener('click',() => {
  burgerFirstRect.classList.toggle('firstRect');
  burgerSecondRect.classList.toggle('secondRect');
  menu.classList.toggle('active');

  if(menu.classList.contains('active')) {
    disableBodyScroll(menu)
  } else {
    enableBodyScroll(menu)
  }
})
