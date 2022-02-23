import './NavigationItem.css';

function NavigationItem({ onClick, text, Icon }) {
  return (
    <div className="nav-link" onClick={onClick}>
      {text}
      <Icon className="nav-icon" />
    </div>
  );
}

export default NavigationItem;
