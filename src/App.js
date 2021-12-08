import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './css/layout.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

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
          <Form onInputChange={ this.onInputChange } />
          <Card { ...this.state } />
        </main>
      </body>
    );
  }
}
export default App;
