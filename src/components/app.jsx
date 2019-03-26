import React, { Component } from 'react';
import Search from './search'
import List from './list'
import Gif from './gif'
import giphy from 'giphy-api'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif:""
    }
  }

  gifSearch = (query) => {
    giphy('z5TGR0VD19sDllc4WD2QtSSf5a8J8Snb').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectedGif = (gifId) => {
    console.log(gifId);
    this.setState({
      selectedGif: gifId
    })
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <Search gifSearch = {this.gifSearch} />
          <Gif id = {this.state.selectedGif} />
        </div>
        <div className="right-scene">
          <List selectGif = {this.selectedGif} gifs = {this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
