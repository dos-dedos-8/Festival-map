// Dynamically load Google Maps API
function loadGoogleMapsAPI(callback) {
  // Prevent multiple loads
  if (document.querySelector('script[src*="maps.googleapis.com"]')) {
    console.warn("Google Maps API already loaded.");
    return;
  }

  // Create and append the script tag
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJyXNG2JeQ9V6mhgZwO12pwryeEpZ7GjU&callback=${callback}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.860260, lng: 174.635300 }, // Trust Arena coordinates
    zoom: 15, // Adjust zoom as needed
  });

  // Add a marker using AdvancedMarkerElement
  const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: { lat: -36.860260, lng: 174.635300 },
    title: "Trust Arena", // Optional: Tooltip title
  });
}

// Ensure initMap is globally accessible
window.initMap = initMap;

// Load Google Maps API
loadGoogleMapsAPI("initMap");
