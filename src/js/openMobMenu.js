(() => {
  const refs = {
    menu: document.querySelector('.js-menu-container'),
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
  };

  refs.openMenuBtn?.addEventListener('click', toggleMenu);
  refs.closeMenuBtn?.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu?.classList.toggle('is-hidden');
  }
})();
