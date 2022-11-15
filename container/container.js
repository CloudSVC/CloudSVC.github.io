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

window.onload=function(){
	// setTimeout(function(){
	// 	document.getElementById("loading").style.display="none";
	// 	app.style.display="";
	// 	head.style.display="";
	// 	nav.style.display="";
	// 	mobile_head.style.display="";
	// },1500)
	setTimeout(function(){
		document.getElementById("loading").style.display="none";
		app.style.display="";
		head.style.display="";
		nav.style.display="";
		mobile_head.style.display="";
	},10)
	
	
	// 字幕部分
	var write = setInterval(function(){
		write_txt()
	},200);
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
	document.getElementById("switch").style.backgroundImage="url('../../images/tablesuioff.png')";
}
function turn_off(){
	tables.style.transform = "translateX("+ "-280px" +")";
	document.getElementById("switch").getAttributeNode("onclick").value="turn_on()";
	document.getElementById("switch").style.backgroundImage="url('../../images/tablesui.png')";
}
// 字幕部分
var id = document.getElementById("intxt");
var m_id = document.getElementById("mintxt");
// var msg = "All roads lead to Rome.";
var msg = document.getElementById("text-content-description").innerHTML;
var len = msg.length;
var txt_index = 1;

var ind = 0;
function write_txt() {
	var msg1 = msg.substring(0,txt_index);
	id.innerHTML = msg1;
	m_id.innerHTML = msg1;
	if(txt_index == len){
		ind++;
		if (ind == 16){
			setTimeout(reload,3000);
			ind = 0;
		}
		// setTimeout(reload,3000);
	}else{
		txt_index++;
	}
}
function reload() {
	txt_index = 1;
}
function blog_click(string) {
	window.location.assign(string)
}