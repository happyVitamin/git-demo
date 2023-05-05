/****** PLACE YOUR CUSTOM STYLES HERE ******/
var demand1_data = [];
var demand3_data = [];
var demand4_data = {};
var demand5_data = [];
var demand6_data = [];

function demand1List() {
	$.ajax({
		url: 'http://localhost:8080/demand1List',
		type: 'GET',
		dataType: 'json',
		success: function (response) {
			// 处理响应数据
			response.data.forEach(v => {
				var data = {
					value: v.count + 0,
					name: v.breed
				}
				demand1_data.push(data);
			})
			init_myChart1();
		},
		error: function (xhr, status, error) {
			// 处理错误
			console.log(error);
		}
	});
}

function demand3List() {
	$.ajax({
		url: 'http://localhost:8080/demand3List',
		type: 'GET',
		dataType: 'json',
		success: function (response) {
			var xData = [];
			var yData = [];
			// 处理响应数据
			response.data.forEach(v => {
				xData.push(v.breed);
				yData.push(v.highopinion);
			})
			demand3_data={
				xData:xData,
				yData:yData
			}
			init_myChart6(demand3_data);
		},
		error: function (xhr, status, error) {
			// 处理错误
			console.log(error);
		}
	});
}

function demand4List() {
	$.ajax({
		url: 'http://localhost:8080/demand4List',
		type: 'GET',
		dataType: 'json',
		success: function (response) {
			var xData = [];
			var yData = [];
			// 处理响应数据
			response.data.forEach(v => {
				xData.push(v.age);
				yData.push(v.count);
			})
			demand4_data={
				xData:xData,
				yData:yData
			}
			init_myChart5(demand4_data);
		},

		error: function (xhr, status, error) {
			// 处理错误
			console.log(error);
		}
	});
}

function demand5List() {
	$.ajax({
		url: 'http://localhost:8080/demand5List',
		type: 'GET',
		dataType: 'json',
		success: function (response) {
			var xData = [];
			var yData = [];
			// 处理响应数据
			response.data.forEach(v => {
				xData.push(v.breed);
				yData.push(v.rate);
			})
			demand5_data={
				xData:xData,
				yData:yData
			}
			init_myChart7(demand5_data);
		},
		error: function (xhr, status, error) {
			// 处理错误
			console.log(error);
		}
	});
}

function demand6List() {
	$.ajax({
		url: 'http://localhost:8080/demand6List',
		type: 'GET',
		dataType: 'json',
		success: function (response) {
			// 处理响应数据
			response.data.forEach(v => {
				demand6_data.push(v);
			})
			init_myChart3(demand6_data);
		},
		error: function (xhr, status, error) {
			// 处理错误
			console.log(error);
		}
	});
}


$(document).ready(function () {
	demand1List();
	demand3List();
	demand4List();
	demand5List();
	demand6List();
});

var legal_person_data = {
	"uploadData": [{"count": 630}, {"count": 986}, {"count": 792}, {"count": 642}, {"count": 521}, {"count": 573}
		, {"count": 832}, {"count": 747}, {"count": 983}, {"count": 836}, {"count": 831}, {"count": 633}],
	"updateData": [{"count": 110}, {"count": 181}, {"count": 123}, {"count": 197}, {"count": 123}, {"count": 173}
		, {"count": 123}, {"count": 151}, {"count": 101}, {"count": 152}, {"count": 101}, {"count": 177}],
	"viewData": [{"count": 651}, {"count": 842}, {"count": 223}, {"count": 223}, {"count": 221}, {"count": 812}
		, {"count": 928}, {"count": 219}, {"count": 613}, {"count": 254}, {"count": 981}, {"count": 301}]
};
var people_data = {
	"uploadData": [{"count": 1300}, {"count": 1686}, {"count": 1692}, {"count": 1742}, {"count": 1621}, {"count": 773}
		, {"count": 832}, {"count": 1047}, {"count": 1483}, {"count": 1336}, {"count": 831}, {"count": 973}],
	"updateData": [{"count": 103}, {"count": 281}, {"count": 203}, {"count": 197}, {"count": 173}, {"count": 154}
		, {"count": 223}, {"count": 251}, {"count": 201}, {"count": 252}, {"count": 201}, {"count": 277}],
	"viewData": [{"count": 651}, {"count": 842}, {"count": 223}, {"count": 223}, {"count": 221}, {"count": 812}
		, {"count": 928}, {"count": 219}, {"count": 613}, {"count": 254}, {"count": 981}, {"count": 301}]
};
var picture_data = {
	"uploadData": [{"count": 330}, {"count": 786}, {"count": 492}, {"count": 842}, {"count": 421}, {"count": 673}
		, {"count": 932}, {"count": 447}, {"count": 583}, {"count": 436}, {"count": 331}, {"count": 433}],
	"updateData": [{"count": 10}, {"count": 81}, {"count": 23}, {"count": 97}, {"count": 23}, {"count": 73}
		, {"count": 23}, {"count": 51}, {"count": 01}, {"count": 52}, {"count": 01}, {"count": 77}],
	"viewData": [{"count": 451}, {"count": 342}, {"count": 523}, {"count": 323}, {"count": 421}, {"count": 812}
		, {"count": 728}, {"count": 619}, {"count": 613}, {"count": 554}, {"count": 481}, {"count": 301}]
};

