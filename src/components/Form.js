import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/form-style.css';

import Atributos from './Atributos';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
    } = this.props;

    return (
      <div>
        <h2>
          Criar nova carta
        </h2>

        <form className="form-style">
          <label htmlFor="name">
            Nome
            <input
              id="name"
              name="cardName"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="descricao">
            Descrição
            <textarea
              id="descricao"
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <Atributos />

          <label htmlFor="img">
            Imagem
            <input
              id="img"
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="raridade">
            Raridade
            <select
              id="raridade"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option> normal </option>
              <option> raro </option>
              <option> muito raro </option>
            </select>
          </label>

          <div className="area-check">
            <label htmlFor="check">
              <input
                id="check"
                name="cardTrunfo"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Tryunfo
            </label>
          </div>

          <button
            data-testid="save-button"
            type="submit"
            // disabled={ isSaveButtonDisabled }
            // onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  // onSaveButtonClick: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.func.isRequired,
  // isSaveButtonDisabled: PropTypes.func.isRequired,
};

export default Form;
