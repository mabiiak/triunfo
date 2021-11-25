/* eslint-disable react/jsx-key */
import React from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

import './css/card-style.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: '',
      newCard: '',
      filterName: '',
      filterRare: '',
      click: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.testeInput = this.testeInput.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.testeTrunfo = this.testeTrunfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.filterNameChange = this.filterNameChange.bind(this);
    this.filterName = this.filterName.bind(this);
    this.rareChange = this.rareChange.bind(this);
    this.filterRare = this.filterRare.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.testeInput() });
    });
  }

  onSaveButtonClick(event) {
    const { cardTrunfo } = this.state;
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

    if (cardTrunfo) this.testeTrunfo();
  }

  filterNameChange({ target }) {
    const { value } = target;

    this.setState({
      filterName: value,
    });
  }

  filterName() {
    const { newCard, filterName } = this.state;
    const name = Object(newCard).filter((card) => card.cardName.includes(filterName))
      .map((card) => (
        <div className="allCards" key={ Object(card).cardName }>
          <CardList
            card={ card }
            deleteButton={ this.deleteCard }
          />
        </div>
      ));
    return name;
  }

  filterRare() {
    const { newCard, filterRare } = this.state;
    if (filterRare === 'todas') {
      return (
        Object(newCard).map((item) => (
          <div className="allCards" key={ Object(item).cardName }>
            <CardList
              card={ item }
              deleteButton={ this.deleteCard }
            />
          </div>
        ))
      );
    }

    if (filterRare === 'normal') {
      return (
        Object(newCard).filter((card) => card.cardRare === filterRare)
          .map((normalCard) => (
            <div className="allCards" key={ Object(normalCard).cardName }>
              <CardList
                card={ normalCard }
                deleteButton={ this.deleteCard }
              />
            </div>
          ))
      );
    }

    if (filterRare === 'raro') {
      return (
        Object(newCard).filter((card) => card.cardRare === filterRare)
          .map((rareCard) => (
            <div className="allCards" key={ Object(rareCard).cardName }>
              <CardList
                card={ rareCard }
                deleteButton={ this.deleteCard }
              />
            </div>
          ))
      );
    }

    if (filterRare === 'muito raro') {
      return (
        Object(newCard).filter((card) => card.cardRare === filterRare)
          .map((superRareCard) => (
            <div className="allCards" key={ Object(superRareCard).cardName }>
              <CardList
                card={ superRareCard }
                deleteButton={ this.deleteCard }
              />
            </div>
          ))
      );
    }
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

  testeTrunfo() {
    const {
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  deleteCard(cardName) {
    const { newCard } = this.state;

    const listCard = Object(newCard).filter((card) => card.cardName !== cardName);

    console.log(listCard);

    this.setState({
      newCard: listCard,
    }, () => this.testeTrunfo());

    // console.log(listCard);
  }

  rareChange({ target }) {
    const { value } = target;
    this.setState({
      filterRare: value,
    });
  }

  render() {
    const {
      isSaveButtonDisabled,
      filterName,
      filterRare,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="align">
          <Form
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            { ...this.state }
          />
          <Card
            { ...this.state }
            teste={ this.testeTrunfo }
          />
        </div>

        <Filter
          { ...this.state }
          onChange={ this.filterNameChange }
          onSelect={ this.rareChange }
        />
        { filterName.length > 0 && this.filterName() }
        { filterRare !== '' && this.filterRare() }
      </div>
    );
  }
}
export default App;
