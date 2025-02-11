from flask import Flask
from routes.candles import candles_bp

app = Flask(__name__)
app.register_blueprint(candles_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)