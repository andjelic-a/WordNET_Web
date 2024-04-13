import { createContext, Dispatch, SetStateAction } from "react";
import { AssociatedWord} from "../../request_handler/models";

type activityWordsContextType = {
    isWordsActive: boolean;
    setWordsActivity: Dispatch<SetStateAction<boolean>>;
}

type associatedWordsContextType = {
    associatedWords: AssociatedWord[];
    setAssociatedWords: Dispatch<SetStateAction<AssociatedWord[]>>;
}

export const activityWordsContext = createContext<activityWordsContextType>({
    isWordsActive: false,
    setWordsActivity: () => {}
});

export const associatedWordsContext = createContext<associatedWordsContextType>({
    associatedWords: [],
    setAssociatedWords: () => {}
});