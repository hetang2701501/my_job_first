jQuery(document).ready(function($) {
	$('.my-slider').unslider({
		autoplay: true,keys: false,arrows: false,nav: false,infinite: true
	});
	$('.my-hot').unslider({
		animation: 'vertical', autoplay: true, infinite: true,nav: false,keys: false,arrows: false
	});
   jQuery.getJSON("select.php", function(json) {
		var mynews = json;
		for (i = 0; i < mynews.length; i++) {
			$(".page-1").append("<div class='news-cont'><div class='news'><img src='"+mynews[i].newsimg+"' /><div class='newstitle'><span class='newstitle-span'>"+mynews[i].newstitle+"</span></div><div style='height: 20px;'><b style='float: left;'>"+mynews[i].time+"</b><b style='float:right;background: #e02f2f;border: 1px solid #e02f2f;border-radius: 2px; color: #fff;'>置顶</b></div></div></div>");
		}
           
	});
	
	
   
   
   
});
