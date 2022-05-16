import { Link } from "react-router-dom";

const Calendar = () => {
  return (
    <div>
      <p>Пока у вас не выбраны активности. <Link to="/activities">Перейти в активности</Link></p>
    </div>
  )
}

export default Calendar;