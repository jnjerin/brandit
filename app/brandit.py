"""
Imports the OpenAI client for interacting with the OpenAI API.

This import statement is used to access the OpenAI client, which is used to generate branding keywords and other content using the OpenAI API. The API key is loaded from an environment variable or secret management service.
"""
from openai import OpenAI
import os
import argparse
from typing import List
import re

client = OpenAI(
     api_key=os.getenv("OPENAI_API_KEY"),
)

MAX_INPUT_LENGTH = 32

def main():

    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    print(f"User input: {user_input}")
    if validate_length(user_input):
          generate_branding_snippet(user_input)
          generate_keywords(user_input)
    else:
          raise ValueError(
            f"Input length is too long. Must be under {MAX_INPUT_LENGTH}. Submitted input is {user_input}"
        )



def validate_length(prompt: str) -> bool:
    return len(prompt) <= MAX_INPUT_LENGTH


def generate_keywords(prompt: str) -> List[str]:
    # Load your API key from an environment variable or secret management service
    enriched_prompt = f"Generate related branding keywords for {prompt}: "
    print(enriched_prompt)

    response = client.completions.create(
         model="gpt-3.5-turbo-instruct", 
         prompt=enriched_prompt, 
         max_tokens=32
         )

    # Extract output text.
    keywords_text: str = response.choices[0].text

    # Strip whitespace and split into array.
    keywords_array = re.split(",|\n|;|-", keywords_text)
    
    # Clean up keywords: remove leading/trailing whitespace, convert to lowercase,
    # remove any leading numbers, and filter out empty strings.
    keywords_array = [re.sub(r'^\d+\.\s*', '', k.lower().strip()) for k in keywords_array if k.strip()]

    # # Strip whitespace.
    # keywords_text = keywords_text.strip()
    # keywords_array = re.split(",|\n|;|-", keywords_text)
    # keywords_array = [k.lower().strip() for k in keywords_array]
    # keywords_array = [k for k in keywords_array if len(k) > 0]

    print(f"Keywords: {keywords_array}")
    return keywords_array


def generate_branding_snippet(prompt: str) -> str:
    # Load your API key from an environment variable or secret management service
    enriched_prompt = f"Generate upbeat branding snippet for {prompt}: "
    print(enriched_prompt)

    response = client.completions.create(
         model="gpt-3.5-turbo-instruct",
         prompt=enriched_prompt, 
         max_tokens=32
         )

    # Extract output text
    branding_text: str = response.choices[0].text

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

