import { useContext, useMemo, useState, useEffect, useRef } from "react";
import { associatedWordsContext, wordContext } from "../HomeContex";
import "../../../css/WordsComponent.css";
import { Questionee } from "../../../types/Types";

function Words() {
  const { associatedWords } = useContext(associatedWordsContext);
  const { word } = useContext(wordContext);
  const [activeWord, setActiveWord] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const [showNewContainer, setShowNewContainer] = useState(false);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);

  const wordClick = (statistics: Questionee[], index: number) => {
    setActiveWord(index);
    setAnimate(true);
    setShowNewContainer(true);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (wordRefs.current.every((ref) => ref && !ref.contains(event.target as Node))) {
      setActiveWord(null);
      setAnimate(false);
      setShowNewContainer(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sortedAssociatedWords = useMemo(() => {
    return associatedWords.sort((a, b) => b.count - a.count);
  }, [associatedWords]);

  if (associatedWords.length < 1) {
    return null;
  }

  const wordName = word.toUpperCase();

  return (
    <div id="Words" className="words-page">
      <div className={`words-container-wrapper ${animate ? 'animate' : ''}`}>
        <div className="words-container">
          <div className="words-header">
            <h1>{wordName}</h1>
          </div>
          <div className="associated-word-container">
            {sortedAssociatedWords.map((word, index) => (
              <div
                key={word.id}
                className={`associated-word ${activeWord === index ? "active" : ""}`}
                ref={(el) => (wordRefs.current[index] = el)}
              >
                <div className="associated-word-circle">{word.count}</div>
                <p onClick={() => wordClick(word.questioneeDTOs, index)}>
                  {word.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        {showNewContainer && (
          <div className="new-words-container">
          </div>
        )}
      </div>
    </div>
  );
}

export default Words;
