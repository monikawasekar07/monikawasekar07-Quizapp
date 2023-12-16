import React from 'react'

function ShowResult(props) {
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>TryAgain</button>
    </>
  )
}

export default ShowResult;