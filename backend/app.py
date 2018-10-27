# -*- coding: utf-8 -*-

from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import database

app = Flask(__name__)
CORS(app)

redis = database.connect()

@app.route('/')
def index():
    return redis.get('Key')

@app.route('/dummy', methods=['GET', 'POST'])
def dummy():
    if request.method == 'POST':
        parameters = json.loads(request.data.decode('utf-8'))
        message = parameters['message']
    else:
        message = 'Hello World'

    return jsonify(message=message)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
