import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // newCard,
    } = this.props;

    return (
      <section className="view-card">
        <h2>Previa </h2>
        <div>
          <p data-testid="name-card">
            Nome:
            { cardName }
          </p>
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
            width="200px"
          />

          <p data-testid="description-card">
            { cardDescription }
          </p>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          {
            cardTrunfo && <p data-testid="trunfo-card"> Super Trunfo </p>
          }
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
};

export default Card;
