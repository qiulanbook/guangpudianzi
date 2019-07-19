$(function(){
    // 回到顶部
    $('.toTop').click(function(){
        $('body,html').animate({scrollTop:0},1500)
    });
    // 新闻动态选项卡
    $('.news_b_r li').click(function(){
        $('.ool li').hide();
        $('.ool li').eq($(this).index()).show();
    })

})