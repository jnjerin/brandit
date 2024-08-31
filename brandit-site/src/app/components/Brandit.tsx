'use client'

import React from 'react'
import Form from './Form';
import Results from './Results';

const Brandit = () => {
  const CHARACTER_LIMIT: number = 32;
  const ENDPOINT: string =
    "https://9sxyr49ks0.execute-api.us-east-1.amazonaws.com/prod/generate_snippet_and_keywords";

  const [prompt, setPrompt] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);

  const onSubmit = () => {
    console.log("Submitting: " + prompt);
    fetch(`${ENDPOINT}?prompt=${prompt}`)
      .then((res) => res.json())
      .then(onResult);
  };

  const onResult = (data: any) => {
    setSnippet(data.snippet);
    setKeywords(data.keywords);
    setHasResult(true);
  };

  const onReset = () => {
    setPrompt("");
    setHasResult(false);
  };

  let displayedElement = null;

  if (hasResult) {
    displayedElement = (
      <Results
        snippet={snippet}
        keywords={keywords}
        onBack={onReset}
        prompt={prompt}
      />
    );
  } else {
    displayedElement = (
      <Form
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={onSubmit}
        characterLimit={CHARACTER_LIMIT}
      />
    );
  }


  return (
    <div>
      {displayedElement}
    </div>
   
  )
}

export default Brandit