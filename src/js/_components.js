


/*
  Preloader
*/

const preloader = document.getElementById('preloader')



document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    preloader.classList.add('loaded')
  },4000)
},{once: true});
