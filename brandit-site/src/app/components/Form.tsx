import React from 'react'

interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
  }

const Form: React.FC<FormProps> = (props) => {
    const isPromptValid = props.prompt.length < props.characterLimit;
  const updatePromptValue = (text: string) => {
    if (text.length <= props.characterLimit) {
      props.setPrompt(text);
    }
  };

  let statusColor = "text-slate-500";
  let statusText = null;
  if (!isPromptValid) {
    statusColor = "text-red-400";
    statusText = `Input must be less than ${props.characterLimit} characters.`;
  }

  return (
    <>
        <div className="mb-6 text-slate-300">
          <p>
            Tell me what your brand is about and I will generate copy and keywords
            for you.
          </p>
        </div>

      <input
        className="p-2 w-full rounded-md focus:outline-purple-400 focus:outline text-slate-500"
        type="text"
        placeholder="cake"
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
      ></input>
      <div className={statusColor + " flex justify-between my-2 mb-6 text-sm"}>
        <div>{statusText}</div>
          <div>
            {props.prompt.length}/{props.characterLimit}
          </div>
      </div>
          <button 
              className="bg-gradient-to-r from-purple-400 
              to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-xl text-purple-100 font-semibold flex justify-center items-center"
              onClick={props.onSubmit}
              disabled={props.isLoading || !isPromptValid}
            >
              {props.isLoading ? (
                <>
                  Loading...
                  <svg className="animate-spin h-5 w-5 ml-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </>
              ) : (
                "Submit"
              )}
            </button>

    </>
  )
}

export default Form