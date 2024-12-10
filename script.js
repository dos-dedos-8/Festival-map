function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.860260, lng: 174.635300 }, // coordinates trust aena (Auckland)
    zoom: 15,
  });
}
