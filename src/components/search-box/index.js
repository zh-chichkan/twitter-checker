'use strict';

import React, { Component, PropTypes } from 'react';

export default class SearchBoxComponent extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    let btnClasses = this.props.term.length ? 'btn active' : 'btn';

    return (
      <span className="search-box">
        <input
          type="text"
          id="search-pattern"
          placeholder="Type the term to search..."
          value={ this.props.term }
          onChange={ this.props.termChangeAction } />
        <span className={ btnClasses } onClick={ this.props.termSearchAction }>Search</span>
      </span>
    );
  }
}
