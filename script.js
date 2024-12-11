// Dynamically load Google Maps API
function loadGoogleMapsAPI(callback) {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJyXNG2JeQ9V6mhgZwO12pwryeEpZ7GjU&callback=${callback}&libraries=marker&v=weekly`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize the map
async function initMap() {
  try {
    // Load required libraries
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Initialize the map
    const map = new Map(document.getElementById("map"), {
      center: { lat: -36.860260, lng: 174.635300 },
      zoom: 15,
    });

    // Add an advanced marker
    new AdvancedMarkerElement({
      map: map,
      position: { lat: -36.860260, lng: 174.635300 },
      title: "Trust Arena",
    });
  } catch (error) {
    console.error("Map or Marker Initialization Error:", error);
  }
}

// Attach initMap to the global window object
window.initMap = initMap;

// Load the Google Maps API
loadGoogleMapsAPI("initMap");
