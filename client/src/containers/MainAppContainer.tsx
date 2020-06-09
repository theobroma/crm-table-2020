import React from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import HeaderComponent from '../components/Header/Header';
import TableComponent from '../components/Table/Table';

const Thing = styled.div`
  color: red;
`;
// import { todosSelector } from '../store/selectors';

interface Props {
  // activeTodoCount: number;
  // completedCount: number;
}

const MainApp: React.FC<Props> = (props) => {
  // const todos = useSelector(todosSelector).data;
  return (
    <div className="App">
      <Thing>Thing</Thing>
      <HeaderComponent />
      <TableComponent />
    </div>
  );
};

export default MainApp;
