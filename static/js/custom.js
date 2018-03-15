$(function(){
    $("#entryButton").on("click", function(){
        console.log("entryButton clicked!");
    });
    $('.link .button').hover(function(){
        $('.tip').animate({'top':160,'opacity':0},300);
    });
    $('#button_test').on("click", function(){
        var htmlobj=$.ajax({
            url:"/myblog/ajaxresponse/",
            async: true,
            type: 'POST',
            data: {
                x: 3, 
                y: 4,
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()},
            success: function(data){
                $("#content_test").html(data.a + '和' + data.b);
            }
        });
    });
    // 初始化
    var dom = document.getElementById('main');
    var myChart = echarts.init(dom);
    // 配置选项
    var option = {
        // backgroundColor: '#ccc',
        title: {
            text: 'echarts 入门实例'
        },
        tooltip: {},
        legend:{
            data: ['销量', '售价']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [45,22,43,65,32,76]
        },
        {
            name: '售价',
            type: 'bar',
            data: [43,35,64,43,23,45]
        }]
    };
    // 显示图像
    myChart.setOption(option);
});
