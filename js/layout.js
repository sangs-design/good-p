var header = document.querySelector('#header');
var gnb_footer = document.querySelector('#gnb_footer');

document.body.style.paddingTop = header.offsetHeight + 'px';
document.body.style.paddingBottom = gnb_footer.offsetHeight + 'px';

$('.section').addClass('transition');