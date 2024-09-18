import React from 'react';
import Card from './components/Card';
import './App.css'; // Asegúrate de importar el CSS
import './components/Card.css'; // Asegúrate de importar el CSS

function App() {
  return (
    <div className="App">
      <h1>Tarjetas de Proyectos</h1>
      <div className="cards-container">
        <Card>
          <h2>Proyecto 1</h2>
          <p>Descripción del proyecto 1.</p>
          <p><strong>Asignado a:</strong> Juan Pérez</p>
          <p><strong>Fecha de inicio:</strong> 2024-09-18</p>
          <p><strong>Fecha de fin:</strong> 2024-10-18</p>
        </Card>

        <Card>
          <h2>Proyecto 2</h2>
          <p>Descripción del proyecto 2.</p>
          <p><strong>Asignado a:</strong> Ana García</p>
          <p><strong>Fecha de inicio:</strong> 2024-09-20</p>
          <p><strong>Fecha de fin:</strong> 2024-11-20</p>
        </Card>

        <Card>
          <h2>Proyecto 3</h2>
          <p>Descripción del proyecto 3.</p>
          <p><strong>Asignado a:</strong> Carlos López</p>
          <p><strong>Fecha de inicio:</strong> 2024-09-25</p>
          <p><strong>Fecha de fin:</strong> 2024-12-25</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
