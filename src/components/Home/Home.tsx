import '../../css/HomeComponents.css';
import Header from "./Header/Header";
import Search from "./Search/Search";
import Words from './Words/Words';
import { associatedWordsContext, wordContext } from './HomeContex';
import { useState } from 'react';
import { AssociatedWord } from '../../types/Types';

function Home() {
  const [associatedWords, setAssociatedWords] = useState<AssociatedWord[]>([]);
  const [word, setWord] = useState<string>("");

  return (
    <div className="home">
      <associatedWordsContext.Provider value={{ associatedWords, setAssociatedWords }}>
        <wordContext.Provider value={{ word, setWord }}>
          <Header />
          <Search />
          <Words />
        </wordContext.Provider>
      </associatedWordsContext.Provider>
    </div>
  )
}

export default Home;