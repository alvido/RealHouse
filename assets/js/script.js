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
  $('.faq__title').not($this).removeClass("active");
  var $faqText = $this.next('.faq__text');
  $('.faq__text').not($faqText).slideUp(500);
  $faqText.slideToggle(500);
}
//faq collapse


// smooth scroll
$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $(this).data('scroll'),
    blockOffset = $(blockId).offset().top;

  $("body").removeClass("lock");
  $(".navigation ").removeClass("active");
  $(".header__burger ").removeClass("active");

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
      //header.addClass("fixed");
    } else {
      //header.removeClass("fixed");
    }

  }
});
//