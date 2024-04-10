import '../../../css/HomeComponents.css';

function SearchBar() {
    return(
        <form action='' className='search-bar'>
            <input type="text" placeholder='gore, kuća, neprijatelj...'/>
            <button type='submit'><img src='../../../../img/search.png'></img></button>
        </form>
    )
}

export default SearchBar;