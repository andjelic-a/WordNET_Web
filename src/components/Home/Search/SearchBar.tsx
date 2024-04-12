import React, { useState } from 'react';
import '../../../css/HomeComponents.css';
import { findSimilarWord } from '../../../request_handler/ServerRequest';
import { WordDTO } from '../../../request_handler/models';

function SearchBar() {
    const [words, setWords] = useState<WordDTO[]>([]);

    const searchForWords = (e: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement, Element>) => {
        // Get current entered chars
        const word = e.currentTarget.value;

        // If word is empty, set words to empty array
        if (word.trim() === '') {
            setWords([]);
            return;
        }

        // If word is not empty or white spaces, search for similar words
        const similarWords = findSimilarWord(word);

        // Update found words list
        setWords(similarWords);
    }

    const wordSelected = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        // In future add here to open page with associated words to this word (based on id -> get id from dataset)
        console.log(e.currentTarget.dataset.key);
    }

    return (
        <form action='' className='search-bar'>
            <input type="text" onKeyUp={(e) => searchForWords(e)} placeholder='gore, kuća, neprijatelj...' />
            <button type='submit'><img src='../../../../img/search.png'></img></button>
            <div className="suggestedWords">
                {words.map((word) => (<p data-key={word.wordid} key={word.wordid} onClick={(e) => wordSelected(e)}>{word.name}</p>))}
            </div>
        </form>
    )
}

export default SearchBar;