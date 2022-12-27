// import { refs } from './get-refs';

(() => {
  const refs = {
    mobMenu: document.querySelector('.js-menu-container'),
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
  };

  // const toggleMenu = () => {
  //   refs.mobMenu?.classList.toggle('is-hidden');
  // };

  refs.openMenuBtn?.addEventListener('click', toggleMenu);
  refs.closeMenuBtn?.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.mobMenu?.classList.toggle('is-hidden');
  }
})();
