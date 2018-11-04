import React, {Component} from 'react';

class Tag extends Component {
  render() {
    return (<span className="tag">{this.displayValue()}</span>);
  }

  displayValue() {
    switch (this.props.tag.value) {
      case null:
      case undefined:
      case "": return this.props.tag.name;
      default: return `${this.props.tag.name}: ${this.props.tag.value}`;
    }
  }
}

export default Tag;