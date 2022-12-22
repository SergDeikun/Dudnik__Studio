(() => {
  const refs = {
    portfolioLink: document.querySelector('.js-open-portfolio'),
    firstPage: document.querySelector('.first-page'),
    portfolioSection: document.querySelector('.js-portfolio-section'),
    heroSection: document.querySelector('.js-hero'),
    propertiesSection: document.querySelector('.js-properties'),
    aboutSection: document.querySelector('.js-about'),
    sliderSection: document.querySelector('.js-slider'),
  };

  refs.portfolioLink?.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.heroSection.classList.add('is-hidden');
    refs.propertiesSection.classList.add('is-hidden');
    refs.aboutSection.classList.add('is-hidden');
    refs.sliderSection.classList.add('is-hidden');
    refs.portfolioSection?.classList.remove('is-hidden');
  }
})();
