import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

class Tag extends Component {
  displayValue() {
    const { tag: { name, value } } = this.props;
    switch (value) {
      case null:
      case undefined:
      case '': return name;
      default: return `${name}: ${value}`;
    }
  }

  render() {
    return (<span className="tag">{this.displayValue()}</span>);
  }
}

Tag.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
};

export default Tag;
