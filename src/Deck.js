import React, { Component } from 'react';

import Card from './Card';
import './Deck.css';

class Deck extends Component {
  static typeNameMap = [
    'angular',
    'd3',
    'jenkins',
    'postcss',
    'react',
    'redux',
    'sass',
    'supercharge',
    'ts',
    'webpack'  
  ]
  
  constructor(props) {
    super(props);
    this.state = { cards: this.generateCards()};
  }

  generateCards() {
    let cards = [];
    for(let i = 0; i < this.props.size; i++) {
      cards.push(Math.floor(i/2));
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

  render() {
    return (
      <div className="deck" >
        {this.state.cards.map((card, index) => 
          <Card type={card} key={index} />
        )}
      </div>
    );
  }
}

export default Deck;
