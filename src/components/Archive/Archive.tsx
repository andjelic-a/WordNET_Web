import { Await, useLoaderData } from "react-router-dom";
import "../../css/ArchiveComponents.css";
import { Word } from "../../types/Types.ts";
import Header from "../Home/Header/Header.tsx";
import { Suspense } from "react";

function Archive() {
  const data = useLoaderData() as { words: Promise<Word[]> };

  return (
    <div className="archive-component">
      <div className="archive-header">
        <Header />
      </div>

      <Suspense fallback={<div className="grid-container"></div>}>
        <Await resolve={data.words}>
          {(words: Word[]) => (
            <div className="grid-container">
              {words.map((w) => (
                <div key={w.Id} className="grid-item">
                  <div className="words-container">

                    <div className="words-header">
                      {/*@ts-ignore*/}
                      <h1>{w.name}</h1>
                    </div>

                    <div className="associated-word-container">
                      {w.associatedWordDTOs.sort((a, b) => b.count - a.count).map((a) => (
                        <div key={a.id} className="associated-word">
                          <div className="associated-word-circle">{a.count}</div>
                          <p>{a.name}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </Await>
      </Suspense>

    </div>
  );
}

export default Archive;
