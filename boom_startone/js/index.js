jQuery(document).ready(function($) {
			//点击导航栏事件
			
			//	$(".nav_my_1").click(function(){
			//		$(".my_con_1").removeClass("hidden");
			//	})
			// 
			
				$(".nav_my_1").click(function(){
					$(".my_con").addClass("hidden");
					$(".my_con_1").removeClass("hidden");
				});
				$(".nav_my_2").click(function(){
					$(".my_con").addClass("hidden");
					$(".my_con_2").removeClass("hidden");
				});
				$(".nav_my_3").click(function(){
					$(".my_con").addClass("hidden");
					$(".my_con_3").removeClass("hidden");
				});
				$(".nav_my_4").click(function(){
					$(".my_con").addClass("hidden");
					$(".my_con_4").removeClass("hidden");
				});
				//背景图片和bod一样高!!!!!!已设置fixed 解决
				
				
})