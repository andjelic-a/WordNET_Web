import "../../css/ArchiveComponents.css";
import { words } from "../../request_handler/ServerRequest.ts";
import { Questionee } from "../../types/Types.ts";
import Header from "../Home/Header/Header.tsx";

function Archive() {
  const wordClick = (statistics: Questionee[]) => {
    console.log(statistics);

    const manPerc = statistics.filter(q => q.isMan == true).length / statistics.length;
    const womanPerc = statistics.filter(q => q.isMan == false).length / statistics.length;

    console.log("Percentage: ");
    console.log(`Man => ${(manPerc * 100).toFixed(2)}%`);
    console.log(`Woman => ${(womanPerc * 100).toFixed(2)}%`);

    console.log("");
    console.log("Age Group:");
    console.log(`0 - 18 => ${statistics.filter(q => q.age > 0 && q.age < 18).length}`);
    console.log(`18 - 25 => ${statistics.filter(q => q.age > 18 && q.age < 25).length}`);
    console.log(`25 - ♾️ => ${statistics.filter(q => q.age > 25).length}`);
  };

  return (
    <div className="archive-component">
      <div className="archive-header">
        <Header />
      </div>

      <div className="grid-container">
        {words.map((w) => (
          <div key={w.id} className="grid-item">
            <div className="words-container">

              <div className="words-header">
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

    </div>
  );
}

export default Archive;
