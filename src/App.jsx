import React from 'react';
import Card from './components/Card';
import './components/Card.css';
import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Tarjetas de Proyectos</h1> 
      <Card 
        title="Proyecto 1"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        assignedTo="Enzo Bueno"
        startDate="2024-09-18"
        endDate="2024-10-18"
      />
      <Card 
        title="Proyecto 2"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        assignedTo="Mathias Sellanes"
        startDate="2024-09-20"
        endDate="2024-11-20"
      />
      <Card 
        title="Proyecto 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        assignedTo="Mauro Machado"
        startDate="2024-09-25"
        endDate="2024-12-25"
      />
    </div>
  );
}

export default App;
