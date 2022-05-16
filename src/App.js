import { Routes, Route, Link } from 'react-router-dom';

import Home from './routes/home/home.component';
import Activities from './routes/activities/activities.component';
import Navigation from './routes/navigation/navigation.component';
import Calendar from './routes/calendar/calendar.component';

import './App.css';

function NoMatch() {
  return (
    <div>
      <h2>Упс! Кажется такой страницы не существует.</h2>
      <p>
        <Link to="/">Перейдите на главную страницу</Link>
      </p>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="activities" element={<Activities />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
