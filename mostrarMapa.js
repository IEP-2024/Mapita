var map = inizializarMapa("mapa");
agregarCapaBase(map);

 const puntos = [
   { latitud: -34.803, longitud: -55.900, texto: "IEP" },
   { latitud: -34.898947123949974, longitud: -56.131597469314514, texto: "ESI Buceo" },
 ];


 puntos.forEach(punto => {
     agregarMarcador(punto.latitud, punto.longitud, punto.texto);
 });
