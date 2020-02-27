function initMap() {
	L.mapQuest.key = 'yWRKiBGBL2joXn1vVlIa9KHcVHSyLbPy';

  var map = L.mapQuest.map('map', {center" [32.88, -117.236],
  layers: L.mapQuest.tileLayer('map'), zoom:12, zoomControl: false});

  L.marker([32.88,-117.236]).addTo(map);
}
