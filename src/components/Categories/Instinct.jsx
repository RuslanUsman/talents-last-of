import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/instinct.css';
import '../../styles/common.css';

const Instinct = () => {
  const items = [
    { id: 'radio-stability', name: 'Радио-устойчивость', image: process.env.PUBLIC_URL + '/images/radioustoichiv.jpg', description: 'Описание таланта Радио-устойчивость.' },
    // Добавьте другие элементы
  ];

  return (
    <div className="container">
      <h2>Категория: Инстинкт</h2>
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

export default Instinct;

