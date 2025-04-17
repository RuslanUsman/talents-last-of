import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/fight.css';
import '../../styles/common.css';

const Fight = () => {
  const items = [
    { id: 'The-Gangsterist', name: 'Ганстер', image: process.env.PUBLIC_URL + '/images/ganster.jpg', description: 'Описание таланта Ганстер.' },
    // Добавьте другие элементы
  ];

  return (
    <div className="container">
      <h2>Категория: Бой</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Вернуться в главное меню</button>
      </Link>
    </div>
  );
};

export default Fight;

