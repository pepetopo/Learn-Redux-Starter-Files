import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, {Component} from 'react';

import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main.js';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispachToProps(dispach) {
  return bindActionCreators(actionCreators, dispach);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;