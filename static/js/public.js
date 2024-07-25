$(function(){
	var animateDH = $('.animationDH');
	var _ht = $(window).height();
	var breads = $('.aboutItems .abItem');
	var fixedTops = $('.publicNav')
	var animateTop = fixedTops.length>0?fixedTops.offset().top:0;
	if (animateDH.length > 0) {
        var scrollTop = $(window).scrollTop() + _ht;
        animateDH.each(function (i, o) {
            var animateTop = $(o).offset().top;
            if (scrollTop > animateTop) {
                $(o).addClass('current');
            } else {
                $(o).removeClass('current');
            }
        });
    }
	$(window).bind('scroll load resize', function () {
	   if ($(document).scrollTop() > $('.headers').height()) {
           $('.header').addClass('on')
       } else {
           $('.header').removeClass('on')
       }
       if ($(document).scrollTop() > $(window).height() / 2) {
           $('.scrollToTop').stop(true, true).fadeIn();
       } else {
           $('.scrollToTop').stop(true, true).fadeOut();
       }
       if (animateDH.length > 0) {
            var scrollTop = $(window).scrollTop() + _ht;
            animateDH.each(function (i, o) {
                var animateTop = $(o).offset().top;
                if (scrollTop > animateTop) {
                    $(o).addClass('current');
                } else {
                    $(o).removeClass('current');
                }
            });
        }
       if(fixedTops.length > 0){
        	fixedTops.each(function () {
	            scrollTop = $(window).scrollTop();
	            if (scrollTop >= animateTop) {
	                fixedTops.addClass("on");
	            } else {
	                fixedTops.removeClass("on");
	            }
	        });
        }
       if (breads.length > 0) {
            breads.each(function (i, o) {
                var scrollTop = $(window).scrollTop();
                var animateTop = $(o).offset().top - fixedTops.height();
                if (scrollTop >= animateTop - 100) {
                    index_ = i;
                    $('.publicNav dd').eq(index_).addClass('on').siblings().removeClass('on');
                }
            });
        }
        
    });
})
document.onreadystatechange = loadingChange;
window.onload = function(){
	/*点击回顶部*/
	$(".scrollToTop,.sxTops .ico").click(function(){
      	$('body,html').animate({ scrollTop: 0 }, 500);
    });
	/*手机导航切换*/
	$(".menus").bind("click", function() {
		$('.headFlxed').toggleClass("open");
		$('.menuNvs').toggleClass("active");
		if($('.activeSections ').length>0 && $('.activeSections').index() == 0){
			$('.headNav').toggleClass("active");
		}
		$('.navCotent').removeClass('on')
	});
	$(".sousuo").bind("click", function() {
		$(this).toggleClass('on')
		$('.menuNvs').removeClass("active");
		if($(this).hasClass('on')){
			$('.headFlxed').addClass("open");
			$('.menuNvs').addClass("active");
			if($('.activeSections').length>0 && $('.activeSections').index() == 0){
				$('.headNav').removeClass("active");
			}
			$('.navCotent').addClass('on')
		}else{
			$('.headFlxed').removeClass("open");
			$('.menuNvs').removeClass("active");
			if($('.activeSections').length>0 && $('.activeSections').index() == 0){
				$('.headNav').addClass("active");
			}
			$('.navCotent').removeClass('on')
		}
	});
	/*搜索点击*/
	$('.search .sc').on('click',function(){
		$('.searchRt').stop(true,true).fadeIn()
	})
	$('.closeSc').on('click',function(){
		$('.searchRt').stop(true,true).fadeOut()
	})
	$('.footerDL dd h6').click(function(){
		var that = $(this).parent()
		that.toggleClass('on').siblings().removeClass('on')
	})

}
function loadingChange() {
 	if (document.readyState === "complete") { 
         $('.preload').fadeOut(500);
 	}
 }
function openVideo(src){
	var htmls = '<div class="video-box">'+
				'<span class="video-close"><i class="iconfont">&#xe65a;</i></span>'+
				'<div id="video1">'+
				'<video controls="controls" autoplay src="'+src+'" id="fz-videoAct"></video>'+
				'</div>'+
				'</div>'
	$('body').append(htmls)
	$('.video-box').fadeIn()
	$('.video-close').click(function(){
		$('.video-box').remove()
	})
}
function openImg(src){
	var htmls = '<div class="video-box">'+
				'<span class="video-close"><i class="iconfont">&#xe68b;</i></span>'+
				'<div class="alertImgs flex flexat flexjt">'+
				'<img src="'+src+'"></img>'+
				'</div>'+
				'</div>'
	$('body').append(htmls)
	$('.video-box').fadeIn()
	$('.video-close').click(function(){
		$('.video-box').remove()
	})
}


















