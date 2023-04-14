import React, { useState } from 'react';

const Faq = () => {

    const [showAnswer, setShowAnswer] = useState(false);

    const answerClick = () => {
        setShowAnswer(!showAnswer);
    }

    return(
        <div id="faq">
            <p onClick={answerClick}>Comment appelle t-on un bateau a trois coques?</p>
            {showAnswer &&
            <p>Un trimaran</p>}
        </div>
    )
}

export default Faq;