$(window).on( "load", init);

function init(){

    var height = $(".welcome").css("top");  // for paralax
    var count = false; // menu switch
    $('.menu-btn').on('click', function(){
        count = !count;
        if(count){
            $('.drop-nav-menu').slideDown(100);   
        } else{
            $('.drop-nav-menu').slideUp(100);
        }
    });
    // hide menu
    $(document).on('click', function(e){
        let target = e.target;
        let parentEl = target.parentElement.className;
        let gamburger = false;
        let dropNav = false;
        if (parentEl && parentEl=="menu-btn"){
            gamburger = true; // hide drop-menu
        }
        if (parentEl && parentEl=="drop-nav-menu") {
            dropNav = true;
        }
            
        if (target.className != "menu-btn" &&
            gamburger == false &&
            target.className != "drop-nav-menu" &&
            dropNav == false &&
            count ){
            count = !count;
            $('.drop-nav-menu').slideUp(100);
        }
    });
    // resize window
    $(window).resize(function() {
        var widthDisp = $(window).width()+16;
        if ( widthDisp >= 768 ){
             $('.drop-nav-menu').slideUp(20);
             count = false;
        }
    });
    // button scrollup
	$(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('.button-arrow').on('click', () => {
    	$("html, body").animate({ scrollTop: $(window).height() }, 600);
        return false;
    });

    /*
    *	init slick slider
    */
    $('.slider-wrapper').slick({
    	arrows: true,
    	dots: false,
    	adaptiveHeight: false,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	speed: 500,
    	easing: 'linear',
    	infinite: true,
    	initialSlide: 0,
    	autoplay: false,
    	autoplaySpeed: 5000,
    	pauseOnHover: true,
    	pauseOnFocus: true,
    	pauseOnDotsHover: true,
    	draggable: true,
    	swipe: true,
    	touchTreshold: 5, /* длина свайпа = 1/5 экрана на мобиле*/
    	touchMove: true, /* можно передвигать слайд пальцем? */
    	waitForAnimate: false, /*ждать конца анимации при переключении? */
    	centerMode: false, /*установить активный слайд в центре*/
    	variableWidth: false, /*убирает свободное место между слайдами*/
    	rows: 1, /*количество рядов*/
    	slidesPerRow:1, /*кол-во слайдов с указанным кол-ом рядов*/
    	vertical: false, /*вертикальный слайдер(надо убрать флексы)*/
    	verticalSwiping: false, /*вертикальный свайп*/
    	fade: false,/*плавное появление слайда, без перелистывания*/
    	// asNavFor: '.slider2', /*связать с классом другого слайдера*/
    	// responsive:[ /*адаптивность по размеру окна*/
    	// 	{
    	// 		breakpoint: 768,
    	// 		settings: {
    	// 			slidesToShow: 2,
    	// 		}
    	// 	}
    	// ]
    	// appendArrows: $('.arrowsnew'), /*перенести стрелки в блок*/
    });
}