import React from 'react';
import PropTypes from 'prop-types';

class Filtro extends React.Component {
  render() {
    const { onInputChange, filter } = this.props;
    return (
      <div>
        <p>Buscar por nome:</p>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ onInputChange }
          name="filterName"
        />
        <button
          type="button"
          onClick={ filter }
        >
          Buscar
        </button>
      </div>
    );
  }
}

Filtro.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

export default Filtro;
