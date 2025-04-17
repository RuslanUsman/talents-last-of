import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/assembling.css';
import '../../styles/common.css';

const Assembling = () => {
  const items = [
    { id: 'Ephesus', name: 'Сборка на Эфес', image: process.env.PUBLIC_URL + '/images/efes.jpg', description: 'Описание Эфес.' },
  ];

  return (
    <div className="container">
      <h2>Категория: Сборка</h2>
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

export default Assembling;
