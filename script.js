// Dynamically load Google Maps API
function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDJyXNG2JeQ9V6mhgZwO12pwryeEpZ7GjU&callback=initMap";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.860260, lng: 174.635300 }, // Trust Arena coordinates
    zoom: 15,
  });

  // Add AdvancedMarkerElement
  const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: { lat: -36.860260, lng: 174.635300 },
    title: "Trust Arena", // Optional tooltip
  });
}

// Load Google Maps API
loadGoogleMapsAPI();
