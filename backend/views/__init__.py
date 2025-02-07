from flask import Blueprint, jsonify, request
from controllers import get_candles_data

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/api/candles', methods=['GET'])
def get_candles():
    product_id = request.args.get('product_id')
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    granularity = request.args.get('granularity')
    
    try:
        candles = get_candles_data(product_id, start_date, end_date, granularity)
        return jsonify(candles)
    except ValueError as e:
        return jsonify({'error': str(e)}), 400