/**
 * This is script for index page
 */

(function ($) {
  $(document).ready(function () {
    // Hamburger Menu Handle
    $('.hamburger').on('click', function() {
      $('.header-menu').toggleClass('active');
      $('.hamburger').toggleClass('active');
    });

    // Tab action
    $('.tab .tab-controls__item').on('click', function(e) {
      if (!$(this).hasClass('active')) {
        e.preventDefault();
        e.stopPropagation();
        $('.tab .tab-controls__item.active').removeClass('active');
        $(this).addClass('active');
        var target = $(this).attr('href').replace('#','');
        $('.tab-images__item.active').fadeOut(300, function() {
          $('.tab-images__item.active').removeClass('active');
          $('.tab-images__item[tab-anchor=' + target + ']').fadeIn();
          $('.tab-images__item[tab-anchor=' + target + ']').addClass('active');
        })
        $('.tab-content__item.active').fadeOut(300, function() {
          $('.tab-content__item.active').removeClass('active');
          $('.tab-content__item[tab-anchor=' + target + ']').fadeIn();
          $('.tab-content__item[tab-anchor=' + target + ']').addClass('active');
        })
      }
    });

  });
})(jQuery);
