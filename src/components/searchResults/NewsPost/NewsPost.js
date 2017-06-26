import React from 'react';

import './NewsPost.css'

const NewsPost = (props) => {
    return (
        <div className="tile-holder">
            <a href={`${props.webUrl}`}>
                <div className="article-box">
                    <h1 className="headline">{props.webTitle}</h1>
                    <p>{props.sectionName}</p>
                    <p>{props.webPublicationDate}</p>
                </div>
            </a>
        
        </div>
    );
};


export default NewsPost;