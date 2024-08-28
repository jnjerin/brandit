from fastapi import FastAPI
from fastapi import FastAPI
from brandit import generate_branding_snippet, generate_keywords

app = FastAPI() 

@app.get("/generate_snippet")
async def generate_snippet_api(prompt: str):
    validate_input_length(prompt)
    snippet = generate_branding_snippet(prompt)
    return {"snippet": snippet, "keywords": []}


#uvicorn brandit_api:app --reload