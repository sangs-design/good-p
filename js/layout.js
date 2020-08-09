new fullpage('#fullpage', {
    licenseKey: '0EA38F38-7D9D4210-8AFFEEAD-29BEAE4D',
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    fadingEffect: true,
    scrollOverflow: true,
    scrollOverflowReset: true,
    touchSensitivity: 0,
    paddingTop: '58px',
    paddingBottom: '54px',
    normalScrollElements: '#sec1, #sec2',
    onLeave: function (origin, destination, direction) {
        var loadedSection = this;
        if (destination.index == 2) {
            logo('lays');
        }else if (destination.index == 3) {
            logo('lace');
        }else if(destination.index == 1 && direction == 'up'){
            logo('lace');
        }
        
    },afterRender: function(){
        var pluginContainer = this;
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
        $('.section').addClass('transition');
    }
});