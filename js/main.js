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
var start = document.getElementById("icon");
var currentAddres ;
var point ;


start.addEventListener('click', e => {
    map.locate({setView: true, maxZoom: 16});

    function onLocationFound(e) {
        var radius = e.accuracy;
        L.Marker(e.latlng).addTo(map)
        L.circle(e.latlng, radius).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point" + e.latlng ).openPopup();
        
        currentAddres = e.latlng;
    }
    
    map.on('locationfound', onLocationFound);
    
    function onLocationError(e) {
        alert(e.message);
    }
    
    map.on('locationerror', onLocationError);
    
    
})


console.log(point)
/*

function createMarker (){
    var markerFrom = L.circleMarker([28.6100,77.2300], { color: "#F00", radius: 10 });
    var markerTo =  L.circleMarker([18.9750,72.8258], { color: "#4AFF00", radius: 10 });
    var from = markerFrom.getLatLng();
    var to = markerTo.getLatLng();
    markerFrom.bindPopup('Delhi ' + (from).toString());
    markerTo.bindPopup('Mumbai ' + (to).toString());
    map.addLayer(markerTo);
    map.addLayer(markerFrom);
    getDistance(from, to);
}
////////////////////////////////////////////////////

*/

