import $ from 'jquery'

const Footer = () => {
    if($('.footer__top-arrow').length){
        $(".footer__top-arrow").on('click', function() {
          var target = $(this).attr('data-target');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1500);
      });
    }
	
    const initScrollToTopButton = () => {
      const topButton = document.getElementById("scroll-to-top");
      const toggleButtonVisibility = () => {
          const scrollThreshold = 150;
          const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
          topButton.style.display = scrollPosition > scrollThreshold ? "flex" : "none";
      };
      window.addEventListener('scroll', toggleButtonVisibility);
      toggleButtonVisibility();
  };
  initScrollToTopButton();

}
export default Footer;