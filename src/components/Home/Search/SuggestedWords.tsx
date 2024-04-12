import '../../../css/HomeComponents.css';

function SuggestedWords(similarWords: string[]) {


    return(
        <div className="suggestedWords">
            {similarWords.map((words) => (<p>{words}</p>))}
        </div>
    )
}

export default SuggestedWords;