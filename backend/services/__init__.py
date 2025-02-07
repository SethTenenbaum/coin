from datetime import datetime
from coinbase.rest import RESTClient
from config import Config

# Granularity options
ONE_MINUTE = 'ONE_MINUTE'
FIVE_MINUTE = 'FIVE_MINUTE'
FIFTEEN_MINUTE = 'FIFTEEN_MINUTE'
THIRTY_MINUTE = 'THIRTY_MINUTE'
ONE_HOUR = 'ONE_HOUR'
TWO_HOUR = 'TWO_HOUR'
SIX_HOUR = 'SIX_HOUR'
ONE_DAY = 'ONE_DAY'

# Granularity in seconds
GRANULARITY_SECONDS = {
    ONE_MINUTE: 60,
    FIVE_MINUTE: 300,
    FIFTEEN_MINUTE: 900,
    THIRTY_MINUTE: 1800,
    ONE_HOUR: 3600,
    TWO_HOUR: 7200,
    SIX_HOUR: 21600,
    ONE_DAY: 86400
}

def fetch_candles_data(product_id, start_date, end_date, granularity):
    client = RESTClient(api_key=Config.KEY_NAME, api_secret=Config.PRIVATE_KEY)
    
    # Convert dates to timestamps
    start_timestamp = int(datetime.strptime(start_date, '%Y-%m-%d %H:%M:%S').timestamp())
    end_timestamp = int(datetime.strptime(end_date, '%Y-%m-%d %H:%M:%S').timestamp())

    # Calculate the number of elements
    time_diff = end_timestamp - start_timestamp
    granularity_seconds = GRANULARITY_SECONDS[granularity]
    num_elements = time_diff // granularity_seconds

    if num_elements > 350:
        raise ValueError("The number of elements exceeds the maximum limit of 350.")

    # Ensure no more than 350 units of data are returned
    candles = client.get_candles(product_id=product_id, granularity=granularity, start=start_timestamp, end=end_timestamp, limit=350)
    return candles