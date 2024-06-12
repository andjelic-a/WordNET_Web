import { useContext } from "react";
import { words } from "../../../request_handler/ServerRequest";
import { associatedWordsContext } from "../HomeContex";
import "../../../css/WordsComponent.css";

function Words() {
  const { associatedWords } = useContext(associatedWordsContext);
  let associatedWordCounter = 1;

  const test = () => {
    if (associatedWords.length < 1) {
      return <></>;
    }

    return (
      <div id="Words" className="words-page">
        <div className="words-container">
          <div className="words-header">
            <h1>
              {words
                .find((word) => word.wordid === associatedWords[0].wordid)
                ?.name.toUpperCase()}
            </h1>
          </div>
          <div className="associated-word-container">
            {associatedWords.sort((a, b) => b.count - a.count).map((word) => (
              <div key={associatedWordCounter++} className="associated-word">
                <div className="associated-word-circle">
                  {word.count}
                </div>
                <p key={word.associatedwordid}>{word.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <>{test()}</>;
}

export default Words;
