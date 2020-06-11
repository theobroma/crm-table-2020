import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import HeaderComponent from '../../@components/Header/Header';
import TableComponent from '../../@components/Table/Table';
import { clientsSelector } from '../../@store/clients/selectors';

const Thing = styled.div`
  color: red;
`;
// import { todosSelector } from '../store/selectors';

interface Props {
  // activeTodoCount: number;
  // completedCount: number;
}

const MainApp: React.FC<Props> = (props) => {
  const clientsData = useSelector(clientsSelector).data;
  return (
    <div className="App">
      <Thing>Thing</Thing>
      <HeaderComponent />
      <TableComponent data={clientsData} />
    </div>
  );
};

export default MainApp;
