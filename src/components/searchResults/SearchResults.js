import React, { Component } from 'react';
import './SearchResults.css';
import NewsPost from './NewsPost/NewsPost.js';



class SearchResults extends Component {
    render() {
        let newsPostList = this.props.resultsToPassToSearchResults.map((post, i) => {
            return <NewsPost 
                        id={post.id}
                        sectionName={post.sectionName}
                        webTitle={post.webTitle}
                        webUrl={post.webUrl}
                        webPublicationDate={post.webPublicationDate}
                        key={i}
            />
        })    
        return (
            <div className="results-parent">
                <div className="search-results"> 
                    { newsPostList }
                </div>
            </div>
        );
    }
}

export default SearchResults;

// { !newsPostList ? newsPostList = "Nothing to see here" : NewsPost }