"use strict";

$('body').on('click', '.select__current.active', function (e) {
  $('.select__dropdown').removeClass('active');
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).parent().find('.select__dropdown').removeClass('active');
});
$('body').on('click', '.select__current:not(.active)', function (e) {
  $('.select__dropdown').removeClass('active');
  $('.select__current').removeClass('active');
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).parent().find('.select__dropdown').addClass('active');
});
$('body').on('click', '.select__dropdown div', function (e) {
  $('.select__dropdown div').removeClass('current');
  $(e.currentTarget).addClass('current');
  $(e.currentTarget).closest('.select').find('.select__current').text($(e.currentTarget).text());
});
$(document).on('click', function (e) {
  if (jQuery(e.target).closest('.select').length === 0) {
    $('.select__current').removeClass('active');
    $('.select__dropdown').removeClass('active');
  }
});
$(document).on('keyup', function (e) {
  if (e.key == 'Escape') {
    $('.select__current').removeClass('active');
    $('.select__dropdown').removeClass('active');
  }
});
$('body').on('click', '.location__close', function () {
  $('.location').slideUp(200);
});
$('body').on('focus', '.search input', function () {
  $('.search').addClass('focus');
});
$('body').on('blur', '.search input', function () {
  $('.search').removeClass('focus');
});
$('body').on('focus', '.form-group input, .form-group textarea', function (e) {
  $(e.currentTarget).parent().addClass('focus');
});
$('body').on('blur', '.form-group input, .form-group textarea', function (e) {
  $(e.currentTarget).parent().removeClass('focus');
});
var swiper = new Swiper('.slider .swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 16,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.slider .swiper-pagination'
  },
  navigation: {
    nextEl: '.slider .swiper-button-next',
    prevEl: '.slider .swiper-button-prev'
  }
});
var zIndex = 2;
$('body').on('mouseenter', '.gallery__item', function (e) {
  $(e.currentTarget).css('z-index', zIndex);
  zIndex++;
});
var reviews = new Swiper('.reviews .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.reviews .swiper-pagination'
  },
  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev'
  },
  breakpoints: {
    769: {
      slidesPerView: 1.6
    }
  }
});
var projectNav = new Swiper('.project__slider-nav', {
  spaceBetween: 10,
  slidesPerView: 3,
  slidesPerGroup: 3,
  watchSlidesProgress: true,
  pagination: {
    el: '.project .swiper-pagination'
  },
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev'
  }
});
var projectMain = new Swiper('.project__slider-main', {
  spaceBetween: 10,
  effect: 'fade',
  thumbs: {
    swiper: projectNav
  }
});
$('body').on('click', '.type', function (e) {
  $(e.currentTarget).toggleClass('active');
});
$('body').on('blur', '.input input', function (e) {
  if ($(e.currentTarget).val() !== '') {
    $(e.currentTarget).addClass('fill');
  } else {
    $(e.currentTarget).removeClass('fill');
  }
});
$('body').on('click', '.item__cart', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).closest('.item__bottom').toggleClass('active');
});

for (var i = 0; i < $('.item').length; i++) {
  var $this = $('.item').eq(i);
  $this.find('.item__bottom').css('height', $this.find('.item__bottom').outerHeight());
}

