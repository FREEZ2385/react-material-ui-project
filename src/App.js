import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import AppBarComponent from './component/Organisms/AppBarComponent';
import { CardPost } from './CardPost';
import CardComponent from './component/Atoms/CardComponent';

function App() {
  return (
    <div className="App">
      <AppBarComponent/>
      <Container fullWidth='md' style={{ display: 'flex', marginTop: 20 }}>
        {CardPost.map((data) => <CardComponent title={data.title} date={data.date} content={data.content}/>)}
      </Container>
    </div>
  );
}

export default App;
