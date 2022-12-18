import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox.css';
// Initialise Carousel
// Initialise Carousel
const myCarousel = new Carousel(document.querySelector('#myCarousel'), {
  preload: 2,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,

  closeButton: 'top',

  Carousel: {
    Dots: true,
    on: {
      change: that => {
        myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});
