// Load environment variables (API keys) from.env (not directly used in GitHub Pages, but we're mimicking this for simplicity)
const API_KEY = 'AIzaSyDJyXNG2JeQ9V6mhgZwO12pwryeEpZ7GjU'; // Your provided Google Maps API key
const MAP_CENTER = { lat: -36.866667, lng: 174.633333 }; // Trust Arena, Henderson, West Auckland
const MAP_ZOOM = 16; // Adjusted zoom level for a more focused view

// Dynamically load Google Maps API without a callback
function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=marker&v=weekly&callback=initMap`;
  script.async = true;
  script.defer = true; // Add defer to ensure the script runs after the DOM has finished parsing
  document.head.appendChild(script);
}

// Initialize the map after the Google Maps API has finished loading
window.initMap = function initMap() {
  try {
    // Create the map
    const mapElement = document.getElementById("map");
    if (mapElement) { // Add a null check to ensure the element exists
      const map = new google.maps.Map(mapElement, {
        center: MAP_CENTER,
        zoom: MAP_ZOOM,
      });

      // Example: Add a marker at the map center using AdvancedMarkerElement
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: MAP_CENTER,
        map: map,
      });
    } else {
      console.error("Map element not found.");
    }
  } catch (error) {
    console.error("Error initializing map:", error);
  }
}

// Load the Google Maps API when the script runs
loadGoogleMapsAPI();
