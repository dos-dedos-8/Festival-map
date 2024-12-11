// Dynamically load Google Maps API
function loadGoogleMapsAPI(callback) {
  // Prevent duplicate loading
  const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
  if (existingScript) {
    console.warn("Google Maps API is already loaded.");
    return;
  }

  // Load the script dynamically
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJyXNG2JeQ9V6mhgZwO12pwryeEpZ7GjU&callback=${callback}&libraries=marker&v=weekly`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.860260, lng: 174.635300 }, // Trust Arena
    zoom: 15, // Default zoom level
  });

  try {
    // Attempt to use AdvancedMarkerElement
    const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: { lat: -36.860260, lng: 174.635300 },
      title: "Trust Arena",
    });
  } catch (error) {
    console.error("AdvancedMarkerElement not supported. Fallback to basic marker.", error);

    // Fallback to basic marker
    const marker = new google.maps.Marker({
      position: { lat: -36.860260, lng: 174.635300 },
      map: map,
      title: "Trust Arena",
    });
  }
}

// Attach initMap to the window object
window.initMap = initMap;

// Dynamically load the API
loadGoogleMapsAPI("initMap");
