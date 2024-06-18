import { AssociatedWord, Word } from "./../types/Types";

//export let words: Word[] = [];

const buildApiAdress = 'http://apzserver.ddns.net:5002';

export function findSimilarWord(slice: string, words: Word[]): Word[] {
    return words.filter(word => word.Name.toLowerCase().includes(slice.toLowerCase()));
}

export async function getWords(): Promise<Word[]> {
    try {
        const response = await fetch(buildApiAdress + '/api/Words/GetWords');
        const data = await response.json();
        return data as Word[];
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export async function getFullWords(): Promise<Word[] | undefined> {
    try {
        const response = await fetch(buildApiAdress + '/api/Words/GetWordsFull');
        const data = await response.json();
        return data as Word[];
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getAssociatedWordsById(id: number): Promise<AssociatedWord[]> {
    try {
        const response = await fetch(buildApiAdress + `/api/Words/GetAssociatedWords?wordId=${id}`);
        const data = await response.json();
        return data as AssociatedWord[];
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
