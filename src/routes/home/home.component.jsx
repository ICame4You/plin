import { useState } from 'react';

import { Outlet } from 'react-router-dom';

const Home = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const selectMenuItem = (menuNumber) => {
    setActiveMenuItem(menuNumber);
  };

  return (
    <div className="app">
      <h1>Plin. Live your best day. Everyday</h1>
      <div className="menu">
        <span
          className={'menu-item ' + (activeMenuItem === 1 ? '-active' : '')}
          onClick={() => selectMenuItem(1)}
        >
          Активности
        </span>
        <span
          className={'menu-item ' + (activeMenuItem === 2 ? '-active' : '')}
          onClick={() => selectMenuItem(2)}
        >
          Календарь
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
