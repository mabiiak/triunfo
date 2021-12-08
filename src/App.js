import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './css/layout.css';

class App extends React.Component {
  render() {
    return (
      <body>
        <header>
          <h1 className="titleOne">Tryunfo</h1>
          <div className="titleTwo">
            <h2> Criador de NPC`s </h2>
            <h2> Pré-view</h2>
          </div>
        </header>
        <main>
          <Form />
          <Card />
        </main>
      </body>
    );
  }
}
export default App;