var Tpl1 = '<li>' +
	'<p class="data-count">1</p>' +
	'<span class="data-name">数据总量</span>' +
	'</li>' +
	'<li>' +
	'<p class="data-count">1331</p>' +
	'<span class="data-name">更新量</span>' +
	'</li>' +
	'<li>' +
	'<p class="data-count">3753</p>' +
	'<span class="data-name">共享次数</span>' +
	'</li>';
var Tpl2 = '<li>' +
	'<p class="data-count">3971</p>' +
	'<span class="data-name">数据总量</span>' +
	'</li>' +
	'<li>' +
	'<p class="data-count">1141</p>' +
	'<span class="data-name">更新量</span>' +
	'</li>' +
	'<li>' +
	'<p class="data-count">3753</p>' +
	'<span class="data-name">共享次数</span>' +
	'</li>';
var Tpl3 = '<li>' +
	'<p class="data-count">4742</p>' +
	'<span class="data-name">数据总量</span>' +
	'</li>' +
	'<li>' +
	'<p class="data-count">1231</p>' +
	'<span class="data-name">更新量</span>' +
	'</li>' +
	'<li>' +
	'<p class="data-count">2983</p>' +
	'<span class="data-name">共享次数</span>' +
	'</li>';
$('.com-screen-content .use-data').html(Tpl1);
// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main3'), 'light', {renderer: 'canvas'});

//var myChart4 = echarts.init(document.getElementById('main4'));
var myChart5 = echarts.init(document.getElementById('main5'));
var myChart6 = echarts.init(document.getElementById('main6'));
var myChart7 = echarts.init(document.getElementById('main7'));


getNowFormatDate();

init_myChart2();




function init_myChart3(data) {
	var xAxisData = [];
	var legendData = [];
	var seriesData = [];
	var seriesByBData = [];
	var seriesByGData = [];

	data.forEach(v => {
		if (xAxisData.indexOf(v.breed) == -1) {
			xAxisData.push(v.breed);
		}
		if (legendData.indexOf(v.sex) == -1) {
			legendData.push(v.sex);
		}
	});
	xAxisData.forEach(x => {
		data.forEach(v => {
			if (x == v.breed) {
				if (v.sex == '男') {
					seriesByBData.push(v.count)
				}
				if (v.sex == '女') {
					seriesByGData.push(v.count)
				}
			}
		})
	})
	var seriesByB = {
		name: "男",
		type: 'bar',
		barWidth: 16,
		data:seriesByBData,

	};
	var seriesByG = {
		name: "女",
		type: 'bar',
		barWidth: 16,
		data:seriesByGData
	};
	seriesData =  [seriesByB,seriesByG]
	var colorList = [
		'#1eb0ff',
		'#ec3ce7'
	];
	// 指定图表的配置项和数据
	option = {
		color:colorList,
		dataZoom: [
			{
				xAxisIndex: 0,// 这里是从X轴的0刻度开始
				type: "inside", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
				// type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
				startValue: 0, // 从头开始。
				endValue: 5, // 一次性展示多少个。
				minValueSpan: 5,  // 放大到最少几个
				maxValueSpan: 5,  //  缩小到最多几个
			},
		],
		title: {
			textStyle: {
				color: '#00CED1',
				fontWeight: 'normal'
			},
			subtextStyle: {
				color: '#08C',
				fontWeight: 'normal'
			},
			left: 'center'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: legendData,
			textStyle: {
				color: '#08C'
			},
			top: '10%'
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: xAxisData,
			axisLine: {
				lineStyle: {
					color: '#08C'
				}
			},
			axisLabel: {
				color: '#08C'
			}
		},
		yAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#08C'
				}
			},
			axisLabel: {
				color: '#08C'
			}
		},
		series: seriesData
	};
	myChart3.setOption(option);
}

