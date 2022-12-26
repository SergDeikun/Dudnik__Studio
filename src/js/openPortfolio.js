(() => {
  const refs = {
    portfolioLinkHeader: document.querySelector('.js-portfolio-header'),
    portfolioLinkMobMenu: document.querySelector('.js-portfolio-menu'),
    portfolioSection: document.querySelector('.js-portfolio-section'),
    heroSection: document.querySelector('.js-hero'),
    propertiesSection: document.querySelector('.js-properties'),
    aboutSection: document.querySelector('.js-about'),
    // sliderSection: document.querySelector('.js-slider'),
    contactsSection: document.querySelector('.js-contacts'),
    footer: document.querySelector('.js-footer'),
    mobMenu: document.querySelector('.js-menu-container'),
  };

  refs.portfolioLinkHeader?.addEventListener('click', openPortfolio);
  refs.portfolioLinkMobMenu?.addEventListener('click', openPortfolio);

  function openPortfolio() {
    refs.heroSection?.classList.add('is-hidden');
    refs.aboutSection?.classList.add('is-hidden');
    refs.propertiesSection?.classList.add('is-hidden');
    // refs.sliderSection?.classList.add('is-hidden');
    refs.contactsSection?.classList.add('is-hidden');
    refs.footer?.classList.remove('is-hidden');
    refs.portfolioSection?.classList.toggle('is-hidden');
    refs.mobMenu?.classList.add('is-hidden');
  }
})();
