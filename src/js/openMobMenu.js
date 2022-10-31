(() => {
  const refs = {
    menu: document.querySelector('.mob-menu'),
    openMenuBtn: document.querySelector('.mob-menu__open-btn'),
    closeMenuBtn: document.querySelector('.mob-menu__close-btn'),
  };

  refs.openMenuBtn?.addEventListener('click', toggleMenu);
  refs.closeMenuBtn?.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu?.classList.toggle('is-hidden');
  }
})();
