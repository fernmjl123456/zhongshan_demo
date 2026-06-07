var size = 0;
var placement = 'point';

var style__2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial Unicode MS\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("网点简称") !== null) {
        labelText = String(feature.get("网点简称"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.67801, 444.22684],
                  scale: 0.03328318592691044,
                  anchor: [225.339005, 222.11342],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ABC_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
