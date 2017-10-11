import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
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
    this.state = { flipped: false};
    this.flip = this.flip.bind(this);
  }

  getFaceImgTag() {
    let name = Card.typeNameMap[this.props.type];
    let src = './assets/'+ name + '.png';
    return (
      <img src={src} alt={name} />
    );
  }

  flip() {
    this.setState({ flipped: !this.state.flipped });
  }

  render() {
    let classNames = this.state.flipped ? 'card flipped' : 'card'
    return (
      <div className={classNames} onClick={this.flip} >
        {this.getFaceImgTag()}
      </div>
    );
  }
}

export default Card;
