	// $("*").on("load",function () {
		
	// })
	
		// 头部	
		
				// 显示时间
				setInterval(function () {
					var time = Date()
					$("#time").html(time.substr(16,8))
				},1000)
			
		
		
		// 导航栏
				// 绑定首页点击
				function syC() {
					$("#Home").on("click",function(){
							location.href = "/index.html";
						});
				}
				// 绑定归档点击
				function gdC() {
					$("#file").on("click",function(){
							location.href = "/file.html";
						});
				}
				// 绑定分类点击
				function flC() {
					$("#classification").on("click",function(){
							location.href = "/cate.html";
						});
				}
		// 左边
				// 缩小
				function suo () {
					if(document.documentElement.clientWidth <= 1554){
						$("#headPortrait").css("width" , "100px").css("height" , "100px").css("left","30%")
						$("#name").css("top","180px").css("left","40%").html("<h2>小四</h2>")
						$("#PerS").css("top","220px").css("left","35%").css("width" , "100px").html("<h6>积极、乐观、开朗、从容、健康、平和、美丽、帅气</h6>")
						if(document.documentElement.clientWidth <= 1000){
							$("#headPortrait").css("width" , "80px").css("height" , "80px").css("left","20%")
							$("#name").html("")
							$("#PerS").html("")
						}
					}else{
						$("#headPortrait").css("width" , "160px").css("height" , "160px").css("left","32px")
						$("#name").css("top","80px").css("left","240px").html("<h1>小四</h1>")
						$("#PerS").css("top","160px").css("left","240px").css("width" , "224px").html("<h4>积极、乐观、开朗、从容、健康、平和、美丽、帅气</h4>")
					}	
				}
			
			
				//绑定个性签名的移出移入
				function gqEL() {
					$("#PerS:first").mouseenter(function  (e) {
						var X = e.clientX + "px"
						var Y = e.clientY + "px"
						$("#PerS2").css("display","block").css("top",Y).css("left",X);
					}).mouseleave(function  () {
						$("#PerS2").css("display","none")
					});
				}
				
				// 清空任务栏颜色
				function clear () {
					$(".RWL").each(function  () {
						$(this).css("background-color","transparent")
					})
				}
				
				
				
				
				// 绑定任务栏的移出移入和点击
				function rwlELC() {
					var num = home;
					// 遍历任务栏
					$(".RWL").each(function  () {

						
						// 绑定移入
						$(this).mouseenter(function  () {
							$(this).css("background-color","aquamarine")
							// 绑定移出
						}).mouseleave(function  () {
							if(num != this){
								$(this).css("background-color","transparent")
							}
						}).click(function  () {
							clear();
							$(this).css("background-color","aquamarine")
							num = this
							var m = $(this).attr("id")
							document.documentElement.scrollTop = 1000
							var GC = {
								aboutMe:2300,
								boke:3600,
								home:0,
							}
							switch (m){
								case "home":
									document.documentElement.scrollTop = GC.home
									location.href = "/index.html";
									break;
								case "aboutMe":
									document.documentElement.scrollTop = GC.aboutMe
									break;
								case "boke":
									document.documentElement.scrollTop = GC.boke
									break;
								
							}
							return num;
						})
					})
					
				}


		// 内容
				// 窗口滚动时左边跟着动
				var CG = {
					aboutMe:1625,
					boke:3000,
					home:0
				}
				function gun () {
					var Y = document.documentElement.scrollTop
					if( Y < CG.aboutMe){
						clear();
						$("#home").css("background-color","aquamarine")
					}else if( Y >= CG.aboutMe && Y < CG.boke){
						clear();
						$("#aboutMe").css("background-color","aquamarine")
					}else{
						clear();
						$("#boke").css("background-color","aquamarine")
					}
				}
			

				// 绑定更换图片事件
				function huan() {
					setInterval(function () {
						var r = Math.floor((Math.random() * 10000) % 9)
						var s = "<img src='/public/tu/f"+ r +".jpg' >"
						var r1 = Math.floor((Math.random() * 10000) % 9)
						var s1 = "<img src='/public/tu/f"+ r1 +".jpg' >"
						var r2 = Math.floor((Math.random() * 10000) % 9)
						var s2 = "<img src='/public/tu/f"+ r2 +".jpg' >"
						$(".tt").html(s)
						$(".tt1").html(s1)
						$(".tt2").html(s2)
					},2000)
					
				}

				// 友链
					// 绑定表单提交事件
					function submit() {
						$(".submit").on("click",function () {
							if(form.name.value == ""){
								alert("称呼不能为空，请重新提交！")
								location.href = "#BD";
							}else if(form.address.value == ""){
								alert("网址不能为空，请重新提交！")
								location.href = "#BD";
							}
							else{
								var c = confirm("确认提交？")
								if(c == true){
									location.href = "#BD";
									location.href = "/index.html";
								}else{
									location.href = "#BD";
								}
							}	
						})


					}


        // 底部
				// 给底部上边框
				function B (a) {
					var H = document.documentElement.scrollHeight
					a.style.top = H - 60 + "px"
				}