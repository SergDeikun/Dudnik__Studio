(() => {
  const refs = {
    mobMenu: document.querySelector('.js-menu-container'),
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    aboutUs: document.querySelector('.js-about-us'),
    portfolio: document.querySelector('.js-portfolio'),
    contacts: document.querySelector('.js-contacts'),
  };

  refs.openMenuBtn?.addEventListener('click', toggleMenu);
  refs.closeMenuBtn?.addEventListener('click', toggleMenu);
  refs.aboutUs?.addEventListener('click', toggleMenu);
  refs.portfolio?.addEventListener('click', toggleMenu);
  refs.contacts?.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.mobMenu?.classList.toggle('is-hidden');
  }
})();
