import { refs } from './get-refs';

export const openPortfolio = () => {
  if (refs.portfolioSection?.classList.contains('is-hidden') === false) {
    return;
  }
  refs.heroSection?.classList.add('is-hidden');
  refs.aboutSection?.classList.add('is-hidden');
  refs.propertiesSection?.classList.add('is-hidden');
  refs.contactsSection?.classList.add('is-hidden');
  refs.footer?.classList.remove('is-hidden');
  refs.portfolioSection?.classList.toggle('is-hidden');
  refs.mobMenu?.classList.add('is-hidden');
};

refs.portfolioLinkHeader?.addEventListener('click', openPortfolio);
refs.portfolioLinkMobMenu?.addEventListener('click', openPortfolio);
