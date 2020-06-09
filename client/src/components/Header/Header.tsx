import * as React from 'react';
import FilterLink from '../FilterLink/FilterLink';

interface Props {
  // activeTodoCount: number;
  // completedCount: number;
}

const Header: React.FC<Props> = React.memo((props) => {
  return (
    <header className="header">
      <div className="header-title">Карточки</div>
      <div className="buttons">
        <ul className="filters">
          <FilterLink type="GOLD">Gold</FilterLink>
          <FilterLink type="SILVER">Silver</FilterLink>
          <FilterLink type="WOOD">Wood</FilterLink>
          <FilterLink type="STANDART">Standart</FilterLink>
        </ul>
      </div>
    </header>
  );
});

export default Header;
