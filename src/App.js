import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Activities from './routes/activities/activities.component';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}>
        <Route path="activities" element={<Activities />} />
      </Route>
    </Routes>
  );
}

export default App;