function init_myChart2() {
	var data = {
		"uploadData": [{"count": 3230}, {"count": 2986}, {"count": 3392}, {"count": 2642}, {"count": 3521}, {"count": 2573}
			, {"count": 3132}, {"count": 3147}, {"count": 3283}, {"count": 3336}, {"count": 3831}, {"count": 3633}],
		"updateData": [{"count": 310}, {"count": 281}, {"count": 123}, {"count": 97}, {"count": 323}, {"count": 373}
			, {"count": 423}, {"count": 451}, {"count": 501}, {"count": 452}, {"count": 201}, {"count": 177}],
		"viewData": [{"count": 1651}, {"count": 1842}, {"count": 2223}, {"count": 2123}, {"count": 2021}, {"count": 1812}
			, {"count": 1928}, {"count": 2019}, {"count": 2613}, {"count": 2754}, {"count": 2981}, {"count": 3001}]
	};
	var uploadCnt = [];
	var updateCnt = [];

	var viewCnt = [];
	if (data.uploadData != null) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
		}
	}
	if (data.updateData != null) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}

	if (data.viewData != null) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {

		tooltip: {
			trigger: 'axis',
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		legend: {
			icon: 'circle',
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 10,
			top: '16',
			right: '10',
			data: ['数据总量', '共享次数', '更新量'],
			textStyle: {
				fontSize: 14,
				color: '#a0a8b9'
			}
		},
		grid: {
			top: '46',
			left: '13%',
			right: '10',
			//bottom: '10%',
			containLabel: false
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				interval: 0,
				fontSize: 14
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisTick: {
				show: false
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
			offset: 10
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14
				}
			},
			splitLine: {
				lineStyle: {
					color: '#2b3646'
				}
			},
			axisTick: {
				show: false
			}
		}],
		series: [{
			name: '数据总量',
			type: 'line',
			smooth: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(137, 189, 27, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(137, 189, 27, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#1cc840'
				}
			},
			data: uploadCnt
		}, {
			name: '共享次数',
			type: 'line',
			smooth: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(219, 50, 51, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(219, 50, 51, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#eb5690'
				}
			},
			data: viewCnt
		}, {
			name: '更新量',
			type: 'line',
			smooth: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 2
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0, 136, 212, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(0, 136, 212, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: '#43bbfb'
				}
			},
			data: updateCnt
		}
		]
	};
	myChart2.setOption(option);
}

function init_myChart1() {
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		color: ['#8fc31f', '#f35833', '#00ccff', '#ffcc00', '#f5e965', '#a74faf', '#ff9668'],
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		series: [
			{
				name: '每种菜品的下单数量',
				type: 'pie',
				radius: '40%',
				center: ['50%', '50%'],
				data:
				demand1_data
				// 	[
				// 	{value:435, name:'公安局'},
				// 	{value:679, name:'民政局'},
				// 	{value:848, name:'气象局'},
				// 	{value:348, name:'统计局'},
				// 	{value:679, name:'交通局'},
				// 	{value:848, name:'人社局'},
				// 	{value:1348, name:'其他'}
				// ]
				,
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				},
				itemStyle: {
					normal: {
						label: {
							show: true,
							//	                            position:'inside',
							formatter: '{b} : {c} ({d}%)',
							fontSize: 14,    //文字的字体大小
						}
					},
					labelLine: {show: true}
				}
			}
		]
	};
// 使用刚指定的配置项和数据显示图表。
	myChart1.setOption(option);
}

