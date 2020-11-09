window.onload = function () {

    var myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    var option = {
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        tooltip:{
            
        },
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
        window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
    });
    window.addEventListener('resize', function () {
        myChart.resize();
    });
    
}