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
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.validateButton() });
    });
  }

  validateButton() { // Nós testamos as condições em que o botão deve estar desabilitado, se o teste for com as condições em que ele é habilitado, logo que um critétio se cumpre ele habilita
    const {
      cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3, cardRare,
    } = this.state;

    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === '') return true;

    if (cardAttr1 < 0 || cardAttr1 > '90' || cardAttr1 === '') return true;
    if (cardAttr2 < 0 || cardAttr2 > '90' || cardAttr2 === '') return true;
    if (cardAttr3 < 0 || cardAttr3 > '90' || cardAttr3 === '') return true;
    if ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > '210') return true;

    return false;
  }

  render() {
    const { isSaveButtonDisabled } = this.state;
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
          <Form
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />

          <Card { ...this.state } />
        </main>
      </body>
    );
  }
}
export default App;
