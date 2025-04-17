import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Добро пожаловать в Talents Last</h2>
      <nav>
        <Link to="/instinct" style={{ margin: '10px' }}>Инстинкт</Link>
        <Link to="/intelligence" style={{ margin: '10px' }}>Интеллект</Link>
        <Link to="/fight" style={{ margin: '10px' }}>Бой</Link>
        <Link to="/price" style={{ margin: '10px' }}>Цена</Link>
        <Link to="/assembling" style={{ margin: '10px' }}>Сборка</Link>
        <Link to="/videos" style={{ margin: '10px' }}>Видео</Link>
      </nav>
    </div>
  );
};

export default MainMenu;
