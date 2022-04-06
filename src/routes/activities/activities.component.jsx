import { useState } from 'react';

const Activities = () => {
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
  };

  return (
    <div>
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
};

export default Activities;
