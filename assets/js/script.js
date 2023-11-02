// Добавляем обработчик события клика на элемент "burger"
document.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('.header__burger');
  let navigation = document.querySelector('.navigation');
  let body = document.querySelector('body');
  if (burger) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burger.classList.toggle('active');
      navigation.classList.toggle('active');
      //body.classList.toggle('lock');
    });
  }
  // Обработчик события click для всего документа
  document.addEventListener('click', function (e) {
    if (!navigation.contains(e.target)) {
      // Проверяем, кликнули ли вне области navigation и burger
      burger.classList.remove('active');
      navigation.classList.remove('active');
      //body.classList.remove('lock');
    }
  });
});
//


//faq collapse
$(document).ready(function () {
  $('.faq__title').on('click', faqCollapse);
});

function faqCollapse() {
  var $this = $(this);
  $this.toggleClass("active");
  // $('.faq__title').not($this).removeClass("active");
  var $faqText = $this.next('.faq__text');
  // $('.faq__text').not($faqText).slideUp(500);
  $faqText.slideToggle(500);
}
//faq collapse


// smooth scroll
$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $(this).data('scroll'),
    blockOffset = $(blockId).offset().top;

  // Добавление класса "active" для родителя текущего элемента
  $this.closest('.navigation__item').addClass('active');

  // Удаление класса "active" у остальных родительских элементов
  $this.closest('.navigation__item').siblings().removeClass('active');

  // Удаление классов "lock" и "active" у соответствующих элементов
  $("body").removeClass("lock");
  $(".navigation").removeClass("active");
  $(".header__burger").removeClass("active");

  // Анимация прокрутки к элементу
  $("html, body").animate({
    scrollTop: blockOffset
  }, 500);
});
//


// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset)

  $(window).on("scroll", function () {

    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset)

  });

  function checkScroll(scrollOffset) {

    if (scrollOffset >= headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
});
//

// Scroll to About on Home
document.addEventListener("DOMContentLoaded", function () {
  // Найти элемент с id "about"
  const aboutSection = document.getElementById("about");

  // Проверить, существует ли элемент с id "about"
  if (aboutSection) {
    // Обработка клика по ссылке
    const link = document.querySelector(".hero__scroll");
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Отменить стандартное действие ссылки

      // Прокрутить страницу к элементу "about" с использованием smooth scrolling
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
//


// Slider
$(document).ready(function () {
  if ($('#slider__reviews').length) {
    $('#slider__reviews').slick({
      appendArrows: $('#reviews__arrows'),
      prevArrow: `<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M19.0596 12L5.05957 12" stroke="#0F0E13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.0596 5L5.05957 12L12.0596 19" stroke="#0F0E13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button>`,
      nextArrow: `<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M5.05957 12L19.0596 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.0596 5L19.0596 12L12.0596 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button>`,
      //appendDots: $('#city__dots'),

      variableWidth: true,
      centerMode: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      infinite: true,

      responsive: [
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 2,
            variableWidth: false,
          },
        },
        {
          breakpoint: 560,
          settings: {
            arrows: false,
            slidesToShow: 1,
            variableWidth: false,
          },
        },
      ],
    });
  }
});
// slider