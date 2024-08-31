'use client'

import React from 'react'

const Brandit = () => {
  const [prompt, setPrompt] = React.useState('')

  return (
    <>
      <h1>Brandit</h1>
      <p>
          Tell me what your brand is about and i will generate copy and keywords for you
      </p>
      <input type='text' placeholder='cake'></input>
      <button>Generate</button>
    </>
  )
}

export default Brandit