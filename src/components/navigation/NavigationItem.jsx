import { Link } from 'react-router-dom';

import './NavigationItem.css';

function NavigationItem({ Icon, linkTarget, onClick, text }) {
  return (
    <div className="nav-link">
      {linkTarget && <Link onClick={onClick} to={linkTarget}>{text}</Link>}
      {!linkTarget && <a onClick={onClick}>{text}</a>}
      <Icon className="nav-icon" />
    </div>
  );
}

export default NavigationItem;
