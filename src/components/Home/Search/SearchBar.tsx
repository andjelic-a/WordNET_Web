import React, { useContext, useState } from "react";
import "../../../css/HomeComponents.css";
import {
  findSimilarWord,
  getAssociatedWordsById,
} from "../../../request_handler/ServerRequest";
import { Word } from "../../../types/Types";
import { associatedWordsContext, wordContext, wordsContext } from "../HomeContex";

function SearchBar() {
  const [suggestedWords, setSuggestedWords] = useState<Word[]>([]);

  const { words } = useContext(wordsContext);
  const { setAssociatedWords } = useContext(associatedWordsContext);
  const { setWord } = useContext(wordContext);

  const handleClick = async () => {
    // If there are no suggested words we alert user there is no suggested words
    if (suggestedWords.length === 0) {
      return;
    }

    // If there is only one suggested word we take that words by using index
    if (suggestedWords.length === 1) {

      const associatedWords = await getAssociatedWordsById(suggestedWords[0].Id);
      setAssociatedWords(associatedWords);
      setWord(suggestedWords[0].Name);

      return;
    }

    // If there are more than one suggested word we take user input and try to find suggested word by name
    const selectedWord: HTMLInputElement | null =
      document.querySelector(".input-SearchBar");

    const suggestedWord: Word | undefined = suggestedWords.find(
      (word) => word.Name === selectedWord?.value
    );

    // If word doesn't exist we alert user
    if (!suggestedWord) {
      alert("Entered word doesn't exist");
      return;
    }

    // When word is found we take id and get associated words and refresh WordsPage to show new data
    const associatedWords = await getAssociatedWordsById(suggestedWord.Id);
    setAssociatedWords(associatedWords);
    setWord(suggestedWord.Name);
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
      setSuggestedWords([]);
      return;
    }

    // If word is not empty or white spaces, search for similar words
    const similarWords = findSimilarWord(word, words);

    // Update found words list
    setSuggestedWords(similarWords.slice(0, 5));
  };

  const wordSelected = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    // Get and parse id from string to number
    const selectedWordId: number | undefined = parseInt(
      e.currentTarget.dataset.id!
    );

    // Find the selected word from the words state (based on id)
    const selectedWord: Word | undefined = suggestedWords.find(
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
          {suggestedWords.map((word) => (
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
