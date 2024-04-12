import React from 'react';
import '../../../css/HomeComponents.css';
import { findSimilarWord } from '../../../request_handler/ServerRequest';

function SearchBar() {
    const searchForWords = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const word = e.currentTarget.value;

        // Chec if word is empty ot white space
        if (word.trim() === "") {
            return;
        }

        // If word is not empty or white spaces, search for similar words
        const similarWords = findSimilarWord(word.trim());
        console.log(similarWords);
    }

    return (
        <form action='' className='search-bar'>
            <input type="text" onKeyUp={(e) => searchForWords(e)} placeholder='gore, kuća, neprijatelj...' />
            <button type='submit'><img src='../../../../img/search.png'></img></button>
        </form>
    )
}

export default SearchBar;