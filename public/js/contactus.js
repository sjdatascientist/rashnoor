/*
$(document).ready(function () {
    function showMap(lat, lng) {
      var location = { lat: lat, lng: lng };

      var map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 14,
      });

      var marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    }

    // Example: Call with your coordinates
    showMap(37.7749, -122.4194); // San Francisco, CA
});
*/

function showLocationOnMap(lat, lng) {
$(document).ready(function () {
    // Initialize the map
    var map = L.map('map').setView([lat, lng], 50);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker
    L.marker([lat, lng]).addTo(map)
    .bindPopup('You are here!')
    .openPopup();
});
}

// Example usage:
showLocationOnMap(24.49261, 54.36362); // Capital Garden
