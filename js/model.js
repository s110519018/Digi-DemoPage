new WOW().init();


var web=[
  {
  	img:"../img/model/q1.svg",
  	date:"20190910",
  	product:"【官方授權】VIP入園手環（提前15分鐘入園）＋阿倍野 HARUKAS 展望台門票＋日本環球影城入園門票",
  	person:"2",
  	price:"NT$10000",
  	secure:"True",
  	bad:"True"
  },
  {	
  	img:"../img/model/q2.svg",
  	date:"20191023",
  	product:"【優惠門票】香港迪士尼樂園門票（1 日 / 2 日）",
  	person:"1",
  	price:"NT$4000",
  	secure:"False",
  	bad:"False"
  },
  {
  	img:"../img/model/q3.svg",
  	date:"20181023",
  	product:"【Tokyo Disney】東京迪士尼實體門票：一日券（舞濱站領取）",
  	person:"5",
  	price:"NT$16000",
  	secure:"True",
  	bad:"False"
  },
  {
  	img:"../img/model/q4.svg",
  	date:"20191024",
  	product:"【新加坡必去景點】新加坡環球影城門票＋餐券免費送",
  	person:"15",
  	price:"NT$36000",
  	secure:"True",
  	bad:"True"
  },
    {
  	img:"../img/model/q5.svg",
  	date:"20191101",
  	product:"【大阪親子遊】大阪海遊館電子門票",
  	person:"8",
  	price:"NT$5000",
  	secure:"True",
  	bad:"False"
  },    
];

// 把 JSON 物件，轉換為 陣列(Array)
var obj = Object.keys(web).map(function(_) { return web[_]; });
// console.log(web)

//記得把所有原來的""換成''
 var web_html="<img src='{{img}}' alt=''><div class='box-word'><p>交易日期：{{date}}<br>訂購商品：<br>{{product}}<br>訂購人數：{{person}}<br>總金額：{{price}}<br>3D驗證通過：{{secure}}<br></p></div>";


//隨機排列順序
var arr=[];
//額外宣告一個陣列儲存目前的順序
var answer=[];
//重跑
var reload=0;

$(document).ready(function (){
	questions();
});

function questions(){
	if(reload==0){
		//清空陣列和div內容
		arr=[];
		answer=[];
		$("#q-box0").empty();
		$("#q-box1").empty();
		$("#q-box2").empty();

		//隨機排列0-web.length之間數字
		for(var i=0;i<web.length;i++){//一個從0到web.length的陣列
			arr.push(i);
		}
		arr.sort(function(){//隨機打亂這個陣列
			return Math.random()-0.5;
		})
		arr.length=3;//改寫長度
		// console.log(arr);//控制檯會輸出web.length個不同的數

		for(var j=0;j<3;j++){
			var item=web[arr[j]];
			//放現在的排序進去
			answer.push(web[arr[j]]);
			//放內容
			var current_item_html=
				web_html.replace("{{img}}",item.img)
				.replace("{{date}}",item.date)
				.replace("{{product}}",item.product)
				.replace("{{person}}",item.person)
				.replace("{{price}}",item.price)
				.replace("{{secure}}",item.secure)
			$("#q-box"+j).append(current_item_html);
		}
		reload=1;//設定先不重載
	}
}


//取得使用者的答案
var char;
$('.gobtn').click(function(event) {
	//開啟解答視窗
	$('body').addClass('removescroll');
	$(".answer-modal-window ").css("visibility","visible");
	$(".answer-modal-window ").css("opacity","1");
	$(".answer-modal-window ").css("pointer-events","auto");
	//取得使用者所選擇的答案
	char=$("input[type=radio][name='who']:checked").val();
	//比對
	//如果使用者沒選擇答案就按按鈕
	if(char==null){
		$('.answer-modal-text').text('請選擇一名');
	}
	//使用者選擇了答案
	else{
		//如果選擇的是盜刷
		if(answer[char].bad=="True")
		{
			$('.answer-modal-text').text('是盜刷');
		}
		//如果選擇的不是盜刷	
		else{
			$('.answer-modal-text').text('不是盜刷');
		}
	}
});



$('#close').click(function(event) {
	// 關閉解答視窗
	$('body').removeClass('removescroll');
	$(".answer-modal-window").css("visibility","hidden");
	$(".answer-modal-window ").css("opacity","0");
	$(".answer-modal-window").css("pointer-events","none");

	//如果有勾選的情況
	if(char!=null){
		//勾選為正確，重新載入
		if(answer[char].bad=="True")
			{
				reload=0;
				questions();
				// console.log("bingo");
			} 
	
	}
	// if(char==null){

	// }
	document.all("who")[char].checked =false; //取消所有勾選
});

//資訊視窗
$('.btn').click(function(event) {
	/* 開啟資訊視窗 */
	$('body').addClass('removescroll');

	$(".modal-window ").css("visibility","visible");
	$(".modal-window ").css("opacity","1");
	$(".modal-window ").css("pointer-events","auto");

});

$('.modal-close').click(function(event) {
	/* 關閉資訊視窗 */
	$('body').removeClass('removescroll');
	$(".modal-window ").css("visibility","hidden");
	$(".modal-window ").css("opacity","0");
	$(".modal-window ").css("pointer-events","none");
});




