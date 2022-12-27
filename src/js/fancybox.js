import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,

  Image: {
    zoom: false,
    click: false,
    wheel: 'slide',
  },
});
