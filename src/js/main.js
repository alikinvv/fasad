$('body').on('click', '.select__current.active', (e) => {
    $('.select__dropdown').removeClass('active');
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).parent().find('.select__dropdown').removeClass('active');
});

$('body').on('click', '.select__current:not(.active)', (e) => {
    $('.select__dropdown').removeClass('active');
    $('.select__current').removeClass('active');
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).parent().find('.select__dropdown').addClass('active');
});

$('body').on('click', '.select__dropdown div', (e) => {
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

$('body').on('click', '.location__close', () => {
    $('.location').slideUp(200);
});

$('body').on('focus', '.search input', () => {
    $('.search').addClass('focus');
});

$('body').on('blur', '.search input', () => {
    $('.search').removeClass('focus');
});

$('body').on('focus', '.form-group input, .form-group textarea', (e) => {
    $(e.currentTarget).parent().addClass('focus');
});

$('body').on('blur', '.form-group input, .form-group textarea', (e) => {
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
        disableOnInteraction: false,
    },
    pagination: {
        el: '.slider .swiper-pagination',
    },
    navigation: {
        nextEl: '.slider .swiper-button-next',
        prevEl: '.slider .swiper-button-prev',
    },
});

let zIndex = 2;
$('body').on('mouseenter', '.gallery__item', (e) => {
    $(e.currentTarget).css('z-index', zIndex);
    zIndex++;
});

var reviews = new Swiper('.reviews .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.reviews .swiper-pagination',
    },
    navigation: {
        nextEl: '.reviews .swiper-button-next',
        prevEl: '.reviews .swiper-button-prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 1.6,
        },
    },
});

var projectNav = new Swiper('.project__slider-nav', {
    spaceBetween: 10,
    slidesPerView: 3,
    slidesPerGroup: 3,
    watchSlidesProgress: true,
    pagination: {
        el: '.project .swiper-pagination',
    },
    navigation: {
        nextEl: '.project .swiper-button-next',
        prevEl: '.project .swiper-button-prev',
    },
});
var projectMain = new Swiper('.project__slider-main', {
    spaceBetween: 10,
    effect: 'fade',
    thumbs: {
        swiper: projectNav,
    },
});

$('body').on('click', '.type', (e) => {
    $(e.currentTarget).toggleClass('active');
});

$('body').on('blur', '.input input', (e) => {
    if ($(e.currentTarget).val() !== '') {
        $(e.currentTarget).addClass('fill');
    } else {
        $(e.currentTarget).removeClass('fill');
    }
});

$('body').on('click', '.item__cart', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).closest('.item__bottom').toggleClass('active');
});

for (let i = 0; i < $('.item').length; i++) {
    let $this = $('.item').eq(i);
    $this.find('.item__bottom').css('height', $this.find('.item__bottom').outerHeight());
}

$('body').on('click', '.counter__control.plus', (e) => {
    $(e.currentTarget)
        .parent()
        .find('input')
        .val(parseInt($(e.currentTarget).parent().find('input').val()) + 1);
});

$('body').on('click', '.counter__control.minus', (e) => {
    if ($(e.currentTarget).parent().find('input').val() > 1) {
        $(e.currentTarget)
            .parent()
            .find('input')
            .val(parseInt($(e.currentTarget).parent().find('input').val()) - 1);
    }
});

$('body').on('click', '.product__img .btn:not(.active)', (e) => {
    $(e.currentTarget)
        .removeClass('btn-outline')
        .addClass('active')
        .html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-arrow-down"></use></svg> Скрыть подробное описание');
    $('.product__text').slideToggle(200);
});

$('body').on('click', '.product__img .btn.active', (e) => {
    $(e.currentTarget)
        .addClass('btn-outline')
        .removeClass('active')
        .html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-list"></use></svg> Подробное описание');
    $('.product__text').slideToggle(200);
});

$('body').on('click', '.cart__close', (e) => {
    $(e.currentTarget)
        .closest('.cart__item')
        .slideUp(200, function () {
            $(this).remove();
        });

    if ($('.cart__item').length === 1) {
        $(`.cart__step`).removeClass('active');
        $(`.cart__step[data-step="0"]`).addClass('active');
        $('.cart__footer').fadeOut(100);
    }
});

$('body').on('click', '.cart__footer .btn', (e) => {
    let step = parseInt($(e.currentTarget).attr('data-step')) + 1;

    $(e.currentTarget).html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-delivery"></use></svg> Отправить заявку').attr('data-step', step);
    $(`.cart__step`).removeClass('active');
    $(`.cart__step[data-step="${step}"]`).addClass('active');
    $(`.progress__item[data-step="${step}"]`).addClass('active');

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
    let highestTitle = 0;

    for (let i = 0; i < $('.cert__title').length; i++) {
        if ($('.cert__title').eq(i).height() > highestTitle) {
            highestTitle = $('.cert__title').eq(i).height();
        }
    }

    $('.cert__title').height(highestTitle);

    for (let i = 0; i < $('.step').length; i++) {
        let $step = $('.step').eq(i);
        let stepHeight = 0;

        for (let j = 0; j < $step.find('.step__title').length; j++) {
            if ($step.find('.step__title').eq(j).height() > stepHeight) {
                stepHeight = $step.find('.step__title').eq(j).height();
            }
        }

        $step.find('.step__title').height(stepHeight);
    }

    for (let i = 0; i < $('.step').length; i++) {
        let $step = $('.step').eq(i);
        let stepHeight = 0;

        for (let j = 0; j < $step.find('.step__text').length; j++) {
            if ($step.find('.step__text').eq(j).height() > stepHeight) {
                stepHeight = $step.find('.step__text').eq(j).height();
            }
        }

        $step.find('.step__text').height(stepHeight);
    }
}

let masks = document.querySelectorAll('.phone-mask');

masks.forEach((el) => {
    IMask(el, { mask: '+{7} (000) 000 00 00' });
});

// modals

// show modal
$('body').on('click', '[data-modal]:not(.modal)', (e) => {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(`.modal[data-modal="${$(e.currentTarget).attr('data-modal')}"]`).addClass('active');

    if ($(e.currentTarget).attr('data-modal') === 'thanks') {
        setTimeout(() => {
            $('.modal.active').find('svg').addClass('animate');
        }, 100);
    }
});

// close modal events
let closeModal = () => {
    $('.backdrop').removeClass('active');
    $('.modal').removeClass('active');
    $('.modal').find('svg').removeClass('animate');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);

$('body').on('click', '.backdrop', (e) => {
    if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});

$('body').on('submit', 'form', (e) => {
    e.preventDefault();
});

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.header').toggleClass('active');
    $('html').toggleClass('overflow');
});

$('body').on('click', '.show-filter a', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.filter').slideToggle(200);
});

$('.count').counterUp();
