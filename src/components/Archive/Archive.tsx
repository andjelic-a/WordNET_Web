import "../../css/ArchiveComponents.css";
import { words } from "../../request_handler/ServerRequest.ts";
import Header from "../Home/Header/Header.tsx";

function Archive() {
  console.log(words)

  return (
    <div className="archive-component">
      <div className="archive-header">
        <Header />
      </div>

      <div className="grid-container">
        {words.map((w) => (
          <div className="grid-item">
            <div className="words-container">

              <div className="words-header">
                <h1>{w.name}</h1>
              </div>

              <div className="associated-word-container">
                {w.associatedwords.map((a) => (
                  <div className="associated-word">
                    <div className="associated-word-circle">{a.count}</div>
                    <p>{a.name}</p>
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
