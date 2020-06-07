import React from 'react';
import { useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components/macro';

const Thing = styled.div`
  color: red;
`;
// import HeaderComponent from '../components/Header/Header';
// import ListComponent from '../components/List/List';
// import FooterComponent from '../components/Footer/Footer';
// import { todosSelector } from '../store/selectors';

const MainApp: React.FC = (props: any) => {
  // const todos = useSelector(todosSelector).data;
  return (
    <div className="App">
      <section className="todoapp">
        <div>Components</div>
        <Thing>12312312312313</Thing>
      </section>
    </div>
  );
};

export default MainApp;
