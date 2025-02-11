from flask import Blueprint, jsonify, request
from controllers import get_candles_data

candles_bp = Blueprint('candles', __name__)

@candles_bp.route('/api/candles')
def get_data():
    product_id = request.args.get('product_id')
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    granularity = request.args.get('granularity')
    
    data, status_code = get_candles_data(product_id, start_date, end_date, granularity)
    return jsonify(data), status_code