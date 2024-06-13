import "../../css/ArchiveComponents.css";
import { words } from "../../request_handler/ServerRequest.ts";
import Header from "../Home/Header/Header.tsx";

function Archive() {
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
                <h1>{w.Name}</h1>
              </div>

              <div className="associated-word-container">
                {w.AssociatedWords.sort((a, b) => b.Count - a.Count).map((a) => (
                  <div className="associated-word">
                    <div className="associated-word-circle">{a.Count}</div>
                    <p>{a.Name}</p>
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
