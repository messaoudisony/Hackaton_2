import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../stores/index";
import { useParams } from "react-router-dom";
import { getAssociation } from "../stores/associasion";
import Icon from "@mdi/react";
import { mdiPhoneClassic, mdiEmail } from "@mdi/js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../styles/pages/association.module.scss";
import L from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconPng,
  iconUrl: markerIconPng,
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
});

export default function Association() {
  const dispatch = useAppDispatch();
  const params = useParams();

  const id = params?.id;
  const association = useAppSelector((state) => state.association?.association);
  const associations = useAppSelector(
    (state) => state.association?.associations
  );
  const defaultPosition =
    association?.latitude && association?.longitude
      ? [association?.latitude, association?.longitude]
      : [45.755828, 4.895709];

  useEffect(() => {
    dispatch(getAssociation(associations, id));
  }, [id]);

  return (
    <div className={"container " + styles.main}>
      <div className={styles.img}>
        <img src="/images/img02.jpeg" width={300} height={300} />
      </div>
      <div className="p-3">
        <h1 className="my-3">{association?.nom}</h1>
        <p className="d-flex gap-3">
          <Icon path={mdiPhoneClassic} size={2} />
          <span className="mt-2">+33 4 65 43 78 54</span>
        </p>
        <p className="d-flex gap-3">
          <Icon path={mdiEmail} size={2} />
          <span>{`${association?.adresse}, ${association?.code_postal} ${association?.commune}`}</span>
        </p>
        <p>{association?.presentation_resume}</p>
      </div>

      <div>
        <MapContainer
          center={defaultPosition}
          zoom={8}
          style={{ height: "100vh", width: "100%", minWidth: "350px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {association?.latitude && association?.longitude && (
            <Marker
              position={[association?.latitude, association?.longitude]}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
}
