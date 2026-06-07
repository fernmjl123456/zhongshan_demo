var wms_layers = [];


        var lyr_3_0 = new ol.layer.Tile({
            'title': '高德地图 - 矢量地图3',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://wprd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=10&x={x}&y={y}&z={z}',
                tilePixelRatio: window.devicePixelRatio > 1 ? 2 : 1
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '四行',
                interactive: true,
    title: '四行<br />\
    <img src="styles/legend/_1_0.png" /> 工商银行<br />\
    <img src="styles/legend/_1_1.png" /> 建设银行<br />\
    <img src="styles/legend/_1_2.png" /> 农业银行<br />\
    <img src="styles/legend/_1_3.png" /> 中国银行<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '农行',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 农行'
            });

lyr_3_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_3_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'网点名称': '网点名称', '网点简称': '网点简称', '银行分类': '银行分类', '银行名称': '银行名称', '机构地址': '机构地址', '变更前机构地址': '变更前机构地址', '负责人': '负责人', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', 'lng（谷歌/高德经度）': 'lng（谷歌/高德经度）', 'lat（谷歌/高德纬度）': 'lat（谷歌/高德纬度）', '新网点简称': '新网点简称', });
lyr__2.set('fieldAliases', {'网点名称': '网点名称', '网点简称': '网点简称', '机构地址': '机构地址', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', 'lng（谷歌/高德经度）': 'lng（谷歌/高德经度）', 'lat（谷歌/高德纬度）': 'lat（谷歌/高德纬度）', '区域＿中山行政区新': '区域＿中山行政区新', });
lyr__1.set('fieldImages', {'网点名称': 'TextEdit', '网点简称': 'TextEdit', '银行分类': 'TextEdit', '银行名称': 'TextEdit', '机构地址': 'TextEdit', '变更前机构地址': 'TextEdit', '负责人': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', 'lng（谷歌/高德经度）': 'TextEdit', 'lat（谷歌/高德纬度）': 'TextEdit', '新网点简称': 'TextEdit', });
lyr__2.set('fieldImages', {'网点名称': 'TextEdit', '网点简称': 'TextEdit', '机构地址': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', 'lng（谷歌/高德经度）': 'TextEdit', 'lat（谷歌/高德纬度）': 'TextEdit', '区域＿中山行政区新': 'TextEdit', });
lyr__1.set('fieldLabels', {'网点名称': 'no label', '网点简称': 'no label', '银行分类': 'no label', '银行名称': 'header label - always visible', '机构地址': 'no label', '变更前机构地址': 'no label', '负责人': 'no label', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', 'lng（谷歌/高德经度）': 'no label', 'lat（谷歌/高德纬度）': 'no label', '新网点简称': 'no label', });
lyr__2.set('fieldLabels', {'网点名称': 'no label', '网点简称': 'inline label - always visible', '机构地址': 'no label', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', 'lng（谷歌/高德经度）': 'no label', 'lat（谷歌/高德纬度）': 'no label', '区域＿中山行政区新': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});