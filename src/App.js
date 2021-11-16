import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.testeInput = this.testeInput.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.testeInput() });
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      newCard: [{ ...prevState }, ...prevState.newCard],
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
  }

  testeInput() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const max = 90;
    const min = 0;
    const sum = 210;

    const att1 = Number(cardAttr1);
    const att2 = Number(cardAttr2);
    const att3 = Number(cardAttr3);

    if (cardName === ''
    || cardDescription === ''
    || cardImage === '') return true;

    if (att1 < min || att1 > max || att1 === '') return true;
    if (att2 < min || att2 > max || att2 === '') return true;
    if (att3 < min || att3 > max || att3 === '') return true;
    if ((att1 + att2 + att3) > sum) return true;

    return false;
  }

  render() {
    const {
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          { ...this.state }
        />

        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
