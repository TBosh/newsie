import React, { Component } from "react";
import "./SearchBox.css";


class SearchBox extends Component {
    constructor(props) {
        super( props );

        this.state = {newsResults: ""};

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


                // onSubmit={this.handleSubmit}
    render() {
        return (
            // <div className="background-img">
            <div className="homepage">
            <form
                className="search-news"
                onSubmit={(e) => this.props.handleSubmit(e)}
                >
                <div>
                    <input
                        className="enter-search-news search-font"
                        onChange={ (e) => this.props.handleChange(e) }
                        placeholder="Read all about it"
                        type="text"
                        value={ this.state.searchTerm}
                    />
            </div>
            </form >
           
            </div>
            //</div>
        );
    }
}

export default SearchBox;


//  <div className="search-results">News Results here.</div>
//             <div className="landing-text-block">
//                 <h5 className="lesser-font">Powered by</h5>
//                 <h1 className="title-font">The Guardian API</h1>
//                 <div className="NewsPost">Test</div>
//             </div>