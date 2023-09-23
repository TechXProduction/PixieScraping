import React, { useEffect, useRef } from 'react';

//-------------------- Components --------------------------
import GoogleMapReact from 'react-google-maps';

/////////////////////////////////////////////////
const MapComponent = ({ geometry, apiKey }) => {
 const mapContainerRef = useRef(null);
 const map = useRef(null);

 useEffect(() => {
  const loadMap = () => {
    console.log(geometry)
   if (geometry && geometry.coordinates) {
    const polygons = geometry.coordinates.map((polygonCoordinates) =>
     polygonCoordinates[0].map(([longitude, latitude]) => ({
      lat: latitude,
      lng: longitude,
     })),
    );

    const centerCoordinates = polygons[0][0]; // Obtén las coordenadas del primer polígono para centrar el mapa

    map.current = new window.google.maps.Map(mapContainerRef.current, {
     center: { lat: centerCoordinates.lat, lng: centerCoordinates.lng },
     zoom: 19,
    });

    polygons.forEach((polygonCoordinates) => {
     const polygon = new window.google.maps.Polygon({
      paths: polygonCoordinates,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
     });

     polygon.setMap(map.current);
    });
   }
  };

  const loadGoogleMaps = () => {
   if (!window.google) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    window.initMap = loadMap;
    document.body.appendChild(script);
   } else {
    loadMap();
   }
  };

  loadGoogleMaps();
 }, [geometry, apiKey]);

 return (
  <div
   style={{ width: '100%', height: '600px', marginBottom: '2em' }}
   ref={mapContainerRef}></div>
 );
};

export default MapComponent;
