import React, { Component } from "react";

import Card from "./Card";
import "./Deck.css";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: this.generateCards(), tries: 0 };
    this.flipCard = this.flipCard.bind(this);
    this.flipBack = this.flipBack.bind(this);
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

  cardsLeft(cards) {
    return cards.reduce((left, card) => {
      if (!card.removed) {
        left++;
      }
      return left;
    }, 0);
  }

  flipBack() {
    let cards = this.state.cards.slice();
    let flipped = this.getFlippedCards(cards);
    if (flipped.length >= 2) {
      flipped[0].flipped = false;
      flipped[1].flipped = false;
      this.setState({ cards: cards, waiting: false });
    }
  }

  flipCard(number) {
    if (this.state.cards[number].removed) {
      return;
    }
    if (this.state.waiting) {
      this.flipBack();
    }

    let cards = this.state.cards.slice();
    let tries = this.state.tries;
    let waiting = false;
    let done = undefined;

    cards[number].flipped = true;
    let flipped = this.getFlippedCards(cards);
    if (flipped.length == 2) {
      tries++;
      waiting = true;
      window.setTimeout(this.flipBack, 1000);

      if (flipped[0].type === flipped[1].type) {
        flipped[0].removed = true;
        flipped[1].removed = true;
      }
      if (this.cardsLeft(cards) === 0) {
        done = this.props.win(this.state.tries);
      }
    }
    this.setState({ cards, tries, waiting, done });
  }

  render() {
    if (this.state.done) {
      return (
        <div className="deck-done" onClick={this.props.restart}>
          <p>{this.state.done}</p>
          <p>Click to restart</p>
        </div>
      );
    }

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
