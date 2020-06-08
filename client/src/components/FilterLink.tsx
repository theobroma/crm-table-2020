import React from 'react';
import cx from 'classnames';

interface Props {
  type?: any;
  toggleFilter?: any;
  filter?: any;
  filters?: any;
  activeFiltersCount?: any;
}

const FilterLink: React.FC<Props> = React.memo((props) => {
  // const dispatch = useDispatch();

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
  return <div>link</div>;
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
