import { NavLink, useLocation } from 'react-router-dom';
import styles from '../styles/components/navbar.module.scss';
import Icon from '@mdi/react';
import { mdiHomeCircleOutline, mdiHomeSearchOutline, mdiHelpCircleOutline} from '@mdi/js';

const LinkNav = ({link, icon}) => {

  const location = useLocation();
  const colorIcon = (link == location?.pathname) ? '#E60012' : '#00012E';

  return (
    <div className={styles.linkNav}>
      <NavLink to={link}>
        <Icon path={icon} size={2} color={colorIcon} />
      </NavLink>
    </div>
  )
}
export default function Navbar() {

  return (
   <div className={styles.container}>
   <LinkNav link="/" icon={mdiHomeCircleOutline} />
   <LinkNav link="/search" icon={mdiHomeSearchOutline} />
   <LinkNav link="/help" icon={mdiHelpCircleOutline} />
   </div>
  );
}
