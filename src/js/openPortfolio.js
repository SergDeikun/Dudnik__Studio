(() => {
  const refs = {
    portfolioLinkHeadr: document.querySelector('.js-open-portfolio'),
    portfolioLinkMobMenu: document.querySelector('.js-portfolio'),
    portfolioSection: document.querySelector('.js-portfolio-section'),
    heroSection: document.querySelector('.js-hero'),
    propertiesSection: document.querySelector('.js-properties'),
    aboutSection: document.querySelector('.js-about'),
    sliderSection: document.querySelector('.js-slider'),
    aboutUsHeaderLink: document.querySelector('.js-about-header'),
    aboutUsMobMenuLink: document.querySelector('.js-about-us'),
  };

  refs.portfolioLinkHeadr?.addEventListener('click', openPortfolio);
  refs.portfolioLinkMobMenu?.addEventListener('click', openPortfolio);
  refs.aboutUsHeaderLink?.addEventListener('click', back);
  refs.aboutUsMobMenuLink?.addEventListener('click', back);

  function openPortfolio() {
    refs.heroSection?.classList.add('is-hidden');
    refs.propertiesSection?.classList.add('is-hidden');
    refs.aboutSection?.classList.add('is-hidden');
    refs.sliderSection?.classList.add('is-hidden');
    refs.portfolioSection?.classList.remove('is-hidden');
  }

  function back() {
    refs.heroSection?.classList.remove('is-hidden');
    refs.propertiesSection?.classList.remove('is-hidden');
    refs.aboutSection?.classList.remove('is-hidden');
    refs.sliderSection?.classList.remove('is-hidden');
    refs.portfolioSection?.classList.add('is-hidden');
  }
})();
