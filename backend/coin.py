# filepath: /Users/sethtenenbaum/Documents/repos/coin/backend/coin.py
from datetime import datetime, timedelta
from coinbase.rest import RESTClient
from dotenv import load_dotenv
load_dotenv()

key_name = os.getenv('KEY_NAME')
private_key = os.getenv('PRIVATE_KEY')

def get_candles_data():
    client = RESTClient(api_key=key_name, api_secret=private_key)
    current_datetime = datetime.now()
    current_timestamp = int(current_datetime.timestamp())

    minutes_before_now = 350 * 5
    past_datetime = current_datetime - timedelta(minutes=minutes_before_now)
    past_timestamp = int(past_datetime.timestamp())

    candles = client.get_candles(product_id='BTC-USD', granularity='FIVE_MINUTE', start=past_timestamp, end=current_timestamp, limit=300)
    return candles