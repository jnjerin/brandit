'use client'

import React from 'react'
import Form from './Form';
import Results from './Results';

const Brandit = () => {
  const ENDPOINT: string =
    "https://9sxyr49ks0.execute-api.us-east-1.amazonaws.com/prod/generate_snippet_and_keywords";

  const [prompt, setPrompt] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);

  const onSubmit = () => {
    console.log('submitting' + prompt)
    fetch(`${ENDPOINT}?prompt=${prompt}`).then(console.log)
  }

  return (
    <div>
      <Form />
      <Results />
    </div>
   
  )
}

export default Brandit