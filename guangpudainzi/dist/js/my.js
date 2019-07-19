window.onload=function(){
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay:true,
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项 
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },    
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      }) 

       // wiper2  
       var mySwiper = new Swiper ('.sw2', {
        autoplay:true,
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        slidesPerView : 4, //可视轮播图的个数
        spaceBetween : 20,
        slidesPerGroup : 1, 
        slideToClickedSlide: true,   
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.ss',
          prevEl: '.sa',
        }, 
      })  

      
      
     
    
}