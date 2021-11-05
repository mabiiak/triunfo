/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './css/form-style.css';

class Form extends Component {
  render() {
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
              placeholder="nome da carta"
            />
          </label>

          <label htmlFor="descricao">
            Descrição
            <textarea
              id="descricao"
              data-testid="description-input"
              placeholder="descrição da carta"
            />
          </label>

          <label htmlFor="att1">
            Atributo 1:
            <input
              id="att1"
              type="number"
              data-testid="attr1-input"
              placeholder="1° atributo"
            />
          </label>

          <label htmlFor="att2">
            Atributo 2:
            <input
              id="att2"
              type="number"
              data-testid="attr2-input"
              placeholder="2° atributo"
            />
          </label>

          <label htmlFor="att3">
            Atributo 3:
            <input
              id="att3"
              type="number"
              data-testid="attr3-input"
              placeholder="3° atributo"
            />
          </label>

          <label htmlFor="img">
            Imagem
            <input
              id="img"
              type="text"
              data-testid="image-input"
              placeholder="link da imagem"
            />
          </label>

          <label htmlFor="raridade">
            Raridade
            <select id="raridade" data-testid="rare-input">
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
              <input id="check" type="checkbox" data-testid="trunfo-input" />
              Super Tryunfo
            </label>
          </div>

          <button data-testid="save-button" type="submit">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
