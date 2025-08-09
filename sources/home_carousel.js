import Splide from '@splidejs/splide'
import '@splidejs/splide/css/core'

document.addEventListener('DOMContentLoaded', function() {
  const splide = new Splide("#home_carousel", {
    arrows: false,
    pagination: true,
    autoplay: true,
  })
  splide.mount()
})