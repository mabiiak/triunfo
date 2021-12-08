filterName: '',
filterRare: '',
filterTrunfo: false,
newCard:

// ------------------------

filter() {
  const { newCard, filterName, filterTrunfo } = this.state;
    const name = Object(newCard).filter((card) => card.cardName.includes(filterName))

    const rare = filter((card) => card.cardRare === filterRare)

    const trunfo = filter((card) => card.cardTrunfo === filterTrunfo)

    if(filterName.length > 0) {
      return (
        name.map((card) => (
          <div className="allCards" key={ Object(card).cardName }>
            <CardList
              card={ card }
              deleteButton={ this.deleteCard }
            />
          </div>
      )))
    }

    if(cardRare !== '') {
      return (
        rare.map((card) => (
          <div className="allCards" key={ Object(card).cardName }>
            <CardList
              card={ card }
              deleteButton={ this.deleteCard }
            />
          </div>
      )))
    }

    if(filterTrunfo === true) {
      trunfo.map((card) => (
        <div className="allCards" key={ Object(card).cardName }>
          <CardList
            card={ card }
            deleteButton={ this.deleteCard }
          />
        </div>
    ))
    }
}