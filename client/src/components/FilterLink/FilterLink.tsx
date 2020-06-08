import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { actions } from '../../store/filter/actions';
import { filterSelector } from '../../store/filter/selectors';
import { FilterItemType } from '../../store/filter/types';
import { Styled } from './FilterLink.styled';

interface Props {
  type?: any;
  toggleFilter?: any;
  filter?: any;
  filters?: any;
  activeFiltersCount?: any;
}

const FilterLink: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch();
  const filterData = useSelector(filterSelector).data;

  const filter2 = filterData.filter((f: FilterItemType) => {
    console.log('f:', f);
    console.log('type:', props.type);
    return f.name === props.type;
  })[0];

  // console.log(filter2);
  // const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   dispatch(actions.removeCompleted());
  // };

  // const renderClearButton = () => {
  //   if (completedCount > 0) {
  //     return (
  //       <button className="clear-completed" onClick={handleButtonClick}>
  //         Clear completed
  //       </button>
  //     );
  //   }
  //   return null;
  // };
  return (
    <Styled
    // className={cx({
    //   isDisabled: activeFiltersCount < 2 && filter.active,
    // })}
    >
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={() => dispatch(actions.toggleFilter(props.type))}
        className={cx({
          selected: props.filter === props.type,
          // active: filter.active,
          active: true,
          button: true,
        })}
      >
        {props.children}
      </a>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </Styled>
  );
});

export default FilterLink;

// export default class FilterLink extends React.Component<any, any> {
//   render() {
//     const { activeFiltersCount, filters } = this.props;

//     // get data of current filterLink
//     const filter = filters.filter((filter: any) => {
//       return filter.name == this.props.type.toLowerCase();
//     })[0];
//     // console.log(filter);
//     return (
//       <li
//         className={cx({
//           isDisabled: activeFiltersCount < 2 && filter.active,
//         })}
//       >
//         <a
//           href="#"
//           onClick={() => this.props.toggleFilter(this.props.type)}
//           className={cx({
//             selected: this.props.filter === this.props.type,
//             active: filter.active,
//             button: true,
//           })}
//         >
//           {this.props.children}
//         </a>
//       </li>
//     );
//   }
// }
