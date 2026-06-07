var size = 0;
var placement = 'point';
function categories__1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '工商银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450, 450],
                  scale: 0.03333333333333333,
                  anchor: [225.0, 225.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ICBC.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '建设银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450, 450],
                  scale: 0.03333333333333333,
                  anchor: [225.0, 225.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/CCB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '农业银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.67801, 444.22684],
                  scale: 0.03328318592691044,
                  anchor: [225.339005, 222.11342],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ABC.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中国银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.26099, 450.78473],
                  scale: 0.03331401194671561,
                  anchor: [225.130495, 225.392365],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/BOC.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style__1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("银行名称");
    var labelFont = "13.0px \'Arial Unicode MS\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories__1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
