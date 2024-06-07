import { useContext } from "react";
import { words } from "../../../request_handler/ServerRequest";
import { associatedWordsContext } from "../HomeContex";
import "../../../css/WordsComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
            {associatedWords.map((word) => (
              <div className="associated-word">
                <div className="associated-word-circle">
                  {associatedWordCounter++}
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
