import { useContext, useState, useEffect, useRef } from "react";
import { associatedWordsContext, wordContext } from "../HomeContex";
import "../../../css/WordsComponent.css";
import { Questionee } from "../../../types/Types";
import { BarChart, PieChart } from "@mui/x-charts";

function Words() {
  const { associatedWords } = useContext(associatedWordsContext);
  const { word } = useContext(wordContext);
  const [activeWord, setActiveWord] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const [showNewContainer, setShowNewContainer] = useState(false);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [statistics, setStatistics] = useState<{
    gender: {
      manPerc: number,
      womanPerc: number
    },

    age: {
      young: number,
      middle: number,
      old: number
    }
  } | null>(null)

  const wordClick = (statistics: Questionee[], index: number) => {
    setActiveWord(index);
    setAnimate(true);
    setShowNewContainer(true);

    console.log(statistics);

    const manPerc = parseFloat(((statistics.filter(q => q.isMan == true).length / statistics.length) * 100).toFixed(2));
    const womanPerc = 100 - manPerc;

    const young = statistics.filter(q => q.age > 0 && q.age <= 18).length;
    const middle = statistics.filter(q => q.age > 18 && q.age <= 25).length;
    const old = statistics.filter(q => q.age > 25).length;

    setStatistics({
      gender: {
        manPerc,
        womanPerc
      }, age: {
        young,
        middle,
        old
      }
    });

    console.log("Percentage: ");
    console.log(`Man => ${manPerc}%`);
    console.log(`Woman => ${womanPerc}%`);

    console.log("");
    console.log("Age Group:");
    console.log(`0 - 18 => ${statistics.filter(q => q.age > 0 && q.age <= 18).length}`);
    console.log(`18 - 25 => ${statistics.filter(q => q.age > 18 && q.age <= 25).length}`);
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
            {associatedWords.sort((a, b) => b.count - a.count).map((word, index) => (
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
                  {statistics && (
          <PieChart
            series={[
              {
                data: [
                  { color: '#977940',  value: statistics.gender.manPerc, label: 'Мушко' },
                  { color: 'wheat', value: statistics.gender.womanPerc, label: 'Женско' }
                ],
                arcLabel: (item) => `${item.value}%`,
                arcLabelMinAngle: 1,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 10, additionalRadius: -10, color: 'gray' },
              },
            ]}
            width={220}
            height={200}
          />
        )}
        
        {statistics && (
          <BarChart
          series={[
            {
              data: [statistics.age.young, statistics.age.middle, statistics.age.old],
              color: 'wheat'
            },
          ]}
          height={200}
          xAxis={[{ data: ['0-18', '18-25', '25+'], scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
        
        )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Words;
