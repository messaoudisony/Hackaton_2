import {useState} from 'react';
import styles from '../../styles/pages/search.module.scss';
import AssociationsList from './AssociationsList';
import AssociationMap from './AssociationMap';

export default function MainSearch({associations}) {
  const [showMap, setShowMap] = useState(false)
  return (
    <div>
      <div className={styles.btnSwitch}>
      <button className={styles.btn + ' ' + (!showMap ? styles.btnActive : '')} onClick={() => setShowMap(false)}>List</button>
      <button className={styles.btn + ' ' + (showMap ? styles.btnActive : '')} onClick={() => setShowMap(true)}>Carte</button>
      </div>

      <div>
        {!!showMap ?
        <AssociationMap associations={associations} />
        :
        <AssociationsList associations={associations} />
        }
      </div>
    </div>
  );
}
