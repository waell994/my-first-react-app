import { useState } from "react";
import "./App.css";

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    alert(`Вы нажали на кнопку ${clickCount + 1} раз(а)!`);
  };

  return (
    <div className="app">
      <h1>📚 Расписание пар</h1>

      <p className="description">
        Ваше расписание на сегодня. Все пары проходят в 3 корпусе.
      </p>

      <div className="schedule-header">
        <span>Сегодня: {new Date().toLocaleDateString('ru-RU', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</span>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="time">09:30 - 11:00</span>
          <span className="cabinet">Каб. 301</span>
        </div>
        <h2>Математический анализ</h2>
        <p className="teacher">Преподаватель: Иванов И.И.</p>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="time">11:20 - 12:50</span>
          <span className="cabinet">Каб. 405</span>
        </div>
        <h2>Программирование (Java)</h2>
        <p className="teacher">Преподаватель: Петрова С.В.</p>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="time">13:30 - 15:00</span>
          <span className="cabinet">Каб. 210</span>
        </div>
        <h2>Английский язык</h2>
        <p className="teacher">Преподаватель: Смирнова А.К.</p>
      </div>

      <button onClick={handleClick}>
        Добавить заметку
      </button>

      <div className="note-info">
        Нажатий: {clickCount}
      </div>
    </div>
  );
}

export default App;