import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/card-style.css';

class CardList extends Component {
  render() {
    const {
      card,
      deleteButton,
    } = this.props;

    return (
      <div className="cardzito">
        <h3>
          { card.cardName }
        </h3>
        <img
          src={ card.cardImage }
          alt={ card.cardName }
        />
        <p>
          { card.cardDescription }
        </p>
        <p>Atributos</p>
        <ul>
          <li>
            1° Atributo:
            { ` ${card.cardAttr1}` }
          </li>
          <li>
            2° Atributo:
            { ` ${card.cardAttr2}` }
          </li>
          <li>
            3° Atributo:
            { ` ${card.cardAttr3}` }
          </li>
        </ul>

        <p>{ card.cardRare }</p>
        { card.cardTrunfo ? <p>Super Trunfo</p> : <p>Não é o Trunfo</p>}

        <button
          data-testid="delete-button"
          type="button"
          onClick={ () => deleteButton(card.cardName) }
        >
          Excluir
        </button>
      </div>
    );
  }
}

CardList.propTypes = {
  card: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteButton: PropTypes.func.isRequired,
};

export default CardList;
