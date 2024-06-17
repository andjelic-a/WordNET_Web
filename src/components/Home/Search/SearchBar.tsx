import React, { useContext, useEffect, useState } from "react";
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
  const { associatedWords, setAssociatedWords } = useContext(associatedWordsContext);
  const { setWord } = useContext(wordContext);

  const fetchAndSetAssociatedWords = async (word: Word) => {
    try {
      const associatedWords = await getAssociatedWordsById(word.Id);
      setWord(word.Name);
      setAssociatedWords(associatedWords);
    } catch (error) {
      console.error("Error fetching associated words:", error);
    }
  };

  const handleClick = async () => {
    if (suggestedWords.length === 0) {
      alert("No suggested words available");
      return;
    }

    if (suggestedWords.length === 1) {
      await fetchAndSetAssociatedWords(suggestedWords[0]);
      return;
    }

    const selectedWord: HTMLInputElement | null =
      document.querySelector(".input-SearchBar");

    const suggestedWord: Word | undefined = suggestedWords.find(
      (word) => word.Name === selectedWord?.value
    );

    if (!suggestedWord) {
      alert("Entered word doesn't exist");
      return;
    }

    await fetchAndSetAssociatedWords(suggestedWord);
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

  useEffect(() => {
    if (associatedWords.length > 0) {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  }, [associatedWords]);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="input-SearchBar"
          onKeyUp={(e) => searchForWords(e)}
          placeholder="горе, кућа, непријатељ..."
        />
        <button onClick={handleClick} type="button">
          <img
            src="../../../../img/search.png"
            alt="Search icon"
            draggable="false"
          />
        </button>
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
