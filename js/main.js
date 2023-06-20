mapboxgl.accessToken = 'pk.eyJ1Ijoia2lkdXNtYXBib3giLCJhIjoiY2xpc285NTAxMTV2NTNsbnEzNXp1bzFtZSJ9.YRAwdGNkD1SyyztBVMpqiw';
    const map = new mapboxgl.Map({
      container: 'map', // Container ID
      style: 'mapbox://styles/mapbox/streets-v12', // Map style to use
      center: [38.968016 , 8.750834], // Starting position [lng, lat]
      zoom: 17, // Starting zoom level
    });

    const marker = new mapboxgl.Marker() // initialize a new marker
  .setLngLat([38.968016 , 8.750834]) // Marker [lng, lat] coordinates
  .addTo(map); // Add the marker to the map



// const geocoder = new MapboxGeocoder({
// // Initialize the geocoder
// accessToken: mapboxgl.accessToken, // Set the access token
// mapboxgl: mapboxgl, // Set the mapbox-gl instance
// marker: false, // Do not use the default marker style
// placeholder: 'Search for places in Debrezeyt', // Placeholder text for the search bar
// bbox: [ 38.957277, 8.750413 , 38.968734 , 8.751693], // Boundary for Berkeley
// proximity: {
// longitude:38.967128,
// latitude: 8.750972
// } // Coordinates of UC Berkeley
// });

// const geocoder = new MapboxGeocoder({
//   // Initialize the geocoder
//   accessToken: mapboxgl.accessToken, // Set the access token
//   mapboxgl: mapboxgl, // Set the mapbox-gl instance
//   marker: false, // Do not use the default marker style
//   placeholder: 'Search for places in Deberezeyt', // Placeholder text for the search bar
//   bbox: [8.760526, 38.944259, 8.749795,  38.969993], // Boundary for Deberezeyt
//   proximity: {
//     longitude: -122.25948,
//     latitude: 37.87221
//   } // Coordinates of UC Deberezeyt
// });

 
// // Add the geocoder to the map
// map.addControl(geocoder);

const search = new MapboxSearchBox();
search.accessToken = mapboxgl.accessToken;
map.addControl(search);



// After the map style has loaded on the page,
// add a source layer and default styling for a single point
map.on('load', () => {
  map.addSource('single-point', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': []
    }
  });

  map.addLayer({
    'id': 'point',
    'source': 'single-point',
    'type': 'circle',
    'paint': {
      'circle-radius': 10,
      'circle-color': '#448ee4'
    }
  });

  // Listen for the `result` event from the Geocoder // `result` event is triggered when a user makes a selection
  //  Add a marker at the result's coordinates
  geocoder.on('result', (event) => {
    map.getSource('single-point').setData(event.result.geometry);
  });
});




// mapboxgl.accessToken = 'sk.eyJ1Ijoia2lkdXNtYXBib3giLCJhIjoiY2xqNGhsZDc0MDI1ZTNycDh3Z21xYWVmMCJ9.19QokcoleB8xdE59Wm3LEg';
// const map = new mapboxgl.Map({
//   container: 'map', // Container ID
//   style: 'mapbox://styles/mapbox/streets-v12', // Map style to use
//   center: [-122.25948, 37.87221], // Starting position [lng, lat]
//   zoom: 12 // Starting zoom level
// });

// const marker = new mapboxgl.Marker() // Initialize a new marker
//   .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
//   .addTo(map); // Add the marker to the map

// const geocoder = new MapboxGeocoder({
//   // Initialize the geocoder
//   accessToken: mapboxgl.accessToken, // Set the access token
//   mapboxgl: mapboxgl, // Set the mapbox-gl instance
//   marker: false, // Do not use the default marker style
//   placeholder: 'Search for places in Deberezeyt', // Placeholder text for the search bar
//   bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Deberezeyt
//   proximity: {
//     longitude: -122.25948,
//     latitude: 37.87221
//   } // Coordinates of UC Deberezeyt
// });

// // Add the geocoder to the map
// map.addControl(geocoder);

// // After the map style has loaded on the page,
// // add a source layer and default styling for a single point
// map.on('load', () => {
//   map.addSource('single-point', {
//     'type': 'geojson',
//     'data': {
//       'type': 'FeatureCollection',
//       'features': []
//     }
//   });

//   map.addLayer({
//     'id': 'point',
//     'source': 'single-point',
//     'type': 'circle',
//     'paint': {
//       'circle-radius': 10,
//       'circle-color': '#448ee4'
//     }
//   });

//   // Listen for the `result` event from the Geocoder // `result` event is triggered when a user makes a selection
//   //  Add a marker at the result's coordinates
//   geocoder.on('result', (event) => {
//     map.getSource('single-point').setData(event.result.geometry);
//   });
// });