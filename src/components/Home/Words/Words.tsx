import { useContext, useMemo } from "react";
import { words } from "../../../request_handler/ServerRequest";
import { associatedWordsContext } from "../HomeContex";
import "../../../css/WordsComponent.css";
import { Ages } from "../../../types/Types";

function Words() {
  const { associatedWords } = useContext(associatedWordsContext);

  const wordClick = (statistics: Ages[]) => {
    console.log(statistics);
  };

  const sortedAssociatedWords = useMemo(() => {
    return associatedWords.sort((a, b) => b.Count - a.Count);
  }, [associatedWords]);

  if (associatedWords.length < 1) {
    return null;
  }

  const wordName = words.find((word) => word.Id === associatedWords[0].WordId)?.Name.toUpperCase();

  return (
    <div id="Words" className="words-page">
      <div className="words-container">
        <div className="words-header">
          <h1>{wordName}</h1>
        </div>
        <div className="associated-word-container">
          {sortedAssociatedWords.map((word) => (
            <div key={word.Id} className="associated-word">
              <div className="associated-word-circle">
                {word.Count}
              </div>
              <p
                onClick={(_) => wordClick(word.Ages)}
              >
                {word.Name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Words;
