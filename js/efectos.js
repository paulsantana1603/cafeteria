$(document).ready(function () {

    //efecto menu
    $('.menu a').each(function (index, elemento) {
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top:'0'
        },2000 +(index*500))
    })

    if($(window).width()>800){
        $('header .texto').css({
            opacity:0,
            marginTop:0
        });
        $('header .texto').animate({
            opacity:1,
            marginTop:'-52px'
        },1500)
    } 

    //SCROLL ELEMENTOS MENU
    var acercaDe =$('#acerca-de').offset().top,
        menu =$('#platillos').offset().top,
        galeria =$('#galeria').offset().top,
        ubicacion =$('#ubicacion').offset().top;

        $('btn-acerca-de').on('click',function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: acercaDe -100
            },500)
        })
})
