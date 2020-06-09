import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { actions } from '../../store/filter/actions';
import {
  filterSelector,
  activeFiltersSelector,
} from '../../store/filter/selectors';
import { FilterItemType, FilterType } from '../../store/filter/types';
import { Styled } from './FilterLink.styled';

interface Props {
  type: FilterType;
}

const FilterLink: React.FC<Props> = React.memo(({ children, type }) => {
  const dispatch = useDispatch();
  const filterData = useSelector(filterSelector).data;
  const activeFiltersCount = useSelector(activeFiltersSelector).length;

  const currentFilter = filterData.filter((f: FilterItemType) => {
    return f.name === type;
  })[0];

  return (
    <Styled
      className={cx({
        // prevent last active btn from disabling
        isDisabled: activeFiltersCount < 2 && currentFilter.active,
      })}
    >
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={() => dispatch(actions.toggleFilter(type))}
        className={cx({
          // selected: props.filter === props.type,
          active: currentFilter.active,
          button: true,
        })}
      >
        {children}
      </a>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </Styled>
  );
});

export default FilterLink;
