// Hamburger
var men = true;
$("#sandwich").click(function () {
   if (men == false) {
      $(".menu").slideUp();
      men = !men;
   } else {
      $(".menu").slideDown();
      men = !men;
   }
});
$("#sandwich").click(function () {
   $("#sandwich").toggleClass("active");
});
// Hamburger end

// Menu fixed
$("#menu").removeClass("default");
$(window).scroll(function () {
   if ($(this).scrollTop() > 60) {
      $("#menu").addClass("default").fadeIn("fast");
   } else {
      $("#menu").removeClass("default").fadeIn("fast");
   }
});
// Menu fixed end

// Button up
$(".up_btn").css("display", "none");
$(window).scroll(function () {
   if ($(this).scrollTop() > 300) {
      $(".up_btn").css("display", "block");
   } else {
      $(".up_btn").css("display", "none");
   }
});
// Button up end

// Smooth scroll
$('a[data-target^="anchor"]').bind("click.smoothscroll", function () {
   var target = $(this).attr("href"),
      bl_top = $(target).offset().top - 0;
   $("body, html").animate(
      {
         scrollTop: bl_top,
      },
      1000
   );
   return false;
});
// Smooth scroll end

// Number animation
var show = true;
$(window).on("scroll", function () {
   if (!show) return false;

   var w_top = $(window).scrollTop();
   var e_top = $(".statistics").offset().top;

   if (w_top + 400 >= e_top) {
      $(".statistics_item span").each(function () {
         $(this)
            .prop("Counter", 0)
            .animate(
               {
                  Counter: $(this).text(),
               },
               {
                  duration: 4000,
                  easing: "swing",
                  step: function (now) {
                     $(this).text(Math.ceil(now));
                  },
               }
            );
      });

      show = false;
   }
});
// Number animation end

// Slider "Our Clients"
$(".our_clients_slider").slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   speed: 300,
   prevArrow: '<div class="slick_prev"></div>',
   nextArrow: '<div class="slick_next"></div>',
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
         },
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         },
      },
   ],
});
// Slider "Our Clients" end

// Slider "Rewiews"
$(".reviews_slider").slick({
   slidesToShow: 3,
   dots: true,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: "100px",
   speed: 900,
   prevArrow: '<div class="slick_prev"></div>',
   nextArrow: '<div class="slick_next"></div>',
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
         },
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         },
      },
   ],
});
// Slider "Reviews" end

// Certificates gallery
$(".certificates_wrap").magnificPopup({
   delegate: "a",
   type: "image",
   tClose: "Закрыть (Esc)",
   tLoading: "Загрузка изображения #%curr%...",
   gallery: {
      enabled: true,
      navigateByImgClick: true,
      tCounter: "%curr%/%total%",
      arrowMarkup:
         '<button title="" type="button" class="certificates_gallery_arrows-%dir%"></button>',
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
   },
});
// Certificates gallery end

// Certificates gallery
$(".our_days_wrap").magnificPopup({
   delegate: ".our_days_gallery_img",
   tClose: "Закрыть (Esc)",
   type: "image",
   tLoading: "Загрузка изображения #%curr%...",
   gallery: {
      enabled: true,
      navigateByImgClick: true,
      tCounter: "%curr%/%total%",
      arrowMarkup:
         '<button title="" type="button" class="certificates_gallery_arrows-%dir%"></button>',
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
   },
});
// Certificates gallery end

// Modal popup
$(".popup").magnificPopup({
   type: "inline",
   tClose: "Закрыть (Esc)",
   removalDelay: 100,
   mainClass: "my-mfp-zoom-in",
});
// Modal popup end

// Modal popup for video
$(".popup-youtube").magnificPopup({
   type: "iframe",
   iframe: {
      patterns: {
         youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0",
         },
      },
   },
});
// Modal popup for video end

// Add tag span
$("<span></span>").insertAfter(".car_brands_link:nth-child(8n)");
// Add tag span end

// Tabs
$(".tabs_menu a").click(function (e) {
   e.preventDefault();
   $(".tabs_menu .active").removeClass("active");
   $(this).addClass("active");
   var tab = $(this).attr("href");
   $(".tab").not(tab).css({
      display: "none",
   });
   $(tab).fadeIn(1500);
});
// Tabs end
