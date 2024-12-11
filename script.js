// Load environment variables (API keys) from.env (not directly used in GitHub Pages, but we'll mimic this for simplicity)
const API_KEY = 'AIzaSyDJyXNG2JeQ9V6mhgZwO12pwryeEpZ7GjU'; // Replace with your actual Google Maps API key
const MAP_CENTER = { lat: 37.7749, lng: -122.4194 }; // Default map center (San Francisco)
const MAP_ZOOM = 12; // Default zoom level

// Dynamically load Google Maps API
function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=marker&v=weekly&callback=initMap`;
  script.async = true;
  document.head.appendChild(script);
}

// Initialize the map
function initMap() {
  try {
    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), {
      center: MAP_CENTER,
      zoom: MAP_ZOOM,
    });

    // Example: Add a marker at the map center
    const marker = new google.maps.Marker({
      position: MAP_CENTER,
      map: map,
    });
  } catch (error) {
    console.error("Error initializing map:", error);
  }
}

// Load the Google Maps API when the script runs
loadGoogleMapsAPI();
