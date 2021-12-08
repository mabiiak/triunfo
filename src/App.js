import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <body>
        <header>
          <h1>Tryunfo</h1>
          <div>
            <h2> Criador de NPC`s </h2>
          </div>
        </header>
        <main>
          <Form />
        </main>
      </body>
    );
  }
}
export default App;
