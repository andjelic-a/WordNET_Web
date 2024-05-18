import { AssociatedWord, WordDTO } from "./../types/Types";

export let words: WordDTO[] = [];

// Searching for similar words
export function findSimilarWord(slice: string): WordDTO[] {
    return words.filter(word => word.name.toLowerCase().includes(slice.toLowerCase()));
}

// Find and return associated words for specified word id
export function findAssociatedWordsForWord(selectedWord: number): AssociatedWord[] {
    return (words.filter(word => word.wordid === selectedWord))[0].associatedwords;
}

// Getting words with their associated words from server
export async function getWords() {
    try {
        const response = await fetch('http://93.86.13.5:5002/getWordsAndAssociatedWords');
        const data = await response.json();
        words = data as WordDTO[];
    } catch (error) {
        console.error('Error:', error);
    }
}