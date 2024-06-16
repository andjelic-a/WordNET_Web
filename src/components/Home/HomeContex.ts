import { createContext } from "react";
import { AssociatedWordsContextInterface, WordContextInterface, WordsContextInterface } from "../../types/Types";

export const wordsContext = createContext<WordsContextInterface>({
    words: [],
});

export const associatedWordsContext = createContext<AssociatedWordsContextInterface>({
    associatedWords: [],
    setAssociatedWords: () => { }
});

export const wordContext = createContext<WordContextInterface>({
    word: "",
    setWord: () => { }
});