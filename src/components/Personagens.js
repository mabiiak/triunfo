import React from 'react';
import PropTypes from 'prop-types';
import '../css/layout.css';

class Personagens extends React.Component {
  render() {
    const { carta } = this.props;

    return (
      <div className="carta-pronta">
        <fieldset data-testid="name-card">
          <legend>Nome:</legend>
          { carta.cardName }
        </fieldset>

        <img
          data-testid="image-card"
          src={ carta.cardImage }
          alt={ carta.cardName }
          width="190px"
        />

        <p data-testid="description-card">
          { carta.cardDescription }
        </p>

        <fieldset data-testid="attr1-card">
          <legend>Carisma:</legend>
          { carta.cardAttr1 }
        </fieldset>

        <fieldset data-testid="attr2-card">
          <legend>Sabedoria:</legend>
          { carta.cardAttr2 }
        </fieldset>

        <fieldset data-testid="attr3-card">
          <legend>Destreza:</legend>
          { carta.cardAttr3 }
        </fieldset>

        {
          carta.cardTrunfo && <p data-testid="trunfo-card"> Super Trunfo </p>
        }

        <p data-testid="rare-card">{ carta.cardRare }</p>
      </div>
    );
  }
}

Personagens.propTypes = {
  carta: PropTypes.bool.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Personagens;
