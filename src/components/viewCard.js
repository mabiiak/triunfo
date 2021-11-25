import React, { Component } from 'react';
import CardList from './CardList';

class viewCard extends Component {
  render() {
    return (
      <div>
        {
          Object(newCard).filter((card) => card.cardRare === filterRare)
            .map((item) => (
              <div className="allCards" key={ Object(item).cardName }>
                <CardList
                  card={ item }
                  deleteButton={ this.deleteCard }
                />
              </div>
            ))
        }
      </div>
    );
  }
}
export default viewCard;