function init_myChart5(data ) {
	var XData = data.xData;
	var yData =data.yData;
	option = {
		backgroundColor: "",
		xAxis: {
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			data: XData,
			axisLabel: {
				// formatter: function (value) {
				//     var ret = ""; //拼接加\n返回的类目项
				//     var maxLength = 1; //每项显示文字个数
				//     var valLength = value.length; //X轴类目项的文字个数
				//     var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
				//     if (rowN > 1) //如果类目项的文字大于3,
				//     {
				//         for (var i = 0; i < rowN; i++) {
				//             var temp = ""; //每次截取的字符串
				//             var start = i * maxLength; //开始截取的位置
				//             var end = start + maxLength; //结束截取的位置
				//             //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
				//             temp = value.substring(start, end) + "\n";
				//             ret += temp; //凭借最终的字符串
				//         }
				//         return ret;
				//     } else {
				//         return value;
				//     }
				// },
				interval: 0,
				fontSize: 14,
				fontWeight: 100,
				textStyle: {
					color: '#9faeb5',

				}
			},
			axisLine: {
				lineStyle: {
					color: '#4d4d4d'
				}
			}
		},
		yAxis: {
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},

			axisLabel: {
				textStyle: {
					color: '#9faeb5',
					fontSize: 16,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#4d4d4d'
				}
			}
		},
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		series: [{
			name: '点外卖次数',
			type: "bar",
			itemStyle: {
				normal: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: '#00d386' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#0076fc' // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					},
					barBorderRadius: 15,
				}
			},
			label: {
				normal: {
					show: true,
					position: "top",
					textStyle: {
						color: "#ffc72b",
						fontSize: 10
					}
				}
			},
			data: yData,
			barWidth: 16,
		}, {
			name: '折线',
			type: 'line',
			itemStyle: {  /*设置折线颜色*/
				normal: {
					// color:'#c4cddc'
				}
			},
			data: yData
		}]
	};
	myChart5.setOption(option);
}

//刷新myChart5数据


function init_myChart6(data) {
	var xData = data.xData;
	var yData = data.yData;
	option = {
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		"grid": {
			"top": '40',
			"left": '30',
			"right": '10',
			"bottom": '40',

			textStyle: {
				color: "#fff"
			}
		},
		"legend": {
			right: '24',
			top: "24",
			itemWidth: 8,
			itemHeight: 12,
			textStyle: {
				color: '#fff',
				fontSize: 14
			},
			"data": ['好评分数'],

		},
		"calculable": true,
		xAxis: [{
			'type': 'category',
			"axisTick": {
				"show": false
			},
			"axisLine": {
				"show": false,
				lineStyle: {
					color: '#868c96'
				}
			},
			"axisLabel": {
				"interval": 0,
				fontSize: 14,


			},
			"splitArea": {
				"show": false
			},
			'data': xData,
			splitLine: {
				show: false
			}
		}],
		"yAxis": [
			{
				"type": "value",
				offset: -14,
				"splitLine": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisTick": {
					"show": false
				},
				"axisLabel": {
					"interval": 0,
					fontSize: 14

				},
				"splitArea": {
					"show": false
				}
			}],

		"series": [
			{
				"name": "好评分数",
				"type": "bar",

				"barGap": "10%",
				itemStyle: {//图形样式
					normal: {
						"color": '#4a4df0'
					}
				},
				label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
				"data": yData,
				barWidth: 14,
			}, {
				name: '折线',
				type: 'line',
				itemStyle: {  /*设置折线颜色*/
					normal: {
						color: '#c7b198'
					}
				},
				data: yData,

			}
		]
	};

// 使用刚指定的配置项和数据显示图表。
	myChart6.setOption(option);
}

function init_myChart7(data) {


	var colorList = [
		'#ff2600',
		'#ffc000',
		'#00ad4e',
		'#0073c2',
		'#165868',
		'#e76f00',
		'#316194',
		'#723761',
		'#00b2f1',
		'#4d6022',
		'#4b83bf',
		'#f9c813',
		'#0176c0'
	];
	var xData =data.xData;
	var yData = data.yData;
	option = {
		color: colorList,
		dataZoom: [
			{
				xAxisIndex: 0,// 这里是从X轴的0刻度开始
				type: "inside", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
				// type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
				startValue: 0, // 从头开始。
				endValue: 5, // 一次性展示多少个。
				minValueSpan: 5,  // 放大到最少几个
				maxValueSpan: 5,  //  缩小到最多几个
			},
		],
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		toolbox: {
			show: true,
			feature: {
				mark: {
					show: true
				},

			}
		},
		grid: {
			"borderWidth": 0,
			"top": '40',
			"left": '30',
			"right": '10',
			"bottom": '40',
			textStyle: {
				color: "#fff"
			}
		},
		xAxis: [
			{
				'type': 'category',
				"axisTick": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisLabel": {
					"interval": 0,
					fontSize: 14,
					formatter: function (value) {
						var ret = "";//拼接加\n返回的类目项
						var maxLength = 2;//每项显示文字个数
						var valLength = value.length;//X轴类目项的文字个数
						var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
						if (rowN > 1)//如果类目项的文字大于3,
						{
							for (var i = 0; i < rowN; i++) {
								var temp = "";//每次截取的字符串
								var start = i * maxLength;//开始截取的位置
								var end = start + maxLength;//结束截取的位置
								//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
								temp = value.substring(start, end) + "\n";
								ret += temp; //凭借最终的字符串
							}
							return ret;
						} else {
							return value;
						}
					}
				},
				"splitArea": {
					"show": false
				},
				'data': xData,
				splitLine: {
					show: false
				},

			}
		],
		yAxis: [
			{
				"type": "value",
				offset: -14,
				"splitLine": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisTick": {
					"show": false
				},
				"axisLabel": {
					"interval": 0,
					fontSize: 14

				},
				"splitArea": {
					"show": false
				}
			}

		],
		series: [
			{
				name: '每种菜品浏览和下单之比',
				type: 'bar',
				data: yData,
				itemStyle: {
					normal: {
						color: function (params) {
							// build a color map as your need.
							var colorList = [
								'#ff2600',
								'#ffc000',
								'#00ad4e',
								'#0073c2',
								'#165868',
								'#e76f00',
								'#316194',
								'#723761',
								'#00b2f1',
								'#4d6022',
								'#4b83bf',
								'#f9c813',
								'#0176c0'
							];
							return colorList[params.dataIndex]
						},

					}
				},
				barWidth: 14,
				label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
			},
			{
				name: '折线',
				type: 'line',
				itemStyle: {  /*设置折线颜色*/
					normal: {
						color: '#d3d5fd'
					}
				},
				data: yData
			}

		]
	};


