$(function(){
    
    var pagePositon = 0,
        sectionsSeclector = 'section',
        $scrollItems = $(sectionsSeclector),
        offsetTolorence = 30,
        pageMaxPosition = $scrollItems.length - 1;
    
    //Map the sections:
    $scrollItems.each(function(index,ele) { $(ele).attr("debog",index).data("pos",index); });

    // Bind to scroll
    $(window).bind('scroll',upPos);
    
    //Move on click:
    $('.direct span').click(function(e){
        if ($(this).hasClass('next') && pagePositon+1 <= pageMaxPosition) {
            pagePositon++;
            $('html, body').stop().animate({ 
                  scrollTop: $scrollItems.eq(pagePositon).offset().top
            }, 300);
        }
        if ($(this).hasClass('prev') && pagePositon-1 >= 0) {
            pagePositon--;
            $('html, body').stop().animate({ 
                  scrollTop: $scrollItems.eq(pagePositon).offset().top
              }, 300);
            return false;
        }
    });
    
    //Update position func:
    function upPos(){
       var fromTop = $(this).scrollTop();
       var $cur = null;
        $scrollItems.each(function(index,ele){
            if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
        });
       if ($cur != null && pagePositon != $cur.data('pos')) {
           pagePositon = $cur.data('pos');
       }                   
    }

     //fade up transition to elements
     var count=-5;
    $(window).scroll(function() {
        //aboutme text - transition
        var hT = $('#aboutme-text').offset().top,
            hH = $('#aboutme-text').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && count==-5) {
            $('#aboutme-text').transition('fade up','1s');
            count=-4;
        }
        //aboutme large screen - transition
        if ($(this).scrollTop() > ($('#aboutme-large-para').offset().top+($('#aboutme-large-para').outerHeight()/2)-wH) && count==-4) {
            $('#aboutme-large-img').transition('fade right','1s');
            $('#aboutme-large-para').transition('fade up','2s');
            $('.aboutme-btn').transition('fade');
            setTimeout(function() {
                //your code to be executed after 8 second
                $('.aboutme-btn.one').transition('fade up','1s');

                setTimeout(function() {
                     $('.aboutme-btn.two').transition('fade up','1s');
                }, 1000);

              }, 8000);
            count=-3;
        }

        // aboutme mobile screen - transition
        if ($(this).scrollTop() > ($('#aboutme-mob-para').offset().top+($('#aboutme-mob-para').outerHeight()/2)-wH) && count==-3){
            $('#aboutme-mob-img').transition('fade','2s');
            $('#aboutme-mob-para').transition('fade up','2s');
           
            count=-2;
        }
        // here's what i've done text - transition
        if ($(this).scrollTop() > ($('#done-text').offset().top+$('#done-text').outerHeight()-wH) && count==-2){
            $('#done-text').transition('fade up','1s');
            count=0;
        }

        // vonnue large screen - transition
        if ($(this).scrollTop() > ($('#vonnue-large-para').offset().top+($('#vonnue-large-para').outerHeight()/2)-wH) && count==0) {
            $('#vonnue-large-img').transition('fade right','1s');
            $('#vonnue-large-para').transition('fade up','2s');
            count=1;
        }
        // vonnue mobile screen - transition
        if ($(this).scrollTop() > ($('#vonnue-mob-img').offset().top+($('#vonnue-mob-img').outerHeight()/2)-wH) && count==1) {
            $('#vonnue-mob-img').transition('fade up','1s');
            $('#vonnue-mob-para').transition('fade up','2s');
            count=2;
        }

        // aicte large screen - transition
        if ($(this).scrollTop() > ($('#aicte-large-para').offset().top+($('#aicte-large-para').outerHeight()/2)-wH) && count==2) {
            $('#aicte-large-img').transition('fade right','1s');
            $('#aicte-large-para').transition('fade up','2s');
            count=3;
        }
        // aicte mobile screen - transition
        if ($(this).scrollTop() > ($('#aicte-mob-img').offset().top+($('#aicte-mob-img').outerHeight()/2)-wH) && count==3) {
            $('#aicte-mob-img').transition('fade up','1s');
            $('#aicte-mob-para').transition('fade up','2s');
            count=4;
        }

        // rj large screen - transition
        if ($(this).scrollTop() > ($('#rj-large-para').offset().top+($('#rj-large-para').outerHeight()/2)-wH) && count==4){
            $('#rj-large-img').transition('fade right','1s');
            $('#rj-large-para').transition('fade up','2s'); 
            count=5;
        }
        // rj mobile screen - transition
        if ($(this).scrollTop() > ($('#rj-mob-img').offset().top+($('#rj-mob-img').outerHeight()/2)-wH) && count==5){
            $('#rj-mob-img').transition('fade up','1s');
            $('#rj-mob-para').transition('fade up','2s');
            count=6;
        }
        // calmove large screen -transition
        if ($(this).scrollTop() > ($('#calmove-large-para').offset().top+($('#calmove-large-para').outerHeight()/2)-wH) && count==6){
            $('#calmove-large-img').transition('fade left','1s');
            $('#calmove-large-para').transition('fade up','2s'); 
            count=7;
        }
        // calmove mobile screen -transition
        if ($(this).scrollTop() > ($('#calmove-mob-img').offset().top+($('#calmove-mob-img').outerHeight()/2)-wH) && count==7){
            $('#calmove-mob-img').transition('fade up','1s');
            $('#calmove-mob-para').transition('fade up','2s'); 
            count=8;
        }
        // sih large screen -transition
        if ($(this).scrollTop() > ($('#sih-large-para').offset().top+($('#sih-large-para').outerHeight()/2)-wH) && count==8){
            $('#sih-large-img').transition('fade left','1s');
            $('#sih-large-para').transition('fade up','2s'); 
            count=9;
        }
        // sih mobile screen -transition
        if ($(this).scrollTop() > ($('#sih-mob-img').offset().top+($('#sih-mob-img').outerHeight()/2)-wH) && count==9){
            $('#sih-mob-img').transition('fade up','1s');
            $('#sih-mob-para').transition('fade up','2s'); 
            count=10;
        }
        // techathlon large screen -transition
        if ($(this).scrollTop() > ($('#techathlon-large-para').offset().top+($('#techathlon-large-para').outerHeight()/2)-wH) && count==10){
            $('#techathlon-large-img').transition('fade left','1s');
            $('#techathlon-large-para').transition('fade up','2s'); 
            count=11;
        }
        // techathlon mobile screen -transition
        if ($(this).scrollTop() > ($('#techathlon-mob-img').offset().top+($('#techathlon-mob-img').outerHeight()/2)-wH) && count==12){
            $('#techathlon-mob-img').transition('fade up','1s');
            $('#techathlon-mob-para').transition('fade up','2s'); 
            count=13;
        }

     });

});

