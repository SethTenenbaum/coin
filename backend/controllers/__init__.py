from services import fetch_candles_data

def get_candles_data(product_id, start_date, end_date, granularity):
    return fetch_candles_data(product_id, start_date, end_date, granularity)