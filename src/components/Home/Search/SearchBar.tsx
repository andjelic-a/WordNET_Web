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
        // Get and parse id from string to number
        const selectedWordId: number | undefined = parseInt(e.currentTarget.dataset.id!);

        // Find the selected word from the words state (based on id)
        const selectedWord: WordDTO | undefined = words.find((word: WordDTO) => word.wordid === selectedWordId);
        if (!selectedWord) {
            console.error("Cant find selected word");
            return;
        }

        // Find search bar based on its class
        const searchBarInput: HTMLInputElement | null = document.querySelector('.input-SearchBar');
        if (!searchBarInput) {
            console.error("Cant find search bar");
            return;
        }

        // Set input of search bar to word name
        searchBarInput.value = selectedWord.name;
    }

    return (
        <>
            <form action='' className='search-bar'>
                <input type="text" className='input-SearchBar' onKeyUp={(e) => searchForWords(e)} placeholder='gore, kuća, neprijatelj...' />
                <button type='submit'><img src='../../../../img/search.png'></img></button>
            </form>
            <div className='suggested-words-relative'>
            <div className="suggested-words">
                {words.map((word) => (<p data-id={word.wordid} key={word.wordid} onClick={(e) => wordSelected(e)}>{word.name}</p>))}
            </div>
            </div>
        </>
    )
}

export default SearchBar;