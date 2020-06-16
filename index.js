$(document).ready(function(){

    //DISABLED
    $('.disabled').prop('disabled', true);

    //DROPDOWN
    $('.dropdown-toggle').click(function(){
        $(this).next('.dropdown-menu').toggle();
    });

    $(document).click(function(event){
        var target = event.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('dropdown-toggle')){
            $('.dropdown-menu').hide();
        }
    })

    //BOUTON NAVBAR
    $('.navbar-toggler').click(function(){
        $('.collapse').toggle();
    });

    //MODAL AFFICHAGE
    $('#button-modal').click(function(){
        //$($(this).attr('data-target').show();
        $('#myModal').show();
    });

    //MODAL HIDE
    //With button
    $('.popin-dismiss').click(function(){
        $('#myModal').hide();
    });

    //With click outside
    $(window).click(function(event) { 
        if (event.target.id == ('myModal')) {
            $('#myModal').hide();
        }
    })

    //With Esc key
    $(window).keyup(function(event) {
        if (event.keyCode === 27) $('#myModal').hide();
      });

    //TABS
    $('.tab-link').click(function(){
        var tab_id = $(this).attr('data-target');

        $('.tab-link').removeClass('active');
        $('.tab-pane').removeClass('active');

        $(this).addClass('active');
        $(tab_id).addClass('active');
        $('.tab-content').css('padding', '10px');
        $('.tab-content').css('border', '5px solid #09F');
        $('.tab-content').css('background-color', '#FFF');
    });

    //TOOLTIPS
    $('.tooltip').hover(function(){
        if($(this).attr('data-placement') == 'right') {
            $(this).css({
            'position': 'relative',
            'left': '40px',
            'top': '60px',
            });
        }
    })
});
