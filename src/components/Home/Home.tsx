import '../../css/HomeComponents.css';
import Header from "./Header/Header";
import Search from "./Search/Search";
import { getWords } from '../../request_handler/ServerRequest';
import Words from './Words/Words';
import { activityWordsContext, associatedWordsContext } from './HomeContex';
import { useState } from 'react';
import { AssociatedWord } from '../../request_handler/models';

function Home() {
  // Calling server to get all words from database
  getWords();

  const [isWordsActive, setWordsActivity] = useState<boolean>(false);
  const [associatedWords, setAssociatedWords] = useState<AssociatedWord[]>([]);

  return (
    <div className="home">
      <activityWordsContext.Provider value={{ isWordsActive, setWordsActivity }}>
        <associatedWordsContext.Provider value={{ associatedWords, setAssociatedWords }}>
          <Header />
          <Search />
          <Words />
        </associatedWordsContext.Provider>
      </activityWordsContext.Provider>
    </div>
  )
}

export default Home;