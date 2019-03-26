import React, { Component } from 'react';


class Search extends Component {
  typingHandler = (event) => {
    this.props.gifSearch(event.target.value);
  }

  render() {
    return(
      <input
        type = 'text'
        className = 'form-control form-search'
        onInput = {this.typingHandler }/>
    )
  }
}

export default Search;
