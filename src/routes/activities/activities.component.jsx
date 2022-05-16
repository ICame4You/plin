import { useState, useContext } from 'react';
import { MainContext } from '../../contexts/main.context';

const Activities = () => {
  const [isActivityFormEnabled, setIsActivityFormEnabled] = useState(false);
  const [activityInput, setActivityInput] = useState('');
  const [activities, setActivities] = useState([]);

  const {setMainInfo} = useContext(MainContext)
  const {mainInfo} = useContext(MainContext)

  const openActivityForm = () => {
    setIsActivityFormEnabled(!isActivityFormEnabled);
  };

  const addActivity = () => {
    setActivities((prevActivities) => [...prevActivities, activityInput]);
    setMainInfo((prevActivities) => [...prevActivities, activityInput]);
  };

  const handleChange = (event) => {
    setActivityInput(event.target.value);
  };

  return (
    <div>
      <div>
        <p>Здесь вам необходимо добавить свои события</p>
        <button onClick={openActivityForm}>Добавить событие</button>
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
        {mainInfo.map((activity, index) => (
          <li key={activity + index}>{activity}</li>
        ))}
      </ul>
      <p>{mainInfo}</p>
    </div>
  );
};

export default Activities;
