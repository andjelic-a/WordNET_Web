import { createContext } from "react";
import { AssociatedWordsContextInterface } from "../../types/Types";

export const associatedWordsContext = createContext<AssociatedWordsContextInterface>({
    associatedWords: [],
    setAssociatedWords: () => { }
});