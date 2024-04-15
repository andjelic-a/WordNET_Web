import { useContext } from "react";
import { words } from "../../../request_handler/ServerRequest";
import { associatedWordsContext } from "../HomeContex";

function Words() {
    const { associatedWords } = useContext(associatedWordsContext);

    const test = () => {
        if (associatedWords.length < 1) {
            return (<></>);
        }
        
        return (
            <div id="Words" className="words">
                <div className="words-header">
                    <h1>{(words.find((word) => word.wordid === associatedWords[0].wordid))?.name.toUpperCase()}</h1>
                </div>
                {associatedWords.map((word) => <p key={word.associatedwordid}>{word.name}</p>)}
            </div>
        )
    }

    return (
        <>{test()}</>
    )
}

export default Words;