$('body').on('click', '.counter__control.plus', function (e) {
  $(e.currentTarget).parent().find('input').val(parseInt($(e.currentTarget).parent().find('input').val()) + 1);
});
$('body').on('click', '.counter__control.minus', function (e) {
  if ($(e.currentTarget).parent().find('input').val() > 1) {
    $(e.currentTarget).parent().find('input').val(parseInt($(e.currentTarget).parent().find('input').val()) - 1);
  }
});
$('body').on('click', '.product__img .btn:not(.active)', function (e) {
  $(e.currentTarget).removeClass('btn-outline').addClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-arrow-down"></use></svg> Скрыть подробное описание');
  $('.product__text').slideToggle(200);
});
$('body').on('click', '.product__img .btn.active', function (e) {
  $(e.currentTarget).addClass('btn-outline').removeClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-list"></use></svg> Подробное описание');
  $('.product__text').slideToggle(200);
});
$('body').on('click', '.cart__close', function (e) {
  $(e.currentTarget).closest('.cart__item').slideUp(200, function () {
    $(this).remove();
  });

  if ($('.cart__item').length === 1) {
    $(".cart__step").removeClass('active');
    $(".cart__step[data-step=\"0\"]").addClass('active');
    $('.cart__footer').fadeOut(100);
  }
});
$('body').on('click', '.cart__footer .btn', function (e) {
  var step = parseInt($(e.currentTarget).attr('data-step')) + 1;
  $(e.currentTarget).html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-delivery"></use></svg> Отправить заявку').attr('data-step', step);
  $(".cart__step").removeClass('active');
  $(".cart__step[data-step=\"".concat(step, "\"]")).addClass('active');
  $(".progress__item[data-step=\"".concat(step, "\"]")).addClass('active');

  if (step === 2) {
    $('.progress .line').css('width', '47%');
    $('.services__title').text('ОФОРМЛЕНИЕ ЗАКАЗА');
  }

  if (step === 3) {
    $('.progress .line').css('width', '100%');
    $('.services__title').text('ЗАВЕРШЕНИЕ ');
    $('.cart__footer').fadeOut(100);
  }
});

if ($(window).width() >= 1024) {
  var highestTitle = 0;

  for (var _i = 0; _i < $('.cert__title').length; _i++) {
    if ($('.cert__title').eq(_i).height() > highestTitle) {
      highestTitle = $('.cert__title').eq(_i).height();
    }
  }

  $('.cert__title').height(highestTitle);

  for (var _i2 = 0; _i2 < $('.step').length; _i2++) {
    var $step = $('.step').eq(_i2);
    var stepHeight = 0;

    for (var j = 0; j < $step.find('.step__title').length; j++) {
      if ($step.find('.step__title').eq(j).height() > stepHeight) {
        stepHeight = $step.find('.step__title').eq(j).height();
      }
    }

    $step.find('.step__title').height(stepHeight);
  }

  for (var _i3 = 0; _i3 < $('.step').length; _i3++) {
    var _$step = $('.step').eq(_i3);

    var _stepHeight = 0;

    for (var _j = 0; _j < _$step.find('.step__text').length; _j++) {
      if (_$step.find('.step__text').eq(_j).height() > _stepHeight) {
        _stepHeight = _$step.find('.step__text').eq(_j).height();
      }
    }

    _$step.find('.step__text').height(_stepHeight);
  }
}

var masks = document.querySelectorAll('.phone-mask');
masks.forEach(function (el) {
  IMask(el, {
    mask: '+{7} (000) 000 00 00'
  });
}); // modals
// show modal

$('body').on('click', '[data-modal]:not(.modal)', function (e) {
  if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
  $('.modal.active').removeClass('active');
  $(".modal[data-modal=\"".concat($(e.currentTarget).attr('data-modal'), "\"]")).addClass('active');

  if ($(e.currentTarget).attr('data-modal') === 'thanks') {
    setTimeout(function () {
      $('.modal.active').find('svg').addClass('animate');
    }, 100);
  }
}); // close modal events

var closeModal = function closeModal() {
  $('.backdrop').removeClass('active');
  $('.modal').removeClass('active');
  $('.modal').find('svg').removeClass('animate');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.backdrop', function (e) {
  if ($(e.target)[0].className === 'backdrop active') closeModal();
}); // close modal on press ESC

$(document).keyup(function (e) {
  if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});
$('body').on('submit', 'form', function (e) {
  e.preventDefault();
});
$('body').on('click', '.hamburger', function (e) {
  $(e.currentTarget).toggleClass('active');
  $('.header').toggleClass('active');
  $('html').toggleClass('overflow');
});
$('body').on('click', '.show-filter a', function (e) {
  $(e.currentTarget).toggleClass('active');
  $('.filter').slideToggle(200);
}); // $('.count').counterUp();