/**
 * Created by itcast.
 */
$(function(){
    // 导航栏样式
    $(".navbar-nav > li").on('click',function(){
        $(this).addClass('active').siblings("li").removeClass('active');
        $(".self").removeClass('active')
    })

    //初始化提示框
    $('[data-toggle="tooltip"]').tooltip();
    /*获取当前所有item*/
    var items=$(".carousel-inner .item");
    /*监听屏幕的大小改变*/
    $(window).on("resize",function(){
        /*1.获取当前屏幕的宽度*/
        var width=$(window).width();
        /*2.判断屏幕的宽度*/
        if(width>=768){/*说明非移动端*/
            /*为每一个item添加子元素--遍历*/
            $(items).each(function(index,value){
                var item=$(this);
                /*当前自定义属性中 存储的图片路径*/
                var imgSrc=item.data("largeImage");
                //console.log(imgSrc);
                /*添加非移动端的子元素*/
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("background-image","url('"+imgSrc+"')"));
            });
        }
        else{
            $(items).each(function(index,value){
                var item=$(this);
                var imgSrc=item.data("smallImage");
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>');
            });
        }
    }).trigger("resize");

    var startX,endX;
    var listBox = document.querySelector('.carousel-inner');
    //获取当前轮播图对象
    var carousel = $('.carousel');

    listBox.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].clientX;
    });
    listBox.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;
        if(endX > startX) {
            //上一张
            carousel.carousel('prev');
        } else if (endX < startX) {
            //下一张
            carousel.carousel('next')
        }
    });

    //设置产品信息导航栏宽度
    var navbox = $('.wjs_product .nav-tabs');
    var lis = navbox.children('li');
    var listwidh = 0;
    //获取导航栏中所有的li的宽度
    lis.each(function (index,value) {
        var liWidth = $(this).innerWidth();
        listwidh += liWidth;
    })
    //console.log(listwidh);
    navbox.css('width',listwidh+'px');

    //使用iscroll实现手指滑动
    var myScroll = new IScroll('.tabs_parent',{
        scrollX:true,
        scrollY:false
    });
});