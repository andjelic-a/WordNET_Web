import { Await, useLoaderData } from "react-router-dom";
import "../../css/ArchiveComponents.css";
import { Questionee, Word } from "../../types/Types.ts";
import Header from "../Home/Header/Header.tsx";
import { Suspense } from "react";

function Archive() {
  const data = useLoaderData() as { words: Promise<Word[]> };

  const wordClick = (statistics: Questionee[]) => {
    console.log(statistics);

    const manPerc = parseFloat(((statistics.filter(q => q.isMan == true).length / statistics.length) * 100).toFixed(2));
    const womanPerc = 100 - manPerc;

    console.log("Percentage: ");
    console.log(`Man => ${manPerc}%`);
    console.log(`Woman => ${womanPerc}%`);

    console.log("");
    console.log("Age Group:");
    console.log(`0 - 18 => ${statistics.filter(q => q.age > 0 && q.age <= 18).length}`);
    console.log(`18 - 25 => ${statistics.filter(q => q.age > 18 && q.age <= 25).length}`);
    console.log(`25 - ♾️ => ${statistics.filter(q => q.age > 25).length}`);
  };

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
                          <p onClick={(_) => wordClick(a.questioneeDTOs)}>{a.name}</p>
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
