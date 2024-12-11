// Dynamically load Google Maps API
function loadGoogleMapsAPI(callback) {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJyXNG2JeQ9V6mhgZwO12pwryeEpZ7GjU&callback=${callback}&libraries=marker&v=weekly`;
  script.async = true;
  document.head.appendChild(script);
}

// Initialize the map
async function initMap() {
  try {
    // Load required libraries
    const { Map } = await google.maps.importLibrary("maps");
    const { Marker } = await google.maps.importLibrary("marker");

    // Map styles
    const mapStyles = [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [
          { color: '#ffffff
            
