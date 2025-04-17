import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/intelligence.css';
import '../../styles/common.css';

const Intelligence = () => {
  const items = [
    { id: 'The-Moto-maniac', name: 'Мото-маньяк', image: process.env.PUBLIC_URL + '/images/moto.jpg', description: 'Описание таланта Мото-маньяк.' },
    // Добавьте другие элементы
  ];

  return (
    <div className="container">
      <h2>Категория: Интеллект</h2>
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

export default Intelligence;
