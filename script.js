// Dynamically load Google Maps API
function loadGoogleMapsAPI(callback) {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=" + callback;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize map when API is loaded
loadGoogleMapsAPI("initMap");

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.860260, lng: 174.635300 }, // Coordinates for Trust Arena
    zoom: 15,
  });

  // Replace google.maps.Marker with AdvancedMarkerElement
  const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: { lat: -36.860260, lng: 174.635300 },
    title: "Trust Arena", // Tooltip shown on hover
  });
}
