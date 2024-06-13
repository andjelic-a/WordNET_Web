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

    const wordClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      console.log(JSON.parse(e.currentTarget.dataset.statistics!));
    }

    return (
      <div id="Words" className="words-page">
        <div className="words-container">
          <div className="words-header">
            <h1>
              {words
                .find((word) => word.Id === associatedWords[0].WordId)
                ?.Name.toUpperCase()}
            </h1>
          </div>
          <div className="associated-word-container">
            {associatedWords.sort((a, b) => b.Count - a.Count).map((word) => (
              <div key={associatedWordCounter++} className="associated-word">
                <div className="associated-word-circle">
                  {word.Count}
                </div>
                <p data-statistics={JSON.stringify(word.Statistics)} key={word.Id} onClick={(e) => wordClick(e)}>{word.Name}</p>
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
