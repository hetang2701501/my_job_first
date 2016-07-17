jQuery(document).ready(function($) {

	jQuery.getJSON("select.php", function(json) {
		var mynews = json;

		for (i = 0; i < mynews.length; i++) {
			//			    var x = $("#table").insertRow()  这行代码不起作用
			//				var a = x.insertCell();
			//				var b = x.insertCell();
			//				var c = x.insertCell();
			//				var d = x.insertCell();
			//				a.innerHTML = mynews[i].newsid;
			//				b.innerHTML = mynews[i].newstitle;
			//				c.innerHTML = mynews[i].newscon;
			//				d.innerHTML = mynews[i].time;
			$(".table").append(
				"<tr>" + "<td>" + mynews[i].newsid + "</td>" + "<td>" + mynews[i].newstitle + "</td>" + "<td>" + mynews[i].newscon + "</td>" + "<td>" + mynews[i].time + "</td>" + "<td><a href='###' class='delete' id='" + mynews[i].newsid + "'>删除</a></td>" + "</tr>"
			);
		}
           $('.delete').click(function(){
	     	var newsid = $(this).attr("id");
	     	$.post("delete.php",{"abb":newsid},function(){
	     		alert("删除成功");
	     	});
	     });
	});
	
	
	    
		


});


        