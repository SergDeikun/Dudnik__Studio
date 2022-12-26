(() => {
  const refs = {
    aboutUsLinkHeader: document.querySelector('.js-about-header'),
    abotUsLinkMobMenu: document.querySelector('.js-about-menu'),
    heroSection: document.querySelector('.js-hero'),
    aboutSection: document.querySelector('.js-about'),
    propertiesSection: document.querySelector('.js-properties'),
    contactsSection: document.querySelector('.js-contacts'),
    portfolioSection: document.querySelector('.js-portfolio-section'),
    footer: document.querySelector('.js-footer'),
    mobMenu: document.querySelector('.js-menu-container'),
  };

  refs.aboutUsLinkHeader?.addEventListener('click', openAboutUs);
  refs.abotUsLinkMobMenu?.addEventListener('click', openAboutUs);

  function openAboutUs() {
    refs.heroSection?.classList.remove('is-hidden');
    refs.propertiesSection?.classList.remove('is-hidden');
    refs.aboutSection?.classList.remove('is-hidden');
    refs.contactsSection?.classList.add('is-hidden');
    refs.portfolioSection?.classList.add('is-hidden');
    refs.footer?.classList.remove('is-hidden');
    refs.mobMenu?.classList.add('is-hidden');
  }
})();
