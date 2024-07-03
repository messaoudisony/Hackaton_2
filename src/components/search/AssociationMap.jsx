import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconPng,
  iconUrl: markerIconPng,
  shadowUrl: 'leaflet/dist/images/marker-shadow.png',
});

export default function AssociationMap({associations}) {
  const defaultPosition = [45.755828, 4.895709]; 
  return (
    <MapContainer center={defaultPosition} zoom={11} style={{ height: '100vh', width: '100%', minWidth: "350px" }}>
      <LayersControl >
      <LayersControl.Overlay checked name="OSM">
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
              </LayersControl.Overlay>
              <LayersControl.Overlay name="Satellite">
                  <TileLayer url={"https://wxs.ign.fr/ortho/geoportail/wmts?" +
"&STYLE=normal" + "&FORMAT=image/jpeg" + "&LAYER=ORTHOIMAGERY.ORTHOPHOTOS"+ "&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0" +
"&TILEMATRIXSET=PM" + "&TILEMATRIX={z}" + "&TILEROW={y}" + "&TILECOL={x}"} />
              </LayersControl.Overlay>
      {associations?.map((association, index) => (
        association?.latitude && association?.longitude && (
          <Marker key={index} position={[association?.latitude, association?.longitude]}>
            <Popup>
              <h3>{association?.nom}</h3>
              <p>{association?.presentation_resume}</p>
              <p>{association?.adresse}, {association?.code_postal} {association?.commune}</p>
              <p>Types: {association?.types.join(', ')}</p>
            </Popup>
          </Marker>
        )
      ))}
      </LayersControl>
    </MapContainer>
  );
}
