import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import AppBarComponent from './component/Organisms/AppBarComponent';
import { CardPost } from './CardPost';
import { ComponentGuideList } from './ComponentGuideList';
import CardComponent from './component/Atoms/CardComponent';
import ControlledAccordions from './component/Molecules/ControlledAccordions';
import FloatingActionButtons from './component/Atoms/FloatingActionButtons';

function App() {
  return (
    <div className="App">
      <AppBarComponent/>
      <Container fullWidth='md' style={{ display: 'flex', marginTop: 20, justifyContent: 'center' }}>
        {CardPost.map((data) => <CardComponent title={data.title} date={data.date} content={data.content} image={data.image}/>)}
      </Container>
      <Container fullWidth='md' style={{ display: 'flex', marginTop: 20 }}>
        <ControlledAccordions componentGuideList = {ComponentGuideList}/>
      </Container>
      <FloatingActionButtons/>
    </div>
  );
}

export default App;
