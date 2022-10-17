// Author Ny
// Version V1
// Date 22/10/16
const pc_app = document.getElementById("app");
const head = document.getElementById("head");
const nav = document.getElementById("nav");
const mobile_head = document.getElementById("mobile_head");
const tables = document.getElementById("tables");
nav.style.display="none";
app.style.display="none";
head.style.display="none";
mobile_head.style.display="none";
tables.style.transform= "translateX("+ "-280px" +")";

// 	document.getElementById("body").style.backgroundColor="rgba(146,182,213)";
window.onload=function(){
	setTimeout(function(){
		document.getElementById("loading").style.display="none";
		app.style.display="";
		head.style.display="";
		nav.style.display="";
		mobile_head.style.display="";
	},1500)
	// setTimeout(function(){
	// 	document.getElementById("loading").style.display="none";
	// 	app.style.display="";
	// 	head.style.display="";
	// 	nav.style.display="";
	// 	mobile_head.style.display="";
	// },10)
}
window.onscroll = function() {
	// 获取滚动条向下拉上方遮盖多少像素
	var navtop = document.documentElement.scrollTop || document.body.scrollTop;
	if (navtop >= 200){
		document.getElementById('nav').style.transform = "translateY("+ "0px" +")";
	}else {
		document.getElementById('nav').style.transform = "translateY("+ "-90px" +")";
	}
}
function turn_on() {
	tables.style.transform = "translateX("+ "0px" +")";
	document.getElementById("switch").getAttributeNode("onclick").value="turn_off()";
	document.getElementById("switch").style.backgroundImage="url('./images/tablesuioff.png')";
}
function turn_off(){
	tables.style.transform = "translateX("+ "-280px" +")";
	document.getElementById("switch").getAttributeNode("onclick").value="turn_on()";
	document.getElementById("switch").style.backgroundImage="url('./images/tablesui.png')";
}