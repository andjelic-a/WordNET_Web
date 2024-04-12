import '../../../css/HomeComponents.css';
import { findSimilarWord } from '../../../request_handler/ServerRequest';

function SearchBar() {
    function searchForWords(word: string) {
        // Check if word is empty or white spaces
        if (word.trim() === "") {
            return;
        }

        // If word is not empty or white spaces, search for similar words
        const similarWords = findSimilarWord(word.trim());
        console.log(similarWords);
    }

    return (
        <form action='' className='search-bar'>
            <input type="text" onKeyUp={(e) => searchForWords(e.currentTarget.value)} placeholder='gore, kuća, neprijatelj...' />
            <button type='submit'><img src='../../../../img/search.png'></img></button>
        </form>
    )
}

export default SearchBar;