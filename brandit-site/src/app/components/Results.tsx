import React from 'react'

interface ResultsProps {
    prompt: string;
    snippet: string;
    keywords: string[];
    onBack: any;
  }

  const Results: React.FC<ResultsProps> = (props) => {
    const keywordElements = [];
    for (let i = 0; i < props.keywords.length; i++) {
    const element = (
      <div
        key={i}
        className=""
      >
        #{props.keywords[i]}
      </div>
    );
    keywordElements.push(element);
  }
  return (
    <>
        <div className="">
          Your results:
          <div>Snippet: {props.snippet}</div>
          <div>Keywords: {keywordElements}</div>

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