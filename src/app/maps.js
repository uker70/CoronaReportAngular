var boundsLimit;
var lastValidCenter;
var markers = [];
var map;
var checkBoxIndex = 0;

function initialize() {
    console.log('Google Maps API version: ' + google.maps.version);

    var bounds = new google.maps.LatLngBounds();
    // limit viewport to where we should have units
    boundsLimit = new google.maps.LatLngBounds();
    boundsLimit.extend(new google.maps.LatLng(45.621550, -10.224344));
    boundsLimit.extend(new google.maps.LatLng(69.482467, 25.678134));

    var mapOptions = {
        center: {lat: 56.2310271, lng: 10.1870639},
        zoom: 7,
        minZoom: 3,
        maxZoom: 17
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

    google.maps.event.addListener(map, 'zoom_changed', function () {
        var zoom = map.getZoom();
        var scale = Math.max(0.33, Math.min(1, 1 * Math.pow(1.2, zoom - 12)));
        var icon = {
            url: '/images/markers/marker-red.png',
            scaledSize: new google.maps.Size(scale * 22, scale * 40)
        };
    });

    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(event.latLng);
    });

}

//Places numbered marker on the map and pushing the marker object to an array
function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        label: markers.length + 1 + ''
    });
    markers.push(marker);
    //saveMarkers();
    createTableRow(marker.label, marker.position.lat(), marker.position.lng());
}