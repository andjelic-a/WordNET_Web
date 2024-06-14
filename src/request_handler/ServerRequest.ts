import { AssociatedWord, Word } from "./../types/Types";

export let words: Word[] = [];

export function findSimilarWord(slice: string): Word[] {
    return words.filter(word => word.name.toLowerCase().includes(slice.toLowerCase()));
}

export function findAssociatedWordsForWord(selectedWord: number): AssociatedWord[] {
    return (words.filter(word => word.id === selectedWord))[0].associatedWordDTOs;
}

export async function getWords() {
    try {
        const response = await fetch('http://apzserver.ddns.net:5002/api/Words/GetWordsFull');
        const data = await response.json();
        words = data as Word[];

        console.log(words);
    } catch (error) {
        console.error('Error:', error);
    }
}