import '../../css/HomeComponents.css';
import Header from "./Header/Header";
import Search from "./Search/Search";
import Words from './Words/Words';
import { associatedWordsContext } from './HomeContex';
import { useState } from 'react';
import { AssociatedWord } from '../../types/Types';

function Home() {
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