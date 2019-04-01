var geojson;
var legend;

////////////////////////////////////////////////////////////////
//                  MAKE THE MAP                              //
////////////////////////////////////////////////////////////////

//enter the coordinates for the area you want to show (world map view)
var map = L.map('map').setView([20, 0,], 2);
////////////////////////////////////////////////////////////////
//                  GET MAPBOX TILE LAYER                     //
////////////////////////////////////////////////////////////////
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox.light'
}).addTo(map);

//set-up a variable for control 
// control that shows world info on hover
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>Military Expenditure as a Percentage of Government Spending (2017)</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.percent + '%'
        : 'Hover over a country');
};

info.addTo(map);


// get color depending on percent
function getColor(d) {
    return d > 30 ? '#800026' :
            d > 25  ? '#BD0026' :
            d > 20  ? '#E31A1C' :
            d > 15  ? '#FC4E2A' :
            d > 10   ? '#FD8D3C' :
            d > 5   ? '#FEB24C' :
            d > 0   ? '#FED976' :
                        '#FFEDA0';
}

function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.percent)
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    info.update(layer.feature.properties);
}


function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(worldData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

////////////////////////////////////////////////////////////////
//                  CREATE THE LEGEND                         //
////////////////////////////////////////////////////////////////
legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 5, 10, 15, 20, 25, 30],
        labels = [],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }
    div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);