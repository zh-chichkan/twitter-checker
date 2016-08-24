import React, { Component, PropTypes } from 'react';

import { TIMER } from '../constants/AppSonstants.js';
import getTweets from '../utils/TwitterReader.js';
import SearchBoxComponent from '../components/search-box/index.js';
import TweetComponent from '../components/tweet/index.js';

let timer;

export default class App extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      term: '',
      tweets: []
    };
  }

  render () {
    let tweets = this.state.tweets.map(
      (tweet) => (<TweetComponent key={ tweet.id_str } tweet={ tweet } />)
    );

    return (
      <div>
        <SearchBoxComponent
          termChangeAction={ this.termChangeAction.bind(this) }
          term={ this.state ? this.state.term : '' }
          termSearchAction={ this.termSearchAction.bind(this) }
        />
        { tweets }
      </div>
    );
  }

  termChangeAction (e) {
    this.setState({ term: e.target.value });
  }

  termSearchAction () {
    clearTimeout(timer);
    this._getTwetts();
    timer = setInterval(() => this._getTwetts(), TIMER);
  }

  _getTwetts () {
    getTweets(this.state.term).then(
      (res) => this.setState({ tweets: res.statuses })
    );
  }
}
