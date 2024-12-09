let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.8485, lng: 174.7633 }, // Replace with festival coordinates
    zoom: 15,
    mapTypeId: "roadmap",
  });
}
