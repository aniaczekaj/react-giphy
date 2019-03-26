import React, { Component } from 'react';

class Gif extends Component {
  handleOnClick = () => {
    if (this.props.clicked) {
      this.props.clicked(this.props.id);
    }
  }

  render() {
    if (!this.props.id) {
      return null;
    }
    const src = `https://media1.giphy.com/media/${this.props.id}/200w.gif`;
    return(
      <div className = 'selected-gif'>
        <img  src={src} alt="" className="gif" onClick={this.handleOnClick}/>
      </div>
    )
  }
}

export default Gif;
