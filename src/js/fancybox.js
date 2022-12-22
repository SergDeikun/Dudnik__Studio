import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox.css';
// Initialise Carousel
const myCarousel = new Carousel(document.querySelector('#myCarousel'), {
  preload: 2,
});
