import React from 'react';
import './SearchResult.css'

const SearchResult = (props) => {
    const {name, web} = props.dataFind
    return (
        <a href={web} className="search-result">
            <p>{name}</p>
        </a>
    );
};

export default SearchResult;