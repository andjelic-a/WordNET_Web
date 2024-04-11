export class AssociatedWord {
    associatedwordid!: number;
    name!: string;
    count!: number;
    wordid!: number;
}

export class WordDTO {
    wordid!: number;
    name!: string;
    associatedwordid!: AssociatedWord[];
}