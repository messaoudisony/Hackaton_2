import React from 'react';
import styles from '../../styles/pages/search.module.scss';
import { NavLink } from 'react-router-dom';

const Card = ({association}) => {
  return (
    <div className={styles.card}>
      <NavLink to={`/association/${association?.id}`}>
      <h3>{association?.nom}</h3>
      <h5>{association?.adresse}</h5>
      <h5>{association?.commune}</h5>
    </NavLink>
    </div>
  )
}

export default function AssociationsList({associations}) {
  return (
    <div>
      {associations?.map((association, index)=> 
      <Card key={index} association={association} />
      )}
    </div>
  );
}
