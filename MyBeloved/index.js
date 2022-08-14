window.onload = function () {
	console.log("%c给徐小姐的一个小彩蛋\n往后余生，希望都是你", "line-height:22px;color:#00a5f2")
	var date = new Date()
	time_Hour = date.getHours()
	year = date.getFullYear(); //得到年份
	month = date.getMonth() + 1; //得到月份
	day = date.getDate(); //得到日期
	BGM_url = "./暖暖.mp3"
	test()
	progress()
}
function test() {
	BirthDay=new Date("July 10,2022");//改成你的计时日期
	today=new Date();
	timeold=(today.getTime()-BirthDay.getTime());
	sectimeold=timeold/1000
	secondsold=Math.floor(sectimeold);
	msPerDay=24*60*60*1000
	e_daysold=timeold/msPerDay
	daysold=Math.floor(e_daysold);
	// e_hrsold=(e_daysold-daysold)*24;
	// hrsold=Math.floor(e_hrsold);
	// e_minsold=(e_hrsold-hrsold)*60;
	// minsold=Math.floor((e_hrsold-hrsold)*60);
	// seconds=Math.floor((e_minsold-minsold)*60);
	// console.log(daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒了!")
	document.getElementById("time").innerHTML = daysold;
}

function progress(){
	total = 0;
	content = new Array();
	time = new Array()
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var x = this.responseText;
			var obj = JSON.parse(this.responseText);
			// console.log(obj.data.lrclist[0].lineLyric)
			// console.log(obj.data.lrclist.length)
			// console.log(obj.data.lrclist[0])
			for (index = 0;index < obj.data.lrclist.length; index ++){
				// console.log(obj.data.lrclist[index].lineLyric)
				content[index] = obj.data.lrclist[index].lineLyric;
				time[index] = obj.data.lrclist[index].time;
				time[index] = Math.trunc(time[index]);
			}
			index = Math.trunc(audio.currentTime);
			t_index = 0;
			setInterval(function (){
				index = Math.trunc(audio.currentTime);
				if (index == time[t_index]){
					console.log(content[t_index]);
					document.getElementById("lrc_div").innerHTML = content[t_index];
					t_index += 1;
				}
			},1000);
			document.getElementById('audio').onended = function() {
				// 重置歌词索引
				t_index = 0;
				// 重置歌曲
				document.getElementById('audio').src= BGM_url
			}
		}
	};
	xhttp.open("GET", "music.json", true);
	xhttp.send();
	document.getElementById('audio').src= BGM_url
}