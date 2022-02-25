import classNames from 'classNames';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './SectionToggle.css';

function SectionToggle({ children, open, sectionTitle }) {
  const [sectionOpen, setSectionOpen] = useState(open);

  const chevronClass = classNames('chevron', {
    open: sectionOpen,
  });

  return (
    <div className="section-toggler-wrapper">
      <div className="section-toggle" onClick={() => {
        setSectionOpen(!sectionOpen);
      }}>
        <h2>{sectionTitle}</h2>
        <div className={chevronClass} />
      </div>
      <CSSTransition
        in={sectionOpen}
        timeout={75}
        unmountOnExit
      >
        <div className="section-content">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
}

export default SectionToggle;
