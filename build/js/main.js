"use strict";

$('body').on('click', '.select__current', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).parent().find('.select__dropdown').toggleClass('active');
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
var swiper = new Swiper('.reviews .swiper', {
  slidesPerView: 1.6,
  spaceBetween: 20,
  // autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  // },
  pagination: {
    el: '.reviews .swiper-pagination'
  },
  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev'
  }
});