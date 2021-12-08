import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.props;
    return (
      <div className="preview">
        <fieldset data-testid="name-card">
          <legend>Nome:</legend>
          { cardName }
        </fieldset>

        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          width="190px"
        />

        <p data-testid="description-card">
          { cardDescription }
        </p>

        <fieldset data-testid="attr1-card">
          <legend>Carisma:</legend>
          { cardAttr1 }
        </fieldset>

        <fieldset data-testid="attr2-card">
          <legend>Sabedoria:</legend>
          { cardAttr2 }
        </fieldset>

        <fieldset data-testid="attr3-card">
          <legend>Destreza:</legend>
          { cardAttr3 }
        </fieldset>

        {
          cardTrunfo && <p data-testid="trunfo-card"> Super Trunfo </p>
        }

        <p data-testid="rare-card">{ cardRare }</p>

      </div>
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
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
