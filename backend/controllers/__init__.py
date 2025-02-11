from services import fetch_candles_data_extended
from datetime import datetime

def get_candles_data(product_id, start_date, end_date, granularity):
    # Check if start_date and end_date are provided
    if not start_date or not end_date:
        return {"error": "start_date and end_date are required"}, 400

    # Check if start_date and end_date are valid Unix timestamps
    try:
        start_timestamp = int(start_date)
        end_timestamp = int(end_date)
        # Convert timestamps to datetime to validate them
        datetime.fromtimestamp(start_timestamp)
        datetime.fromtimestamp(end_timestamp)
    except (ValueError, OSError):
        return {"error": "start_date and end_date must be valid Unix timestamps"}, 400

    return fetch_candles_data_extended(product_id, start_timestamp, end_timestamp, granularity)