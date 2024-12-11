function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.860260, lng: 174.635300 }, // Trust Arena coordinates
    zoom: 15, // Adjust zoom as needed
  });

  // Add a basic marker
  const marker = new google.maps.Marker({
    position: { lat: -36.860260, lng: 174.635300 }, // Trust Arena
    map: map,
    title: "Trust Arena", // Tooltip text
  });
}

// Attach initMap to the global scope
window.initMap = initMap;

// Dynamically load Google Maps API
function loadGoogleMapsAPI(callback) {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=${callback}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Load the API
loadGoogleMapsAPI("initMap");
