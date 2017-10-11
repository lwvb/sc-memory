import React, { Component } from "react";

import Card from "./Card";
import "./Deck.css";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: this.generateCards(), tries: 0 };
    this.flipCard = this.flipCard.bind(this);
  }

  generateCards() {
    let cards = [];
    for (let i = 0; i < this.props.size; i++) {
      cards.push({
        type: Math.floor(i / 2),
        flipped: false,
        removed: false
      });
    }
    return this.shuffleArray(cards);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getFlippedCards(cards) {
    return cards.reduce((flipped, card) => {
      if (card.flipped) {
        flipped.push(card);
      }
      return flipped;
    }, []);
  }

  flipCard(number) {
    let cards = this.state.cards.slice();
    cards[number].flipped = true;

    let flipped = this.getFlippedCards(cards);
    if (flipped.length < 2) {
      this.setState({ cards: cards });
      return;
    }
    if (flipped[0].type === flipped[1].type) {
      flipped[0].removed = true;
      flipped[1].removed = true;
    } 
    flipped[0].flipped = false;
    flipped[1].flipped = false;
    this.setState({ cards: cards, tries: this.state.tries + 1 });
  }

  render() {
    return (
      <div className="deck">
        {this.state.cards.map((card, index) => (
          <Card
            type={card.type}
            key={index}
            number={index}
            onFlip={this.flipCard}
            flipped={card.flipped}
            removed={card.removed}
          />
        ))}
      </div>
    );
  }
}

export default Deck;
