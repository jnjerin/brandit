import openai
import os
import argparse

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    print(f"User input: {user_input}")
    pass 



# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")
 
# Example usage
# response = openai.Completion.create(
#   engine="davinci",
#   prompt="Say this is a test", 
#   max_tokens=5
# )
# print(response.choices[0].text.strip())
