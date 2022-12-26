(() => {
  const refs = {
    contactsLinkHeader: document.querySelector('.js-contacts-header'),
    contactsLinkMobMenu: document.querySelector('.js-contacts-menu'),
    heroSection: document.querySelector('.js-hero'),
    propertiesSection: document.querySelector('.js-properties'),
    aboutSection: document.querySelector('.js-about'),
    footer: document.querySelector('.js-footer'),
    contactsSection: document.querySelector('.js-contacts'),
    portfolioSection: document.querySelector('.js-portfolio-section'),
    mobMenu: document.querySelector('.js-menu-container'),
  };

  refs.contactsLinkHeader?.addEventListener('click', openContacts);
  refs.contactsLinkMobMenu?.addEventListener('click', openContacts);

  function openContacts() {
    refs.heroSection?.classList.add('is-hidden');
    refs.propertiesSection?.classList.add('is-hidden');
    refs.aboutSection?.classList.add('is-hidden');
    refs.footer?.classList.add('is-hidden');
    refs.portfolioSection?.classList.add('is-hidden');
    refs.contactsSection?.classList.remove('is-hidden');
    refs.mobMenu?.classList.add('is-hidden');
  }
})();
