// Dynamically load the Google Maps API
function loadGoogleMapsAPI(callback) {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=${callback}&libraries=marker&v=weekly`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize the map
async function initMap() {
  try {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Create the map instance
    const map = new Map(document.getElementById("map"), {
      center: { lat: -36.860260, lng: 174.635300 }, // Trust Arena coordinates
      zoom: 15,
    });

    // Add an advanced marker
    new AdvancedMarkerElement({
      map: map,
      position: { lat: -36.860260, lng: 174.635300 },
      title: "Trust Arena",
    });
  } catch (error) {
    console.error("Error initializing the map or marker:", error);
  }
}

// Attach initMap to the global window object
window.initMap = initMap;

// Load the API
loadGoogleMapsAPI("initMap");
