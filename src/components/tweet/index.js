'use strict';

import React, { Component, PropTypes } from 'react';

export default class TweetComponent extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="tweet">
        { this.props.tweet.text }
      </div>
    );
  }
}
