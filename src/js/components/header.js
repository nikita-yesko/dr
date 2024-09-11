import $ from 'jquery'

export const DEVICE_BREAKPOINTS = {
  MOBILE: 0,
  TABLET_S: 768,
  TABLET_L: 1024,
}

const disableScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.height = '100vh'
  document.documentElement.style.overflow = 'hidden'
  document.documentElement.style.height = '100vh'
}

const enableScroll = () => {
  document.body.style.overflow = 'initial'
  document.body.style.height = 'initial'
  document.documentElement.style.overflow = 'initial'
  document.documentElement.style.height = 'initial'
}

const Header = () => {
  
  // const mobileMenuButton = document.getElementById('header-mobile-menu')
  // const mobileMenu = document.getElementById('mobile-menu')
  // const mobileMenuItems = [...mobileMenu.querySelectorAll('.header-main__item')]

  // if (mobileMenuItems) {
  //   mobileMenuItems.forEach((mobileMenuItem) => {
  //     const mobMenuNestBtn = mobileMenuItem.children[0]
  //     const mobMenuNestItems = mobileMenuItem.children[1]
  //     if (!!mobMenuNestItems) {
  //       mobMenuNestItems.hidden = true
  //       mobMenuNestBtn.onclick = () => {
  //         if (mobMenuNestItems.hidden) {
  //           mobMenuNestItems.hidden = false
  //         } else {
  //           mobMenuNestItems.hidden = true
  //         }
  //       }
  //     }
  //   })
  // }

  // const heroBackground = document.getElementById('hero-bg')
  // const windowWidth = window.innerWidth
  // if (heroBackground) {
  //   if (windowWidth < DEVICE_BREAKPOINTS.TABLET_S) {
  //     heroBackground.innerHTML = `<img class="hero-bg block xl:hidden" src="/wp-content/themes/igpa/dist/img/backgrounds/hero-mobile-min.png" alt="IGPA" />`
  //   } else {
  //     setTimeout(() => {
  //       heroBackground.innerHTML = `<video loading="lazy" class="hero-bg hidden xl:block" playsinline autoplay muted loop poster="/wp-content/themes/igpa/dist/img/backgrounds/hero-mobile-min.png">
  //           <source src="/wp-content/themes/igpa/dist/img/hero.mp4" type="video/mp4">
  //           Your browser does not support the video tag.
  //           </video>`
  //     }, 100)
  //   }
  // }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('colored')
    } else {
      $('#header').removeClass('colored')
    }
  });

  const clickMobileMenu = () => {
    if (document.querySelector('.header__menu')) {
      const menuBtn = document.querySelector('.header__menu');
      const nav = document.querySelector('.header__nav');
      menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
      });
    }
  }
  clickMobileMenu();

  // mobileMenuButton.onclick = () => {
  //   if (!!mobileMenu.hidden) {
  //     mobileMenu.hidden = false
  //     disableScroll()
  //     mobileMenuButton
  //     mobileMenuButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`
  //   } else {
  //     mobileMenu.hidden = true
  //     enableScroll()
  //     mobileMenuButton.innerHTML = `<i class="fa-solid fa-bars"></i>`
  //   }
  // }

  // const navItems = [...document.querySelectorAll('.header-main__item.desctop')]
  // const url = window.location.pathname

  // navItems.forEach((navItem) => {
  //   if (url.includes(navItem?.children?.[0].pathname.slice(1, 100))) {
  //     navItem?.children?.[0]?.classList?.add('active')
  //   }
  // })
}

export default Header
