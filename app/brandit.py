import openai
import os

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Example usage
response = openai.Completion.create(
  engine="davinci",
  prompt="Say this is a test",
  max_tokens=5
)
print(response.choices[0].text.strip())
