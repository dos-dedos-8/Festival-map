// Dynamically load Google Maps API
function loadGoogleMapsAPI(callback) {
  // Prevent duplicate loading
  if (document.querySelector('script[src*="maps.googleapis.com"]')) {
    console.warn("Google Maps API already loaded.");
    return;
  }

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJyXNG2JeQ9V6mhgZwO12pwryeEpZ7GjU&callback=${callback}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.860260, lng: 174.635300 },
    zoom: 15,
  });

  // Add marker using AdvancedMarkerElement
  try {
    const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: { lat: -36.860260, lng: 174.635300 },
      title: "Trust Arena",
    });
  } catch (error) {
    console.error("Error creating AdvancedMarkerElement:", error);
  }
}

// Attach initMap to the window object
window.initMap = initMap;

// Load the API
loadGoogleMapsAPI("initMap");
