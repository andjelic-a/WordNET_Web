import { createContext } from "react";
import { ActivityWordsContextInterface, AssociatedWordsContextInterface } from "../../types/Types";

export const activityWordsContext = createContext<ActivityWordsContextInterface>({
    isWordsActive: false,
    setWordsActivity: () => { }
});

export const associatedWordsContext = createContext<AssociatedWordsContextInterface>({
    associatedWords: [],
    setAssociatedWords: () => { }
});