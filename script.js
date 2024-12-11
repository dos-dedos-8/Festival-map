// Dynamically load the Google Maps library
async function loadGoogleMapsLibrary() {
  // Import the required libraries from Google Maps
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  return { Map, AdvancedMarkerElement };
}

// Initialize the map
async function initMap() {
  try {
    const { Map, AdvancedMarkerElement } = await loadGoogleMapsLibrary();

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

    // Optional: Provide fallback functionality if AdvancedMarkerElement fails
    alert("The map could not be fully initialized. Please try again later.");
  }
}

// Attach the initMap function to the global scope
window.initMap = initMap;

// Load the Google Maps API dynamically with async and defer
function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJyXNG2JeQ9V6mhgZwO12pwryeEpZ7GjU&callback=initMap&v=beta`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Trigger loading
loadGoogleMapsAPI();
