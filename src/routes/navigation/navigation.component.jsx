import { Outlet, Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="app">
      <h1>
        <Link className="logo" to="/">
          Plin. Live your best day. Everyday
        </Link>
      </h1>
      <div className="menu">
        <NavLink
          to="/activities"
          className={({isActive}) => `menu-item ${isActive ? '-active' : ''}`}
        >
          Активности
        </NavLink>
        <NavLink
          to="/calendar"
          className={({isActive}) => `menu-item ${isActive ? '-active' : ''}`}
        >
          Календарь
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
