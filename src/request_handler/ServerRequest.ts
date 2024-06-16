import { AssociatedWord, Word } from "./../types/Types";

//export let words: Word[] = [];

export function findSimilarWord(slice: string, words: Word[]): Word[] {
    return words.filter(word => word.name.toLowerCase().includes(slice.toLowerCase()));
}

export function findAssociatedWordsForWord(selectedWord: number, words: Word[]): AssociatedWord[] {
    return (words.filter(word => word.id === selectedWord))[0].associatedWordDTOs;
}

export async function getWords(): Promise<Word[] | undefined> {
    try {
        const response = await fetch('http://apzserver.ddns.net:5002/api/Words/GetWordsFull');
        const data = await response.json();
        return data as Word[];
    } catch (error) {
        console.error('Error:', error);
    }
}