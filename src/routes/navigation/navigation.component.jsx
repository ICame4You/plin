import { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const selectMenuItem = (menuNumber) => {
    setActiveMenuItem(menuNumber);
  };

  return (
    <div className="app">
      <h1>
        <Link className="logo" to="/">
          Plin. Live your best day. Everyday
        </Link>
      </h1>
      <div className="menu">
        <span
          className={'menu-item ' + (activeMenuItem === 1 ? '-active' : '')}
          onClick={() => selectMenuItem(1)}
        >
          <Link to="/activities">Активности</Link>
        </span>
        <span
          className={'menu-item ' + (activeMenuItem === 2 ? '-active' : '')}
          onClick={() => selectMenuItem(2)}
        >
          <Link to="/calendar">Календарь</Link>
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
