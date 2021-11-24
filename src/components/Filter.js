import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <h2>Filtros de busca</h2>
        <input
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
        />
        <input
          type="text"
          placeholder="Raridade da carta"
        />
        <button
          id="buscador"
          type="submit"
          text="Buscar"
        >
          Buscar
        </button>
      </div>
    );
  }
}

export default Filter;
