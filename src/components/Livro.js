import React from 'react';
import PropTypes from 'prop-types';
import '../css/layout.css';
import Personagens from './Personagens';

class Livro extends React.Component {
  render() {
    const { baralho, deleteButton, load } = this.props;
    return (
      <div className="all-cards">
        {
          // se load for false exibe os cards
          load === false
            ? baralho.map((carta) => (
              <div key={ carta.cardName }>
                <Personagens
                  carta={ carta }
                />

                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => deleteButton(carta.cardName) }
                >
                  Excluir
                </button>
              </div>
            ))
            : (<p>Carregando...</p>)
        }
      </div>
    );
  }
}

Livro.propTypes = {
  baralho: PropTypes.string.isRequired,
  deleteButton: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
};

export default Livro;
