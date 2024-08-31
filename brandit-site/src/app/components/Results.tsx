import React from 'react'

interface ResultsProps {
    prompt: string;
    snippet: string;
    keywords: string[];
    onBack: any;
  }

  const Results: React.FC<ResultsProps> = (props) => {
  return (
    <>
        <div className="">
          Your resuslts:
          <div>Snippet: {props.snippet}</div>
          <div>Keywords: {props.keywords}</div>

        </div>
      <button
        className=""
        onClick={props.onBack}
      >
        Back
      </button>
    </>
  )
}

export default Results