// 使用刚指定的配置项和数据显示图表。
	myChart7.setOption(option);
}

//获取当前时间
function getNowFormatDate() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var Hour = date.getHours();       // 获取当前小时数(0-23)
	var Minute = date.getMinutes();     // 获取当前分钟数(0-59)
	var Second = date.getSeconds();     // 获取当前秒数(0-59)
	var show_day = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
	var day = date.getDay();
	if (Hour < 10) {
		Hour = "0" + Hour;
	}
	if (Minute < 10) {
		Minute = "0" + Minute;
	}
	if (Second < 10) {
		Second = "0" + Second;
	}
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = '<div><p>' + year + '年' + month + '月' + strDate + '号</p><p>' + show_day[day] + '</p></div>';
	var HMS = Hour + ':' + Minute + ':' + Second;
	var temp_time = year + '-' + month + '-' + strDate + ' ' + HMS;
	$('.nowTime li:nth-child(1)').html(HMS);
	$('.nowTime li:nth-child(2)').html(currentdate);
	//$('.topRec_List li div:nth-child(3)').html(temp_time);
	setTimeout(getNowFormatDate, 1000);//每隔1秒重新调用一次该函数
}

var resourceDataType = $('.data-label li.active').data('type');//用于切换基础库
// function urlType() {
//     resourceDataType = $('.data-label li.active').data('type');
//     if (resourceDataType == 1) {
//         init_myChart3(legal_person_data);
//         $('.com-screen-content .use-data').html(Tpl1);
//     } else if (resourceDataType == 2) {
//         init_myChart3(people_data);
//         $('.com-screen-content .use-data').html(Tpl2);
//     } else if (resourceDataType == 3) {
//         init_myChart3(picture_data);
//         $('.com-screen-content .use-data').html(Tpl3);
//     }
// }
//
// var num = 0;

//    资源类型定时器
// function resourceType() {
//     $('.data-label li').eq(num).addClass('active').siblings().removeClass('active');
//     //$('.active-data-label').html($('.canvas-pic-two .data-label li.active').html());
//     urlType();
//     num++;
//     if (num >= 3) {
//         num = 0;
//     }
// }

//    资源类型点击切换
// $('.data-label').on('click', 'li', function () {
//     $(this).addClass('active').siblings().removeClass('active');
//     $('.active-data-label').html($('.data-label li.active').html());
//     urlType();
// });
// var oTimer = setInterval(resourceType, 3000);
//    hover清除定时器
// $('.data-label').hover(function () {
//     clearInterval(oTimer);
// }, function () {
//     oTimer = setInterval(resourceType, 3000);
// });

/*function resize(){
	window.addEventListener("resize", () => {
  	this.myChart1.resize;
	this.myChart2.resize;
	this.myChart3.resize;
	this.myChart5.resize;
	this.myChart6.resize;
	this.myChart7.resize;
});
}*/

setInterval(function () {
	window.onresize = function () {
		this.myChart1.resize;
		this.myChart2.resize;
		this.myChart3.resize;
		this.myChart5.resize;
		this.myChart6.resize;
		this.myChart7.resize;
	}
}, 200)

//myChart7.resize();
