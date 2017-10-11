'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <div>Select a book to get started:</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.activeBook.title}</div>
        <div>Pages: {this.props.activeBook.pages}</div>
      </div>
    );
  }
};

// This method binds a piece of the global state to this
// container props
// Whatever is returned here will show up as props
// inside of BookDetail
function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