window.onload = function () {
    //transition- fade out all first
    $('body').addClass('loaded');
}

$(document).ready(function() {
    //aboutme
    $('#aboutme-text').transition('fade');
    $('#aboutme-large-para').transition('fade');
    $('#aboutme-large-img').transition('fade');
    $('#aboutme-mob-img').transition('fade');
    $('#aboutme-mob-para').transition('fade');
    //done
    $('#done-text').transition('fade');
    //vonnue
    $('#vonnue-large-para').transition('fade');
    $('#vonnue-large-img').transition('fade');
    $('#vonnue-mob-img').transition('fade');
    $('#vonnue-mob-para').transition('fade');
    //aicte
    $('#aicte-large-para').transition('fade');
    $('#aicte-large-img').transition('fade');
    $('#aicte-mob-img').transition('fade');
    $('#aicte-mob-para').transition('fade');
    //rj
    $('#rj-large-para').transition('fade');
    $('#rj-large-img').transition('fade');
    $('#rj-mob-img').transition('fade');
    $('#rj-mob-para').transition('fade');
    //calmove
    $('#calmove-large-para').transition('fade');
    $('#calmove-large-img').transition('fade');
    $('#calmove-mob-img').transition('fade');
    $('#calmove-mob-para').transition('fade');
    //sih
    $('#sih-large-para').transition('fade');
    $('#sih-large-img').transition('fade');
    $('#sih-mob-img').transition('fade');
    $('#sih-mob-para').transition('fade');
    //techathlon
    $('#techathlon-large-para').transition('fade');
    $('#techathlon-large-img').transition('fade');
    $('#techathlon-mob-img').transition('fade');
    $('#techathlon-mob-para').transition('fade'); 
})

 
