import { refs } from './get-refs';

export const toggleMenu = () => {
  refs.mobMenu?.classList.toggle('is-hidden');
};

refs.openMenuBtn?.addEventListener('click', toggleMenu);
refs.closeMenuBtn?.addEventListener('click', toggleMenu);
