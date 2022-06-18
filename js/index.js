window.onload = function (){
	console.log("%c路有多远，\n只有心知道，\n最美的旅程，\n是不断的经历，\n坚持走下去．\n我是开发者暖阳THU,\n与您同行！", "line-height:22px;color:#00a5f2");
	var width = window.screen.width;
	// var change_time = setInterval(function (){
	// 	change(width)
	// },800)
	// window.clearInterval(change_time)
	change(width)
}
function change(width){
	if(width < 800){
		// 手机
		
	}else{
		// 电脑
		document.getElementById("pc_head").style.background="url(https://w.wallhaven.cc/full/o3/wallhaven-o3r2kl.jpg) no-repeat"
	}
}
window.onscroll = function() {
	// 获取滚动条向下拉上方遮盖多少像素
	var navtop = document.documentElement.scrollTop || document.body.scrollTop;
	if (navtop >= 100){
		document.getElementById('pc_top_nav').style.transform = "translateY("+ "0px" +")";
	}else {
		document.getElementById('pc_top_nav').style.transform = "translateY("+ "-60px" +")";
	}
}
function Loading() {
	alert('当前正在开发中')
}