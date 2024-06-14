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
          <div key={w.id} className="grid-item">
            <div className="words-container">

              <div className="words-header">
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

    </div>
  );
}

export default Archive;
