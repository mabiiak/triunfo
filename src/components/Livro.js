import React from 'react';
import PropTypes from 'prop-types';
import '../css/layout.css';
import Personagens from './Personagens';

class Livro extends React.Component {
  render() {
    const { baralho, deleteButton, filterName, filterRare } = this.props;

    const raridade = (
      baralho.filter((carta) => carta.cardRare === filterRare)
        .map((cardRare) => (
          <div key={ cardRare.cardRareName }>
            <Personagens carta={ cardRare } />
            <button
              data-testid="delete-button"
              type="button"
              onClick={ () => deleteButton(cardRare.cardName) }
            >
              Excluir
            </button>
          </div>
        ))
    );

    const nomes = (
      baralho.filter((carta) => carta.cardName.includes(filterName))
        .map((cardName) => (
          <div key={ cardName.cardName }>
            <Personagens carta={ cardName } />
            <button
              data-testid="delete-button"
              type="button"
              onClick={ () => deleteButton(cardName.cardName) }
            >
              Excluir
            </button>
          </div>
        ))
    );

    const todas = (
      baralho.map((carta) => (
        <div key={ carta.cardName }>
          <Personagens carta={ carta } />

          <button
            data-testid="delete-button"
            type="button"
            onClick={ () => deleteButton(carta.cardName) }
          >
            Excluir
          </button>
        </div>
      ))
    );

    return (
      <div className="all-cards">
        { filterName !== '' && nomes }
        { filterRare !== '' && raridade }
        { filterRare === 'todas' && todas }
        { (filterRare === '' && filterName === '') && todas }
      </div>
    );
  }
}

Livro.propTypes = {
  baralho: PropTypes.string.isRequired,
  deleteButton: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
};

export default Livro;
