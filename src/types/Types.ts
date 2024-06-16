import { Dispatch, SetStateAction } from "react"

// ====================================================================
// Context Items
// ====================================================================

export interface WordsContextInterface {
    words: Word[]
}

export interface AssociatedWordsContextInterface {
    associatedWords: AssociatedWord[]
    setAssociatedWords: Dispatch<SetStateAction<AssociatedWord[]>>
}

export interface WordContextInterface {
    word: string
    setWord: Dispatch<SetStateAction<string>>
}


// ====================================================================
// Version 1.0 DTOs (Old)
// ====================================================================

/*export class AssociatedWord {
    associatedwordid!: number;
    name!: string;
    count!: number;
    wordid!: number;
}

export class WordDTO {
    wordid!: number;
    name!: string;
    associatedwords!: AssociatedWord[];
}*/


// ====================================================================
// Version 2.0 DTOs
// ====================================================================

export class Questionee {
    id!: number;

    isMan!: boolean;
    age!: number;
}

export class AssociatedWord {
    id!: number;
    name!: string;
    count!: number;

    questioneeDTOs!: Questionee[];
}

export class Word {
    Id!: number;
    name!: string;
    associatedWordDTOs!: AssociatedWord[];
}