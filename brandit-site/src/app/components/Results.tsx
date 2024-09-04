
interface ResultsProps {
  prompt: string;
  snippet: string;
  keywords: string[];
  onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {
  const keywordElements = props.keywords.map((keyword, index) => (
    <div
      key={index}
      className="bg-purple-200 p-1 text-purple-700 px-2 text-sm rounded-md"
    >
      #{keyword}
    </div>
  ));
  const keywordElementsHolder = (
    <div className="flex flex-wrap gap-2">{keywordElements}</div>
  );

  const resultSection = (label: string, body: any) => {
    return (
      <div className="bg-violet-900 p-4 my-3 rounded-md">
        <div className="text-purple-400 text-sm font-bold mb-4">{label}</div>
        <div>{body}</div>
      </div>
    );
  };

  return (
    <>
      <div className="mb-6">
        {resultSection(
          "Prompt",
          <div className="text-slate-200  text-xl ">{props.prompt}</div>)}
        {resultSection(
        "Branding Snippet", 
          <div className="text-slate-200 text-md ">{props.snippet}</div>)}
        {resultSection("Keywords", keywordElementsHolder)}
      </div>
      <button
        className="bg-gradient-to-r from-purple-400
        to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg text-purple-100  font-semibold justify-center items-center"
        onClick={props.onBack}
      >
        Back
      </button>
    </>
  );
};
export default Results;
