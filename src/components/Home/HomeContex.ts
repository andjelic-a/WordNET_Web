import { createContext } from "react";
import { AssociatedWordsContextInterface, WordContextInterface } from "../../types/Types";

export const associatedWordsContext = createContext<AssociatedWordsContextInterface>({
    associatedWords: [],
    setAssociatedWords: () => { }
});

export const wordContext = createContext<WordContextInterface>({
    word: "",
    setWord: () => { }
});