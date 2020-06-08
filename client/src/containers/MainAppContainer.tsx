import React from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import HeaderComponent from '../components/Header/Header';

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
      <Thing>12312312312313</Thing>
      <HeaderComponent />
    </div>
  );
};

export default MainApp;
