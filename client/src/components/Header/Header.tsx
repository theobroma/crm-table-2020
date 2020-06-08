import * as React from 'react';
import FilterLink from '../FilterLink/FilterLink';

interface Props {
  // activeTodoCount: number;
  // completedCount: number;
}

const Header: React.FC<Props> = React.memo((props) => {
  const someProps = {
    // toggleFilter: props.toggleFilter,
    // filter: props.filter,
    // filters: props.filters,
    // activeFiltersCount: props.activeFiltersCount,
  };
  return (
    <header className="header">
      <div className="header-title">Карточки</div>
      <div className="buttons">
        <ul className="filters">
          <FilterLink type="GOLD" {...someProps}>
            Gold
          </FilterLink>
          <FilterLink type="SILVER" {...someProps}>
            Silver
          </FilterLink>
          <FilterLink type="WOOD" {...someProps}>
            Wood
          </FilterLink>
          <FilterLink type="STANDART" {...someProps}>
            Standart
          </FilterLink>
        </ul>
      </div>
    </header>
  );
});

export default Header;
