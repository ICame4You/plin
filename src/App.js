import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Activities from './routes/activities/activities.component';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="activities" element={<Activities />} />
      </Route>
    </Routes>
  );
}

export default App;
