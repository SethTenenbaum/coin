import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Access environment variables
key_name = os.getenv('KEY_NAME')
private_key = os.getenv('PRIVATE_KEY')