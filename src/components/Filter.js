import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onChange, onSelect } = this.props;
    return (
      <div>
        <h2>Filtros de busca</h2>
        <input
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
          onChange={ onChange }
        />
        <select data-testid="rare-filter" onChange={ onSelect }>
          <option selected> todas </option>
          <option> normal </option>
          <option> raro </option>
          <option> muito raro </option>
        </select>
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
  onSelect: PropTypes.func.isRequired,
};

export default Filter;
