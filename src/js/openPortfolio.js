(() => {
  const refs = {
    portfolioLink: document.querySelector('.js-open-portfolio'),
    firstPage: document.querySelector('.first-page'),
    portfolioSection: document.querySelector('.js-portfolio-section'),
    heroSection: document.querySelector('.js-hero'),
    propertiesSection: document.querySelector('.js-properties'),
    aboutSection: document.querySelector('.js-about'),
    sliderSection: document.querySelector('.js-slider'),
    aboutHeder: document.querySelector('.js-about-heder'),
  };

  refs.portfolioLink?.addEventListener('click', toggleMenu);
  refs.aboutHeder?.addEventListener('click', back);

  function toggleMenu() {
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
