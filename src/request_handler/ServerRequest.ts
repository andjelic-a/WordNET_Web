import { WordDTO } from "./models";

export let words: WordDTO[] = [];

// Searching for similar words
export function findSimilarWord(slice: string): WordDTO[] {
    try {
        const s = words.filter(word => word.name.toLowerCase().includes(slice.toLowerCase()));
        return s.map(word => word);
    } catch (error) {
        console.error('Error finding similar words', error);
        return [];
    }
}

// Getting words with their associated words from server
export async function getWords() {
    try {
        const response = await fetch('http://93.86.154.247:5002/getWordsAndAssociatedWords');
        const data = await response.json();
        words = data as WordDTO[];
    } catch (error) {
        console.error('Error:', error);
    }
}