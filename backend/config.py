import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    KEY_NAME = os.getenv('KEY_NAME')
    PRIVATE_KEY = os.getenv('PRIVATE_KEY')