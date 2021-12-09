import React from 'react';
import Form from './components/Form';
import Filtro from './components/Filtro';
import Livro from './components/Livro';
import Card from './components/Card';
import './css/layout.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      baralho: [],
      hasTrunfo: '',
      filterName: '',
      filterOn: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.testeTrunfo = this.testeTrunfo.bind(this);
    this.filter = this.filter.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.validateButton() });
    });
  }

  onSaveButtonClick(event) {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo } = this.state;
    event.preventDefault();
    this.setState((prevState) => ({
      baralho: [...prevState.baralho, {
        cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo,
      }],
    }), () => this.setState(
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      },
    ));

    if (cardTrunfo) this.setState({ hasTrunfo: true });
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

  deleteButton(cardName) {
    this.setState({ load: true });
    const { baralho } = this.state;
    const filtroRemovedor = baralho.filter((carta) => carta.cardName !== cardName);

    this.setState({ baralho: filtroRemovedor }, () => this.testeTrunfo());
    this.setState({ load: false });
  }

  testeTrunfo() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) setState({ hasTrunfo: true });
    this.setState({ hasTrunfo: false });
  }

  filter() {
    this.setState({ filterOn: true });
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
            onSaveButtonClick={ this.onSaveButtonClick }
            { ...this.state }
          />

          <Card { ...this.state } />

          <Filtro
            onInputChange={ this.onInputChange }
            filter={ this.filter }
            { ...this.state }
          />

          <Livro { ...this.state } deleteButton={ this.deleteButton } />
        </main>
      </body>
    );
  }
}
export default App;
