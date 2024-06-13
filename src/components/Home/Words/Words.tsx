import { useContext, useMemo } from "react";
import { words } from "../../../request_handler/ServerRequest";
import { associatedWordsContext } from "../HomeContex";
import "../../../css/WordsComponent.css";

function Words() {
  const { associatedWords } = useContext(associatedWordsContext);

  const wordClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    console.log(JSON.parse(e.currentTarget.dataset.statistics!));
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
                data-statistics={JSON.stringify(word.Statistics)}
                onClick={wordClick}
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
