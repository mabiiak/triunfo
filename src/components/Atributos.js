import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Atributos extends Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      onInputChange,
    } = this.props;

    return (
      <section>
        <label htmlFor="att1">
          Atributo 1:
          <input
            id="att1"
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>

        <label htmlFor="att2">
          Atributo 2:
          <input
            id="att2"
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>

        <label htmlFor="att3">
          Atributo 3:
          <input
            id="att3"
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>
      </section>
    );
  }
}

Atributos.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Atributos;
