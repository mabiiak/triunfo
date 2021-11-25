import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <h2>Filtros de busca</h2>
        <input
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
          onChange={ onChange }
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

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
