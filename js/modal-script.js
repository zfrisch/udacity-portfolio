window.onload = function() {
			//when an article image is clicked 
			$("article img").on("click",function() {
				//clear the modal header and body for populating 
				$(".modal-header").html("<button type='button' class='close text-right' data-dismiss='modal'>&times;</button>");
				$(".modal-body").text("");
				//save the header text, picture, and link html from the article
				var $headerText = $(this).siblings("h3").text();
				var $headerPic = $(this).attr("src");
				var $linkSrc = $(this).siblings("p").html();
				
				$(".modal-header").append("<h4 class='modal-title'>" + $headerText + "</h4><br>" + " <img src='" + $headerPic + "' class='img-responsive'/>");
				$(".modal-body").append("<span class='text-center'>You can find more information at the following address<br>" + $linkSrc + "</span>");
				
			});
}