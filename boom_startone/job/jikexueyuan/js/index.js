var show= function(){
	$(this).css("display","block");
};
var hidden= function(){
	$(this).css("display","none");
};
var userShow = function(){
	$("#user-con-0").css("display","block");	
	$("#333-1").css("display","none");
	$("#333-2").css("display","none");
	$("#333-3").css("display","none");
	$("#333-4").css("display","none");
	$("#333-5").css("display","none");
	$("#333-6").css("display","none");
	$("#333-7").css("display","none");
	$("#333-8").css("display","none");
};
var userHidden = function(){
	$("#user-con-0").css("display","none");	
	$("#333-1").css("display","block");
	$("#333-2").css("display","block");
	$("#333-3").css("display","block");
	$("#333-4").css("display","block");
	$("#333-5").css("display","block");
	$("#333-6").css("display","block");
	$("#333-7").css("display","block");
	$("#333-8").css("display","block");
};
var borderShow = function(){
	$(this).attr("class","coco-border");
};
var borderHidden = function(){
	
	$(this).attr("class","coco-li");
};
var c1s = function (){$("#user-con-1").css("display","block");}
var c1h = function (){$("#user-con-1").css("display","none");}
var c2s = function (){$("#user-con-2").css("display","block");}
var c2h = function (){$("#user-con-2").css("display","none");}
var c3s = function (){$("#user-con-3").css("display","block");}
var c3h = function (){$("#user-con-3").css("display","none");}
var c4s = function (){$("#user-con-4").css("display","block");}
var c4h = function (){$("#user-con-4").css("display","none");}
$("#coco-1").hover(function(){c1s();c2h();c3h();c4h();})
$("#coco-2").hover(function(){c2s();c1h();c3h();c4h();})
$("#coco-3").hover(function(){c3s();c2h();c1h();c4h();})
$("#coco-4").hover(function(){c4s();c2h();c3h();c1h();})
$("#333-1").hover(function(){userShow();c1s();c2h();c3h();c4h();})
$("#333-2").hover(function(){userShow();c2s();c1h();c3h();c4h();})
$("#333-3").hover(function(){userShow();c3s();c2h();c1h();c4h();})
$("#333-4").hover(function(){userShow();c4s();c2h();c3h();c1h();})
$(".top-page-ueser-img-333").mouseleave(function(){userHidden()})




var l1s = function (){$("#lesson-1").css("display","block");}
var l1h = function (){$("#lesson-1").css("display","none");}
var l2s = function (){$("#lesson-2").css("display","block");}
var l2h = function (){$("#lesson-2").css("display","none");}
var l3s = function (){$("#lesson-3").css("display","block");}
var l3h = function (){$("#lesson-3").css("display","none");}
var l4s = function (){$("#lesson-4").css("display","block");}
var l4h = function (){$("#lesson-4").css("display","none");}
var l5s = function (){$("#lesson-5").css("display","block");}
var l5h = function (){$("#lesson-5").css("display","none");}
var l6s = function (){$("#lesson-6").css("display","block");}
var l6h = function (){$("#lesson-6").css("display","none");}
$("#lesson-top-1").hover(function(){l1s();l2h();l3h();l4h();l5h();l6h();});
$("#lesson-top-2").hover(function(){l2s();l1h();l3h();l4h();l5h();l6h();});
$("#lesson-top-3").hover(function(){l3s();l2h();l1h();l4h();l5h();l6h();});
$("#lesson-top-4").hover(function(){l4s();l2h();l3h();l1h();l5h();l6h();});
$("#lesson-top-5").hover(function(){l5s();l2h();l3h();l4h();l1h();l6h();});
$("#lesson-top-6").hover(function(){l6s();l2h();l3h();l4h();l5h();l1h();});


$(".job-div").hover(function(){
	$(this).attr("class","job-div-hover");
	$(".job-div-hover").find(".job-btn").attr("class","job-btn-hover");
},function(){
	$(this).attr("class","job-div");
	$(".job-div").find(".job-btn-hover").attr("class","job-btn");
})
$("#nav-box-2").hover(function(){
	$("#nav-box-4-con").css("display","block");
},function(){
	$("#nav-box-4-con").css("display","none");
})
//图片轮播
  var mySwiper = new Swiper('.swiper-container',{
    loop: true,
	autoplay: 3000,
	grabCursor : true,
  });