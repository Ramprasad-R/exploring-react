import React, { Component } from "react";
export default class ItemTeam extends Component {
  render() {
    return (
      <div className="item team">
        <img
          className="image"
          src={this.props.imageSrc}
          style={this.props.imageItemStyle}
        />
        <div className="component-title title">{this.props.componentTitle}</div>
        <div className="description">{this.props.componentDescription}</div>
      </div>
    );
  }
}
