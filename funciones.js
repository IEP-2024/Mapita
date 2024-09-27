function inizializarMapa(nombreDelDiv){
    var zoomInicial = 8;
    var latitudInicial = -33.046;
    var longitudInicial = -56.019;
    return L.map(nombreDelDiv).setView([latitudInicial, longitudInicial], zoomInicial); 
}

 function agregarCapaBase(map){
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
 }

function agregarMarcador(latitud, longitud, texto) {
    var marker = L.marker([latitud, longitud]).addTo(map); 
    if (texto) {
      marker.bindPopup(texto); 
    }
}

