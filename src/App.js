import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {

    this.performSearch();


  };

  performSearch = (query = 'cats') => {
    //FETCH
    // fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=0cNPFFojOT0oukrkUohjn9wOOldrkTAv')
    // .then( results => results.json())
    // .then( data =>{
    //   let gifs = data.data.map((gif) => {
    //     //console.log(gif.images.fixed_height_still.url);
    //     return gif;
    //   })
    //   this.setState({
    //     gifs: gifs,
    //   });
    //
    // })

    //AXIOS
    axios.get('http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=0cNPFFojOT0oukrkUohjn9wOOldrkTAv')
      .then(response => {
        //console.log(response.data.data);
        let gifs = response.data.data.map((gif) => {
          //console.log(gif.images.fixed_height_still.url);
          return gif;
        })
        this.setState({
            gifs: gifs,
          });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {

    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>
          </div>
        </div>
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
