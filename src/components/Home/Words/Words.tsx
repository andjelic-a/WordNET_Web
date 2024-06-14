import { useContext, useMemo } from "react";
//import { words } from "../../../request_handler/ServerRequest";
import { associatedWordsContext, wordContext } from "../HomeContex";
import "../../../css/WordsComponent.css";
import { Questionee } from "../../../types/Types";

function Words() {
  const { associatedWords } = useContext(associatedWordsContext);
  const { word } = useContext(wordContext);

  const wordClick = (statistics: Questionee[]) => {
    console.log(statistics);
  };

  const sortedAssociatedWords = useMemo(() => {
    return associatedWords.sort((a, b) => b.count - a.count);
  }, [associatedWords]);

  if (associatedWords.length < 1) {
    return null;
  }

  //const wordName = words.find((word) => word.Id === associatedWords[0].WordId)?.Name.toUpperCase();
  const wordName = word.toUpperCase();

  return (
    <div id="Words" className="words-page">
      <div className="words-container">
        <div className="words-header">
          <h1>{wordName}</h1>
        </div>
        <div className="associated-word-container">
          {sortedAssociatedWords.map((word) => (
            <div key={word.id} className="associated-word">
              <div className="associated-word-circle">
                {word.count}
              </div>
              <p
                onClick={(_) => wordClick(word.questioneeDTOs)}
              >
                {word.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Words;
