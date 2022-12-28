import { refs } from './get-refs';

export const openContacts = () => {
  refs.heroSection?.classList.add('is-hidden');
  refs.propertiesSection?.classList.add('is-hidden');
  refs.aboutSection?.classList.add('is-hidden');
  refs.footer?.classList.add('is-hidden');
  refs.portfolioSection?.classList.add('is-hidden');
  refs.contactsSection?.classList.remove('is-hidden');
  refs.mobMenu?.classList.add('is-hidden');
};

refs.contactsLinkHeader?.addEventListener('click', openContacts);
refs.contactsLinkMobMenu?.addEventListener('click', openContacts);
