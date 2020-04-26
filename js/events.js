$(function() {

    $('main')
    .css('margin', '20px auto 0 auto')
    .css('width', '960px');

    $('button')
    .css('width', '150px')
    .css('height', '30px')
    .css('margin', '10px 0')
    .css('text-align', 'left');

    $('#clickMe').click(function() {
        window.alert('AN ALERT USING .click()!');
    });

    $('#bindMe').bind('click', function() {
        window.alert('AN ALERT USING .bind()!');
    });

    $('#onMe').on('click', function() {
        window.alert('AN ALERT USING .on()!');
    });

    $('.btn19')
    .css('border', '2px solid black')
    .css('width', '150px');
    
    let btn19 = document.getElementsByClassName('btn19');
    $(btn19).on('click', function() {
        window.alert('AN ALERT USING A SINGLE EVENT HANDLER');
    });

    $('#q20')
    .css('width', '400px')
    .css('height', '400px')
    .css('border', '1px solid black')
    .css('display', 'flex')
    .css('justify-content', 'center');

    $('#q20 h2')
    .css('margin', 'auto')
    .css('text-align', 'center');

    $('#q20').on({
        mouseenter: function() {
            window.alert("Hovered over the div!");
        },
        mouseleave: function() {
            window.alert("The mouse left the div!");
        },
        click: function() {
            window.alert("You clicked on the div!");
        }
    });

    $('#q20').on({
        mouseenter: function() {
            $('.span').remove();
            $('#q20').before('<span>Hovered over the div!</span>')
            $('span').addClass('span')
            .css('font-size', '2em')
            .css('color', 'blue');
        },
        mouseleave: function() {
            $('.span').remove();
            $('#q20').before('<span>The mouse left the div!</span>');
            $('span').addClass('span')
            .css('font-size', '2em')
            .css('color', 'blue');
        },
        click: function() {
            $('.span').remove();
            $('#q20').before('<span>You clicked on the div!</span>');
            $('span').addClass('span')
            .css('font-size', '2em')
            .css('color', 'blue');
        }
    });

    $('a').on('click', function(e){
        e.preventDefault();
        $('a').css('color', 'red');
        window.alert('Triggered event by: ' + event.target.nodeName + " element.");
    });

    $(window).resize(function() {
        $('#pgHeight').text('Height of browser: ' + $(window).height() + ' pixels');
        $('#pgWidth').text('Width of browser: ' + $(window).width() + ' pixels');
    });

    $('input').css('width', '300px').css('margin', '5px 0');

    $('#inputFocus').focusin(function(){
        $('#inputFocus').css('background-color', 'lightgray');
    });

    $('#inputFocus').focusout(function(){
        $('#inputFocus').css('background-color', 'white');
    });


    let name = document.getElementById('name');
    let email = document.getElementById('email');
    $('form').css('margin-top', '50px');

    $('#submit').on('click', function(e) {
        e.preventDefault();
        if (name.value === '' && email.value === '') {
            window.alert('You must complete both fields.')
            $('#name').css('border', '1px solid red');
            $('#email').css('border', '1px solid red');
        } else if (name.value === '' && email.value !== '') {
            window.alert('You must type in your name.');
            $('#name').css('border', '1px solid red');
            $('#email').css('border', '1px solid black');
        } else if (name.value !== '' && email.value === '') {
            window.alert('You must type in your name.');
            $('#name').css('border', '1px solid black');
            $('#email').css('border', '1px solid red');
        } else if (name.value !== '' && email.value !== '') {
            $('#name').css('border', '1px solid green');
            $('#email').css('border', '1px solid green');
        } else {
            window.alert('An error has occurred.');
        };
    });












});