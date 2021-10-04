$('body').on('click', '.select__current', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).parent().find('.select__dropdown').toggleClass('active');
});

$(document).on("click", function(e) {
    if (jQuery(e.target).closest('.select').length === 0) {
        $('.select__current').removeClass('active');
        $('.select__dropdown').removeClass('active');
    }
});

$(document).on('keyup', function(e) {
    if (e.key == "Escape") {
        $('.select__current').removeClass('active');
        $('.select__dropdown').removeClass('active');
    }
});