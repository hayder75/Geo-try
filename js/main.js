var tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

var map = new L.Map('map', {
  'center':[8.757976, 38.932249],
  'zoom': 14,
  'layers': [tileLayer]
});

var marker;
var circle;

map.on('click', function (e) {
  if (marker || circle) {
    map.removeLayer(marker);
    map.removeLayer(circle);
  }
  marker = new L.Marker(e.latlng).addTo(map);
  circle = new L.circle((e.latlng), {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50 //
}).addTo(map);
});

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);