$('#daegu path, #location li').click(function(){
    $(this).addClass("on").siblings().removeClass('on');
});