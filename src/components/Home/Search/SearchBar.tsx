import React, { useContext, useState } from 'react';
import '../../../css/HomeComponents.css';
import { findAssociatedWordsForWord, findSimilarWord } from '../../../request_handler/ServerRequest';
import { WordDTO } from '../../../types/Types';
import { associatedWordsContext } from '../HomeContex';

function SearchBar() {
    const [words, setWords] = useState<WordDTO[]>([]);
    const { setAssociatedWords } = useContext(associatedWordsContext);

    const handleClick = () => {
        // If there are no suggested words we alert user there is no suggested words
        if (words.length === 0) {
            alert("There is no suggested words");
            return;
        }

        // If there is only one suggested word we take that words by using index
        if (words.length === 1) {
            setAssociatedWords(findAssociatedWordsForWord(words[0].wordid));
            return;
        }

        // If there are more than one suggested word we take user input and try to find suggested word by name
        const selectedWord: HTMLInputElement | null = document.querySelector('.input-SearchBar');
        const suggestedWord: WordDTO | undefined = words.find((word) => word.name === selectedWord?.value);
        if (!suggestedWord) {
            alert("Entered word doesn't exist");
            return;
        }

        // When word is found we take id and get associated words and refresh WordsPage to show new data
        setAssociatedWords(findAssociatedWordsForWord(suggestedWord.wordid));
    }

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
            <div className='search-bar'>
                <input type="text" className='input-SearchBar' onKeyUp={(e) => searchForWords(e)} placeholder='gore, kuća, neprijatelj...' />
                <button type='button'><img src='../../../../img/search.png' alt='Search icon' draggable="false" onClick={handleClick} /></button>
            </div>
            <div className='suggested-words-relative'>
                <div className="suggested-words">
                    {words.map((word) => (<p data-id={word.wordid} key={word.wordid} onClick={(e) => wordSelected(e)}>{word.name}</p>))}
                </div>
            </div>
        </>
    )
}

export default SearchBar;