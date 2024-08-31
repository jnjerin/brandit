'use client'

import React from 'react'

const Brandit = () => {
  const ENDPOINT: string =
    "https://9sxyr49ks0.execute-api.us-east-1.amazonaws.com/prod/generate_snippet_and_keywords";

  const [prompt, setPrompt] = React.useState('')

  const onSubmit = () => {
    console.log('submitting' + prompt)
    fetch(`${ENDPOINT}?prompt=${prompt}`).then(console.log)
  }

  return (
    <>
      <h1>Brandit</h1>
      <p>
          Tell me what your brand is about and i will generate copy and keywords for you
      </p>
      <input 
        type='text' 
        placeholder='cake'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></input>
      <button onClick={onSubmit}>Generate</button>
    </>
  )
}

export default Brandit