import { refs } from './get-refs';

export const openAboutUs = () => {
  refs.heroSection?.classList.remove('is-hidden');
  refs.propertiesSection?.classList.remove('is-hidden');
  refs.aboutSection?.classList.remove('is-hidden');
  refs.contactsSection?.classList.add('is-hidden');
  refs.portfolioSection?.classList.add('is-hidden');
  refs.footer?.classList.remove('is-hidden');
  refs.mobMenu?.classList.add('is-hidden');
};

refs.aboutUsLinkHeader?.addEventListener('click', openAboutUs);
refs.abotUsLinkMobMenu?.addEventListener('click', openAboutUs);
