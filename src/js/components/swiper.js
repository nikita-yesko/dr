import Swiper from 'swiper/bundle'

const handleSwiper = () => {
    const blogCardsSwiper = new Swiper('.blog-cards-slider', {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 5,
        navigation: {
          nextEl: '.blog-cards-slider .swiper-button-next',
          prevEl: '.blog-cards-slider .swiper-button-prev',
        },
    });
    const prizesCardsSwiper = new Swiper('.prizes-cards-slider', {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 5,
      breakpoints: {
        // Когда экран >= 480px
        425: {
          slidesPerView: 2 // Показывать 2 слайда
    
        },
        // Когда экран >= 768px
        768: {
          slidesPerView: 3 // Показывать 3 слайда
       
        },
        // Когда экран >= 1024px
        1024: {
          slidesPerView: 6 // Показывать 4 слайда
  
        }
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
    });
    const winprizesCardsSwiper = new Swiper('.winprizes-cards-slider', {
      loop: true,
      slidesPerView: 1.2,
      spaceBetween: 10,
      breakpoints: {
        // Когда экран >= 480px
        425: {
          slidesPerView: 1.8 // Показывать 2 слайда
    
        },
        // Когда экран >= 768px
        768: {
          slidesPerView: 3.2 // Показывать 3 слайда
       
        },
        // Когда экран >= 1024px
        1024: {
          slidesPerView: 4.8 // Показывать 4 слайда
  
        }
      },
      scrollbar: {
        el: ".winprizes-cards-slider .swiper-scrollbar",
        hide: false,
      },
    });
    const profileCardsSwiper = new Swiper('.profile-cards-slider', {
      loop: false,
      slidesPerView: 5.8,
      spaceBetween: 10,
      scrollbar: {
        el: ".profile-cards-slider .swiper-scrollbar",
        hide: false,
      },
    });
    const homeCardsSwiper = new Swiper('.home-cards-slider', {
      loop: false,
        slidesPerView: 1,
        spaceBetween: 18,
        navigation: {
          nextEl: '.home-cards-slider .swiper-button-next',
          prevEl: '.home-cards-slider .swiper-button-prev',
      },
    });
}


export default handleSwiper
