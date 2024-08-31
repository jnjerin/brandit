import React from 'react'

interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    characterLimit: number;
  }

const Form: React.FC<FormProps> = (props) => {
    const isPromptValid = props.prompt.length < props.characterLimit;
  const updatePromptValue = (text: string) => {
    if (text.length <= props.characterLimit) {
      props.setPrompt(text);
    }
  };

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
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
        ></input>
        <div>
          {props.prompt.length}/{props.characterLimit}
        </div>
        <button
        className=""
        onClick={props.onSubmit}
        disabled={!isPromptValid}
        >
        Submit
        </button>
  </>
  )
}

export default Form