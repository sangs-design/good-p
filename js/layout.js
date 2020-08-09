new fullpage('#fullpage', {
    licenseKey: '0EA38F38-7D9D4210-8AFFEEAD-29BEAE4D',
    fadingEffect: true,
    scrollOverflow: true,
    scrollOverflowReset: true,
    paddingTop: '58px',
    paddingBottom: '54px',
    touchSensitivity: 15,
    bigSectionsDestination: 'top',
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
        $('.section').addClass('transition');
    }
});