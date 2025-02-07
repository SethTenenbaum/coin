import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Access environment variables
key_name = os.getenv('KEY_NAME')
private_key = os.getenv('PRIVATE_KEY')
from datetime import datetime, timedelta
from coinbase.rest import RESTClient
# from strategies.months_in_year import get_unix_timestamps_from_last_n

# Initialize the RESTClient
client = RESTClient(api_key=key_name, api_secret=private_key)
print(client)
# Example: Get candles for BTC-USD
# begin = get_unix_timestamps_from_last_n(350)[0]
current_datetime = datetime.now()

# Convert to UNIX timestamp
current_timestamp = int(current_datetime.timestamp())
#print(begin, current_timestamp)
# Calculate the timestamp for (5 * 350) minutes before now

minutes_before_now = 350 * 5
past_datetime = current_datetime - timedelta(minutes=minutes_before_now)
past_timestamp = int(past_datetime.timestamp())

candles = client.get_candles(product_id='BTC-USD', granularity='FIVE_MINUTE', start=past_timestamp , end=current_timestamp, limit=300)  # 86400 seconds = 1 day
print(candles)
# Print the candles
#for candle in candles:
#    print(candle)