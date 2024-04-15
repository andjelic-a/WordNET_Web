import { Dispatch, SetStateAction } from "react"

// ====================================================================
// Context Items
// ====================================================================

export interface AssociatedWordsContextInterface {
    associatedWords: AssociatedWord[]
    setAssociatedWords: Dispatch<SetStateAction<AssociatedWord[]>>
}


// ====================================================================
// Class Items 
// ====================================================================

export class AssociatedWord {
    associatedwordid!: number;
    name!: string;
    count!: number;
    wordid!: number;
}

export class WordDTO {
    wordid!: number;
    name!: string;
    associatedwords!: AssociatedWord[];
} 