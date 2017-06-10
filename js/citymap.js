/**
 * Created by wangjie on 2017/6/10.
 */
$(function () {

    // 百度地图API功能,创建map
    var map = new BMap.Map("allmap");
    map.enableScrollWheelZoom();
    map.centerAndZoom('上海', 15);

    //城市设置
    $("#button1").click(function () {
        var city = $("#city").val();
        var map = new BMap.Map("allmap");
        map.enableScrollWheelZoom();
        map.centerAndZoom(city, 15);

        //获取鼠标点击的经纬度
        map.addEventListener("click", function (e) {
            var jingdu = $("#jingdu").val(e.point.lng);
            var weidu = $("#weidu").val(e.point.lat);
        });

        //圆形区域检索事件开始
        $("#button2").click(function () {

            var banjing = $("#banjing").val();
            var jingdu = $("#jingdu").val();
            var weidu = $("#weidu").val();
            var didian = $("#didian").val();

            var map = new BMap.Map("allmap");
            var mPoint = new BMap.Point(jingdu, weidu);
            map.enableScrollWheelZoom();
            map.centerAndZoom(mPoint, 15);

            var circle = new BMap.Circle(mPoint, banjing, {
                fillColor: "blue",
                strokeWeight: 1,
                fillOpacity: 0.3,
                strokeOpacity: 0.3
            });
            map.addOverlay(circle);

            //地址搜索
            $("#button3").click(function () {
                var banjing = $("#banjing").val();
                var jingdu = $("#jingdu").val();
                var weidu = $("#weidu").val();
                var didian = $("#didian").val();

                var map = new BMap.Map("allmap");
                var mPoint = new BMap.Point(jingdu, weidu);
                map.enableScrollWheelZoom();
                map.centerAndZoom(mPoint, 15);

                var circle = new BMap.Circle(mPoint, banjing, {
                    fillColor: "blue",
                    strokeWeight: 1,
                    fillOpacity: 0.3,
                    strokeOpacity: 0.3
                });
                map.addOverlay(circle);
                var local = new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});
                local.searchNearby(didian, mPoint, 1000);
                radiu
            })

        });
        //圆形区域检索事件结束

    })

})

