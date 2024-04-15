import '../../css/HomeComponents.css';
import Header from "./Header/Header";
import Search from "./Search/Search";
import { getWords } from '../../request_handler/ServerRequest';
import Words from './Words/Words';
import { associatedWordsContext } from './HomeContex';
import { useState } from 'react';
import { AssociatedWord } from '../../types/Types';

function Home() {
  // Calling server to get all words from database
  getWords();

  const [associatedWords, setAssociatedWords] = useState<AssociatedWord[]>([]);

  return (
    <div className="home">
      <associatedWordsContext.Provider value={{ associatedWords, setAssociatedWords }}>
        <Header />
        <Search />
        <Words />
      </associatedWordsContext.Provider>
    </div>
  )
}

export default Home;