import React from 'react'

interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
  }

const Form: React.FC<FormProps> = (props) => {

  return (
    <>
        <div className="">
            <p>
                Tell me what your brand is about and I will generate copy and keywords
                for you.
            </p>
        </div>

        <input
        className=""
        type="text"
        placeholder="cake"
        value={props.prompt}
        onChange={(e) => props.setPrompt(e.currentTarget.value)}
        ></input>
    <button
      className=""
      onClick={props.onSubmit}
    >
      Submit
    </button>
  </>
  )
}

export default Form