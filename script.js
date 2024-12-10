// Initialize the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.860260, lng: 174.635300 }, // Coordinates: Trust Arena, Auckland
    zoom: 15, // Zoom level: Adjust as needed
  });

  // Example: Add a marker at the center
  const marker = new google.maps.Marker({
    position: { lat: -36.860260, lng: 174.635300 },
    map: map,
    title: "Trust Arena",
  });
}
