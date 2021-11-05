import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/form-style.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

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
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="att1">
            Atributo 1:
            <input
              id="att1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="att2">
            Atributo 2:
            <input
              id="att2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="att3">
            Atributo 3:
            <input
              id="att3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="img">
            Imagem
            <input
              id="img"
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
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>
                normal
              </option>
              <option>
                raro
              </option>
              <option>
                muito raro
              </option>
            </select>
          </label>

          <div className="area-check">
            <label htmlFor="check">
              <input
                id="check"
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
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
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
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
