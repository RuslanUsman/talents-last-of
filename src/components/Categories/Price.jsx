import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/price.css';
import '../../styles/common.css';

const Price = () => {
  const items = [
    { id: 'Mind', name: 'Ум', image: process.env.PUBLIC_URL + '/images/um.jpg', description: 'Описание Ум.' },
    // Добавьте другие элементы
  ];

  return (
    <div className="container">
      <h2>Категория: Цена</h2>
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

export default Price;
