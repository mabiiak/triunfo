import React from 'react';
import PropTypes from 'prop-types';
import '../css/layout.css';
import Personagens from './Personagens';

class Livro extends React.Component {
  render() {
    const { baralho, deleteButton, filterName } = this.props;
    return (
      <div className="all-cards">
        {
          filterName !== '' // se for igual a true filtra por nome, se nao exibe todos
            ? baralho.filter((carta) => carta.cardName.includes(filterName))
              .map((card) => (
                <div key={ card.cardName }>
                  <Personagens carta={ card } />
                  <button
                    data-testid="delete-button"
                    type="button"
                    onClick={ () => deleteButton(card.cardName) }
                  >
                    Excluir
                  </button>
                </div>
              ))
            : baralho.map((carta) => (
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
        }
      </div>
    );
  }
}

Livro.propTypes = {
  baralho: PropTypes.string.isRequired,
  deleteButton: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default Livro;
