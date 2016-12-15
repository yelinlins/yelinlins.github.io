(function($) {
	//刷新页面后如果DOM偏移大于200设置导航条样式
	if($(".navbar").offset().top >= 200) {
		$(".navbar")
			.css("background-color", "#000000")
			.css("opacity", "0.7")
	}
	//点击a标签之后实现页面滚动
	$(".basic").click(function () {
		$.scrollTo("#basic",500)
	})
	$(".exp").click(function () {
		$.scrollTo("#exp",500)
	})
	$(".ski").click(function () {
		$.scrollTo("#ski",500)
	})
	$(".acc").click(function () {
		$.scrollTo("#acc",500)
	})
	$(".con").click(function () {
		$.scrollTo("#con",500)
	})
	

	//窗口滚动时设置导航条
	$(window).scroll(function() {
		if($(window).scrollTop() >= 200) {
			$(".navbar")
				.css("transition", "0.5s")
				.css("background-color", "#000000")
				.css("opacity", "0.7")
		} else {
			$(".navbar")
				.css("background-color", "transparent")
		}

	})

	//设置鼠标进入和离开图片时的动画

	$(".express .col-lg-3").mouseleave(function() {
		$(".down").css("transition", "0.5s")
		$(".hover-text").css("transition", "0.5s")
	})

	//设置自我评价轮播
	for(var i = 0; i < $(".access p").length; i++) {
		$(".access p").eq(i).css("left", (i * 900) + "px")
	}
	//定义一个变量，记录当前显示的图片索引。
	var currentIndex = 0;

	//由于定时器触发的自动切换图片和手动点击小白点时切换图片执行的代码是相同的，所以把这段代码写在函数中，两个地方都可以调用
	function moveImage() {
		for(var i = 0; i < $(".access p").length; i++) {
			if(currentIndex == 0) {
				$(".access p").eq(i).css("transition", "0.5s ease-in-out")
			} else {
				$(".access p").eq(i).css("transition", "left 0.5s ease-in-out")
			}
			$(".access p").eq(i).css("left", (i - currentIndex) * 900 + "px")
		}
	}

	function changeImage() {

		//先把前一个白点变白
		$(".circle span").eq(currentIndex % 3).css("opacity", "1")
		currentIndex++;
		if(currentIndex >= 3) {
			currentIndex = 0;
		}

		//把当前白点透明

		$(".circle span").eq(currentIndex % 3).css("opacity", "0.5")
		moveImage();
		timer = setTimeout(changeImage, 4000);
	}

	var timer = setTimeout(changeImage, 4000);

	for(var i = 0; i < $(".circle span").length; i++) {

		$(".circle span").eq(i).mouseenter(function() {
				var _this = $(this)

				$(".circle span").eq(currentIndex % 3).css("opacity", "1")
				_this.css("opacity", "0.5")
				//把当前需要显示的图片索引设置为点击的索引
				currentIndex = _this.index()
				moveImage()
				clearTimeout(timer)
			})
			.mouseleave(function() {
				timer = setTimeout(changeImage, 4000);

			})
	}
	
	//大圆圈
  $(".icon-chevron-with-circle-down").click(function () {
   $('body,html').animate({ scrollTop:$(".banner").height()}, 800);
   console.log(111)
  })
  
  
})(jQuery)