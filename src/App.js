import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchResults from './components/searchResults/SearchResults';
import SearchBox from "./components/search/SearchBox";
//import NewsPost from './components/searchResults/NewsPost/NewsPost';
import apiKey from './apiKey';

// import router from './router.js';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      results: [],
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange( event ) {
      this.setState( { userInput: event.target.value } );
  }

  handleSubmit(e) {
      e.preventDefault();
      // this.handleDisplay()
      axios.get (`http://content.guardianapis.com/search?page-size=200&order-by=newest&q=${this.state.userInput}&api-key=${apiKey}`)
      .then(response => {
        // console.log("response data", response); 
        // console.log("what i want", response.data.response.results)    
  
        this.setState({ 
          results: response.data.response.results 
        });

      })
  }

  // handleDisplay() {
  //   this.setState()
  // }
     

  render() {
    return (
      <div>
        <div>
          <div className="background-img">
           <SearchBox handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <div>
            <SearchResults resultsToPassToSearchResults={this.state.results} />
          </div>
          <div className="landing-text-block">
                <h5 className="lesser-font" href="http://g.co/doodle/gbf59m">Powered by</h5>
                <h1 className="title-font">The Guardian API</h1>
          </div>
          
          </div>
          
        </div>
      
      </div>
    );
  }
}

export default App;
