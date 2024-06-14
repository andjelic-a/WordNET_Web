import React, { useContext, useState } from "react";
import "../../../css/HomeComponents.css";
import {
  findAssociatedWordsForWord,
  findSimilarWord,
} from "../../../request_handler/ServerRequest";
import { Word } from "../../../types/Types";
import { associatedWordsContext } from "../HomeContex";

function SearchBar() {
  const [words, setWords] = useState<Word[]>([]);
  const { setAssociatedWords } = useContext(associatedWordsContext);

  const handleClick = () => {
    console.log("Clicked");

    // If there are no suggested words we alert user there is no suggested words
    if (words.length === 0) {
      return;
    }

    // If there is only one suggested word we take that words by using index
    if (words.length === 1) {
      setAssociatedWords(findAssociatedWordsForWord(words[0].Id));
      return;
    }

    // If there are more than one suggested word we take user input and try to find suggested word by name
    const selectedWord: HTMLInputElement | null =
      document.querySelector(".input-SearchBar");

    const suggestedWord: Word | undefined = words.find(
      (word) => word.Name === selectedWord?.value
    );

    // If word doesn't exist we alert user
    if (!suggestedWord) {
      alert("Entered word doesn't exist");
      return;
    }

    // When word is found we take id and get associated words and refresh WordsPage to show new data
    setAssociatedWords(findAssociatedWordsForWord(suggestedWord.Id));
  };

  const searchForWords = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement, Element>
  ) => {
    // Get current entered chars
    const word = e.currentTarget.value;

    // If word is empty, set words to empty array
    if (word.trim() === "") {
      setWords([]);
      return;
    }

    // If word is not empty or white spaces, search for similar words
    const similarWords = findSimilarWord(word);

    // Update found words list
    setWords(similarWords.slice(0, 5));
  };

  const wordSelected = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    // Get and parse id from string to number
    const selectedWordId: number | undefined = parseInt(
      e.currentTarget.dataset.id!
    );

    // Find the selected word from the words state (based on id)
    const selectedWord: Word | undefined = words.find(
      (word: Word) => word.Id === selectedWordId
    );
    if (!selectedWord) {
      console.error("Cant find selected word");
      return;
    }

    // Find search bar based on its class
    const searchBarInput: HTMLInputElement | null =
      document.querySelector(".input-SearchBar");
    if (!searchBarInput) {
      console.error("Cant find search bar");
      return;
    }

    // Set input of search bar to word name
    searchBarInput.value = selectedWord.Name;
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="input-SearchBar"
          onKeyUp={(e) => searchForWords(e)}
          placeholder="горе, кућа, непријатељ..."
        />
        <a href="#Words">
          <button onClick={handleClick} type="button">
            <img
              src="../../../../img/search.png"
              alt="Search icon"
              draggable="false"
            />
          </button>
        </a>
      </div>
      <div className="suggested-words-relative">
        <div className="suggested-words">
          {words.map((word) => (
            <p
              data-id={word.Id}
              key={word.Id}
              onClick={(e) => wordSelected(e)}
            >
              {word.Name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
