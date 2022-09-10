import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import data from './data/data';

function App() {

  return (
    <div className="wrapper">
      {data.map((cardInfo) => {
        return (
          <Card img={cardInfo.img} key={cardInfo.id} link={cardInfo.link}>
            <h2>{cardInfo.title}</h2>
            <span>{cardInfo.description}</span>
          </Card>
        )
      })}
    </div>
  );
}

export default App;
