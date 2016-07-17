$(document.r).ready(function(){
	$(window).on("load",function(){
		imgLocation();
		var dataImg = {"data":[{"src":"1.jpg"},{"src" :"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},]};
		
		window.onscroll=function(){
			if(scrollside()){
				$.each(dataImg.data,function(index,value){
				  var box = $("<div>").addClass("box").appendTo($("#containaer"));
				  var content = $("<div>").addClass("content").appendTo(box);
				   $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
				    
			    });
			}; imgLocation();
		};
	});
});

function scrollside(){
	var box = $(".box")
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var docmentHeigth = $(document).width();
	var scrollHeight = $(window).scrollTop();
	return (lastboxHeight<scrollHeight+docmentHeigth)?true:false;
};


function imgLocation(){
	var box = $(".box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width()/boxWidth);
	var boxArr = [];
	box.each(function(index,value){
//		console.log(index,value);
    var boxHeight = box.eq(index).height();
    if(index<num){
    	boxArr[index] = boxHeight
    	
    }else{
    	var minboxHeight = Math.min.apply(null,boxArr);
//  	console.log(minboxHeight);
        var  minboxIdex = $.inArray(minboxHeight,boxArr);
        $(value).css({
        	"position":"absolute",
        	"top":minboxHeight,
        	"left":box.eq(minboxIdex).position().left
        });
        boxArr[minboxIdex]+=box.eq(index).height();
        
        
    }
	});
}
