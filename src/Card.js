import React, { Component } from "react";

import "./Card.css";

class Card extends Component {
  static typeNameMap = [
    "angular",
    "d3",
    "jenkins",
    "postcss",
    "react",
    "redux",
    "sass",
    "supercharge",
    "ts",
    "webpack"
  ];

  constructor(props) {
    super(props);
    this.flip = this.flip.bind(this);
  }

  getFaceImgTag() {
    let name = Card.typeNameMap[this.props.type];
    let src = "./assets/" + name + ".png";
    return <img src={src} alt={name} />;
  }

  flip() {
    this.props.onFlip(this.props.number);
  }

  render() {
    let classNames = "card";
    if (this.props.flipped) {
      classNames += " flipped";
    }
    if (this.props.removed) {
      classNames += " removed";
    }
    return (
      <div className={classNames} onClick={this.flip}>
        {this.getFaceImgTag()}
      </div>
    );
  }
}

export default Card;
