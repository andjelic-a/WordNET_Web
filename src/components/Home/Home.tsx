import '../../css/HomeComponents.css';
import Header from "./Header/Header";
import Search from "./Search/Search";
import Words from './Words/Words';
import { associatedWordsContext, wordContext, wordsContext } from './HomeContex';
import { Suspense, useState } from 'react';
import { AssociatedWord, Word } from '../../types/Types';
import { Await, useLoaderData } from 'react-router-dom';

function Home() {
  const data = useLoaderData() as { words: Promise<Word[]> };

  const [associatedWords, setAssociatedWords] = useState<AssociatedWord[]>([]);
  const [word, setWord] = useState<string>("");

  return (
    <div className="home">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data.words}>

          {(words: Word[]) => (
            <wordsContext.Provider value={{ words }}>
              <associatedWordsContext.Provider value={{ associatedWords, setAssociatedWords }}>
                <wordContext.Provider value={{ word, setWord }}>
                  <Header />
                  <Search />
                  <Words />
                </wordContext.Provider>
              </associatedWordsContext.Provider>
            </wordsContext.Provider>
          )}

        </Await>
      </Suspense>
    </div>
  )
}

export default Home;