import { Dispatch, SetStateAction } from "react"

// ====================================================================
// Context Items
// ====================================================================

export interface AssociatedWordsContextInterface {
    associatedWords: AssociatedWord[]
    setAssociatedWords: Dispatch<SetStateAction<AssociatedWord[]>>
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

export class Ages {
    Id!: number;
    IsMan!: boolean;
    Age!: number;
}

export class AssociatedWord {
    Id!: number;
    Name!: string;
    Count!: number;

    Ages!: Ages[];
    WordId!: number;
}

export class Word {
    Id!: number;
    Name!: string;
    AssociatedWords!: AssociatedWord[];
}