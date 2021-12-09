import React from 'react';
import PropTypes from 'prop-types';
import '../css/form.css';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo, onInputChange,
      isSaveButtonDisabled, hasTrunfo, onSaveButtonClick,
    } = this.props;

    const trunfo = (
      <div className="checkbox">
        <label htmlFor="check">
          Triunfante?
          <input
            id="check"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            name="cardTrunfo"
            onChange={ onInputChange }
          />
        </label>
      </div>
    );

    return (
      <section>
        <form className="tabela">
          <fieldset>
            <legend>Nome</legend>
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              name="cardName"
              onChange={ onInputChange }
              placeholder="Yaren"
            />
          </fieldset>

          <fieldset>
            <legend>História</legend>
            <textarea
              data-testid="description-input"
              placeholder="Halfling - pés leves"
              value={ cardDescription }
              name="cardDescription"
              onChange={ onInputChange }
            />
          </fieldset>

          <fieldset className="att">
            <legend> Atributos </legend>
            <label htmlFor="att1">
              Carisma:
              <input
                type="number"
                data-testid="attr1-input"
                id="att1"
                value={ cardAttr1 }
                name="cardAttr1"
                onChange={ onInputChange }
                placeholder="+1"
              />
            </label>

            <label htmlFor="att2">
              Força:
              <input
                type="number"
                data-testid="attr2-input"
                id="att2"
                value={ cardAttr2 }
                name="cardAttr2"
                onChange={ onInputChange }
                placeholder="+2"
              />
            </label>

            <label htmlFor="att3">
              Destreza:
              <input
                type="number"
                data-testid="attr3-input"
                id="att3"
                value={ cardAttr3 }
                name="cardAttr3"
                onChange={ onInputChange }
                placeholder="0"
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Aparencia:</legend>
            <input
              data-testid="image-input"
              type="text"
              value={ cardImage }
              name="cardImage"
              onChange={ onInputChange }
              placeholder="url"
            />
          </fieldset>

          <fieldset>
            <legend>Raridade</legend>
            <select
              data-testid="rare-input"
              id="select"
              value={ cardRare }
              name="cardRare"
              onChange={ onInputChange }
            >
              <option selected> normal </option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </fieldset>

          <div>
            {
              hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : trunfo
            }
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
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.func.isRequired,
};

export default Form;
