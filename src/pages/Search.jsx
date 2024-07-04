
import styles from '../styles/pages/search.module.scss';
import { useAppDispatch, useAppSelector } from "../stores/index";
import { DATA } from '../data/associations'
import { useEffect, useState } from "react";
import { getCommunesUniques, setCommuneSelect, getAssociations } from '../stores/associasion';
import MainSearch from '../components/search/MainSearch';

export default function Search() {

  const communes = useAppSelector((state) => state.association?.communes); 
  const associations = useAppSelector((state) => state.association?.associations); 
  const communeSelect = useAppSelector((state) => state.association?.communeSelect); 

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCommunesUniques())
    dispatch(getAssociations())
  }, [])

  const handleChange = (event) => {
    dispatch(setCommuneSelect(event?.target?.value));
  };

  const associationsFiltred =  associations?.filter(dt =>
    (communeSelect && communeSelect !== "") ? dt?.commune === communeSelect : dt?.id < 15
  );
 
  return (
    <div className={"container " + styles.main}>
      <select className="form-select" value={communeSelect} onChange={handleChange}>
       <option value="">Selectionnez votre commune</option>
       {communes?.map((commune, index) =>
       <option key={index} value={commune}>{commune}</option>
      )}
      </select>

      <div>
        <MainSearch associations={associationsFiltred} />
      </div>
    </div>
  );
}
