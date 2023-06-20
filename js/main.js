mapboxgl.accessToken = 'pk.eyJ1Ijoia2lkdXNtYXBib3giLCJhIjoiY2xpc285NTAxMTV2NTNsbnEzNXp1bzFtZSJ9.YRAwdGNkD1SyyztBVMpqiw';
    const map = new mapboxgl.Map({
      container: 'map', // Container ID
      style: 'mapbox://styles/mapbox/streets-v12', // Map style to use
      center: [ 38.968016 , 8.750834], // Starting position [lng, lat]
      zoom: 17, // Starting zoom level
    });

    const marker = new mapboxgl.Marker() // initialize a new marker
  .setLngLat([38.968016 , 8.750834]) // Marker [lng, lat] coordinates
  .addTo(map); // Add the marker to the map



const geocoder = new MapboxGeocoder({
// Initialize the geocoder
accessToken: mapboxgl.accessToken, // Set the access token
mapboxgl: mapboxgl, // Set the mapbox-gl instance
marker: false, // Do not use the default marker style
placeholder: 'Search for places in Debrezeyt', // Placeholder text for the search bar
bbox: [ 38.957277, 8.750413 , 38.968734 , 8.751693], // Boundary for Berkeley
proximity: {
longitude:38.967128,
latitude: 8.750972
} // Coordinates of UC Berkeley
});
 
// Add the geocoder to the map
map.addControl(geocoder);