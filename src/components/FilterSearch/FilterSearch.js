import React from 'react';
import './FilterSearch.css';
import { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import technologyData from '../../technologyData.json';
import SearchResult from '../SearchResult/SearchResult';


const FilterSearch = () => {
    const [search, setSearch] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        const searchWord = event.target.value;
        setSearchText(searchWord);
        const newFilterData = technologyData.filter(value => value.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()));
        setSearch(newFilterData);
    };
    const clearInput = () => {
        setSearch([]);
        setSearchText('');
    }
    return (
        <div>
            <div className="search-field">
                <InputGroup className="mb-3">
                    <FormControl
                        value={searchText}
                        onChange={handleChange}
                        placeholder="search technologies..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-success" id="button-addon2">
                        {searchText.length === 0 ? (
                            <FontAwesomeIcon icon={faSearch} />
                        ) : (
                            <FontAwesomeIcon icon={faClose} onClick={clearInput} />
                        )}

                    </Button>
                </InputGroup>
                {searchText && search.map(data => <SearchResult dataFind={data} key={data.id}></SearchResult>)}
            </div>

        </div>
    );
};

export default FilterSearch;