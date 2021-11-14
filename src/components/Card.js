import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
  Até o momento você criou dois componentes que recebem props, agora está na hora de criar o estado dos componentes.

  Os componentes Form e Card irão compartilhar o mesmo estado para exibir as mesmas informações (isso já te dá uma dica de onde o estado deve estar, não é mesmo?). ---> criar em App

  Quando alguma informação é digitada em algum campo do formulário, ---> form envia dado para app
  o componente Card deve exibir a mesma informação em tempo real, criando um preview da carta antes de ela ser salva no baralho a funcionalidade de salvar será feita nos próximos requisitos).

  Você deverá usar a prop onInputChange para passar uma callback para lidar com os eventos de onChange
  dos inputs do formulário.

  Não se esqueça que os valores dos inputs (que também são passados por props) também devem ser salvos em um estado.

  Dica: o mesmo estado usado para controlar os inputs do formulário podem ser passados para o componente Card.
*/

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
    } = this.props;

    return (
      <div>
        <p data-testid="name-card">{ cardName }</p>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
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
