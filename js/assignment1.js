
$(function() {

    $('section h2')
        .css('border', '1px solid black')
        .css('color', '#CC1C0D')
        .css('padding', '3px 20px')
        .css('border-radius', '0 5px')
        .css('background-color', '#DFE3E6');

    $('aside h2')
        .css('border', '1px solid black')
        .css('color', '#CC1C0D')
        .css('padding', '3px 20px')
        .css('border-radius', '0 5px')
        .css('background-color', '#DFE3E6');

    $('ul li a').addClass('navigation');

    $('.navigation')
        .css('border', '1px solid #929CA4')
        .css('color', '#CC1C0D')
        .css('padding', '3px 0 3px 20px')
        .css('background-color', '#DFE3E6');

    $('section p').removeClass('vprospect');
    $('section p').removeClass('vconvert');
    $('section p').removeClass('vretain');

    $('aside p:last-child').append('<br> Chevy Dealers Association');
    $('aside p:first').wrapInner('<q></q>');
});
