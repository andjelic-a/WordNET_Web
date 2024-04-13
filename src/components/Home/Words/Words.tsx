import { useContext } from "react";
import { associatedWordsContext } from "../HomeContex";

function Words() {
    const { associatedWords } = useContext(associatedWordsContext);

    return (
        <div>
            {associatedWords.map((word) => <p style={{ color: 'blue' }} key={word.associatedwordid}>{word.name}</p>)}
        </div>
    )
}

export default Words;