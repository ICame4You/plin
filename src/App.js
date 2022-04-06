import { useState } from 'react';

import './App.css';

function App() {
  const [isActivityFormEnabled, setIsActivityFormEnabled] = useState(false);
  const [activityInput, setActivityInput] = useState('');
  const [activities, setActivities] = useState([]);

  const openActivityForm = () => {
    setIsActivityFormEnabled(!isActivityFormEnabled);
  };

  const addActivity = () => {
    setActivities((prevActivities) => [...prevActivities, activityInput]);
  };

  const handleChange = (event) => {
    setActivityInput(event.target.value);
    console.log(activityInput);
  };

  return (
    <div>
      <h1>Plin. Live your best day. Everyday</h1>
      <div>
        <span>Активности</span>
        <span>Календарь</span>
      </div>
      <div>
        <p>Чем ты планируешь заниматься в течении дня?</p>
        <button onClick={openActivityForm}>Добавь занятие</button>
      </div>
      {isActivityFormEnabled && (
        <div>
          <input
            type="text"
            onChange={handleChange}
            name="activity"
            value={activityInput}
          />
          <button onClick={addActivity}>Добавить</button>
        </div>
      )}
      <ul>
        {activities.map((activity, index) => (
          <li key={activity + index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
