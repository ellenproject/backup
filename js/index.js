$(function(){
    //laserTitleList slick
    $('.laserTitleList').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        vertical: true,
        focusOnSelect: true,
        verticalSwiping: true,
        asNavFor: $('.laserList'),
        prevArrow: $('.laser .arrowPrev'),
        nextArrow: $('.laser .arrowNext'),
    });
    $('.laserTitleList_m').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        asNavFor: $('.laserList'),
        prevArrow: $('.laser .arrowPrev'),
        nextArrow: $('.laser .arrowNext'),
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 421,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '25%',
                }
            }
        ]
    });
    $('.laserList').slick({
        arrows: true,
        autoplay: true, 
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        fade: true,
        infinite: true, 
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: $('.laserTitleList, .laserTitleList_m'),
        prevArrow: $('.laser .arrowPrev'),
        nextArrow: $('.laser .arrowNext'),
    });

    //cataractTitleItem slick
    $('.cataractTitleList').slick({
        autoplay: true,
        autoplaySpeed: 5000, 
        cssEase: 'ease-in-out',
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        focusOnSelect: true,
        verticalSwiping: true,
        asNavFor: $('.cataractList'),
        prevArrow: $('.cataract .arrowPrev'),
        nextArrow: $('.cataract .arrowNext'),
    });
    $('.cataractList').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: $('.cataractTitleList'),
        prevArrow: $('.cataract .arrowPrev'),
        nextArrow: $('.cataract .arrowNext'),
    });
    $('.orthokList').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.orthok .arrowPrev'),
        nextArrow: $('.orthok .arrowNext'),
        responsive:[
            {
                breakpoint: 1081,
                settings: {
                    slidesToShow: 4
                },
                breakpoint: 881,
                settings: {
                    slidesToShow: 3
                },
                breakpoint: 641,
                settings: {
                    slidesToShow: 2
                },
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                },
            }
        ]
    });
    $('.proImgList').slick({
        infinite: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        fade: true, 
        dots: false, 
        arrows: false, 
        autoplay: true, 
        cssEase: 'ease-in-out',
        asNavFor: '.eyescareList'
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.eyescareClassList li').removeClass('current');
        $('.eyescareClassList li').eq(nextSlide).addClass('current');
        //for svg line
        let hasCurrent = $('.eyescareClassList li.current').data('id');
        $('#proLineBox').removeAttr('class');
        $('#proLineBox').addClass('item_'+hasCurrent);
    });
    $('.eyescareClassList li').eq(0).addClass('current');
    $('#proLineBox').addClass('item_0');
    $('.eyescareClassList li').click(function(){
        $('.proImgList').slick('slickGoTo', $(this).data('id'));
        //for svg line
        var this_id = $(this).data('id');
        $('#proLineBox').removeAttr('class');
        $('#proLineBox').addClass('item_'+this_id);
    });
    $('.eyescare .left .eyescareList').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false, 
        arrows: false, 
        autoplay: true, 
        cssEase: 'ease-in-out',
        asNavFor: '.proImgList'
    });
    $('.eyescare .right .eyescareList').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        fade: true,
        dots: false, 
        arrows: false, 
        autoplay: true,
        cssEase: 'ease-in-out',
        asNavFor: '.proImgList, .eyescareClassList'
    });
    $('.eyescareClassList').slick({
        infinite: false, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        draggable: false, 
        focusOnSelect: true, 
        arrows: false, 
        autoplay: false, 
        asNavFor: '.proImgList, .eyescare .right .eyescareList', 
        responsive: [
            {
                breakpoint: 3841, 
                settings: 'unslick'
            },
            {
                breakpoint: 1181,
                settings: {
                    infinite: true, 
                    slidesToShow: 5, 
                    slidesToScroll: 1,
                    draggable: true, 
                    focusOnSelect: true, 
                    arrows: true,
                    prevArrow: '<button class="slick-prev slick-arrow"><i class="bi bi-arrow-left-circle"></i></button>'
                }
            },
            {
                breakpoint: 481,
                settings: {
                    infinite: true, 
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    draggable: true, 
                    focusOnSelect: true, 
                    arrows: true,
                    prevArrow: '<button class="slick-prev slick-arrow"><i class="bi bi-arrow-left-circle"></i></button>'
                }
            }
        ]
    });
    $('.experienceList').slick({
        infinite: true, 
        slidesToShow: 4, 
        slidesToScroll: 1, 
        dots: true,
        appendDots: $('.experience .appendDots'),
        arrows: true, 
        prevArrow: $('.experience .arrowPrev'),
        nextArrow: $('.experience .arrowNext'),
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'ease-in-out', 
        responsive: [
            {
                breakpoint: 1181,
                settings: {
                    slidesToShow: 3, 
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1, 
                }
            }
        ]
    });
    
    $(window).scroll(function(){
        if($(window).scrollTop() > ($('.nav').height())){
            $('.nav, .m_menu').addClass('bgMode');
        }else{
            $('.nav, .m_menu').removeClass('bgMode');
        }

        // if($(this).scrollTop() > 400){
        //     $('.sidemenuBox').addClass('active');
        // }else{
        //     $('.sidemenuBox').removeClass('active');
        // }

        if($(window).scrollTop() > ($('.laser').offset().top) / 1.5 && ($('footer').offset().top - $(window).scrollTop()) > $('footer').innerHeight() * 0.5){
            $('.sidemenuBox').addClass('active');
        }else{
            $('.sidemenuBox').removeClass('active');
        }
    })

    //nav desk
    $('.nav .dropDown').on('mouseenter', function(){
        $(this).find('.submenuBox').addClass('current');
    }).mouseleave(function(){
        $(this).find('.submenuBox').removeClass('current');
    });

    //nav mobile
    $('.m_menu').find('a.hamburger').on('click', function(){
        if(!$(this).parents('.m_menu').hasClass('active')){
            $(this).parents('.m_menu').addClass('active');
            $(this).addClass('show');
            $('.m_menu').find('.mask').fadeIn(100);
            $('.m_menu').find('.hideBox').fadeIn(100);
            $('body').css('overlfow', 'hidden');
            //點空白處收起menu
            $('.m_menu').find('.mask').on('click', function(){
                $('.m_menu').removeClass('active');
                $('.m_menu').find('.hideBox').fadeOut();
                $('.m_menu').find('.mask').fadeOut();
                $('.m_menu').find('a.hamburger').removeClass('show');
                $('body').css('overflow', 'auto');
            });
        }else{
            $(this).parents('.m_menu').removeClass('active');
            $(this).removeClass('show');
            $('.m_menu').find('.mask').fadeOut();
            $('.m_menu').find('.hideBox').fadeOut();
            $('body').css('overflow', 'auto');
        }//end if hasClass
        return false;
    });

    //手機版submenuBox收合
    $('.m_menu .dropDown>span>a').on('click', function(e){
        if($(this).parent().siblings().find('li').length > 0){
			e.preventDefault();
			$(this).parent().siblings().slideToggle(200);
			return false;
        }
    })

    //footer收合
    $('.footerMenu li').each(function(){
        if($(this).hasClass('hasLink')){
            $(this).find('span').children('a').removeAttr('href');
            $(this).find('span').children('a').css('cursor', 'default');
        }
    });
    $('.footerMenu li.hasLink span').on('click', function(){
        $(this).parent('li').toggleClass('current');
        $(this).siblings('.submenu').toggleClass('show');
    })

    //sidemenu錨點菜單
    goAnimation();
    function goAnimation(){
        //init controller
        var controller = new ScrollMagic.Controller();

        //build scenes laser
        var scene = new ScrollMagic.Scene({
            triggerElement: ".laser",
            duration: $('.laser').innerHeight(),
        })
        .on("enter", function(e){
            $('.sidemenuBox li#laser').addClass('current')
        })
        .on("leave", function(e){
            $('.sidemenuBox li#laser').removeClass('current')
        })
        .addTo(controller);

        //build scenes cataract
        var scene = new ScrollMagic.Scene({
            triggerElement: ".cataract",
            duration: $('.cataract').innerHeight(),
        })
        .on("enter", function(e){
            $('.sidemenuBox li#cataract').addClass('current')
        })
        .on("leave", function(e){
            $('.sidemenuBox li#cataract').removeClass('current')
        })
        .addTo(controller);

        //build scenes orthok
        var scene = new ScrollMagic.Scene({
            triggerElement: ".orthok",
            duration: $('.orthok').innerHeight(),
        })
        .on("enter", function(e){
            $('.sidemenuBox li#orthok').addClass('current')
        })
        .on("leave", function(e){
            $('.sidemenuBox li#orthok').removeClass('current')
        })
        .addTo(controller);

        //build scenes eyescare
        var scene = new ScrollMagic.Scene({
            triggerElement: ".eyescare",
            duration: $('.eyescare').innerHeight(),
        })
        .on("enter", function(e){
            $('.sidemenuBox li#eyescare').addClass('current')
        })
        .on("leave", function(e){
            $('.sidemenuBox li#eyescare').removeClass('current')
        })
        .addTo(controller);

        //build scenes experience
        var scene = new ScrollMagic.Scene({
            triggerElement: ".experience",
            duration: $('.experience').innerHeight(),
        })
        .on("enter", function(e){
            $('.sidemenuBox li#experience').addClass('current')
            $('.sidemenuBox li#experience').addClass('white')
        })
        .on("leave", function(e){
            $('.sidemenuBox li#experience').removeClass('current')
            $('.sidemenuBox li#experience').removeClass('white')
        })
        .addTo(controller);
    }
})

