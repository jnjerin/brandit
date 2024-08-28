import openai
import os
import argparse
from typing import List

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    print(f"User input: {user_input}")
    branding_result = generate_branding_snippet(user_input)
    keywords_Result = generate_keywords(user_input)
    print(result)


def generate_keywords(prompt: str) -> List[str]:
    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")
    enriched_prompt = f"Generate related branding keywords for {prompt}: "
    print(enriched_prompt)

    response = openai.Completion.create(
        engine="davinci-instruct-beta-v3", prompt=enriched_prompt, max_tokens=32
    )

    # Extract output text.
    keywords_text: str = response["choices"][0]["text"]

    # Strip whitespace.
    keywords_text = keywords_text.strip()

    return keywords_text



def generate_branding_snippet(prompt: str) -> str:
    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")
    enriched_prompt = f"Generate upbeat branding snippet for {prompt}: "
    print(enriched_prompt)

    response = openai.Completion.create(
        engine="davinci-instruct-beta-v3", prompt=enriched_prompt, max_tokens=32
    )

    # Extract output text
    branding_text: str = response["choices"][0]["text"]

    # Strip whitespace.
    branding_text = branding_text.strip()

    # Add ... to truncated statements
    last_char = branding_text[-1]
    if last_char not in {".", "!", "?"}:
        branding_text += "..."

    print(f"Snippet: {branding_text}")
    return branding_text 

if __name__ == "__main__":
    main()
 
