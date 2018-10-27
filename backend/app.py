# -*- coding: utf-8 -*-

from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import database

from recruit_api import create_data, get_shop_info
from vision_api import get_food_name

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

@app.route('/food', methods=['POST'])
def food():
    parameters = json.loads(request.data.decode('utf-8'))
    blob = parameters['blob']

    # Dummy

    name = 'pizza'
    carorie = 500.0

    return jsonify(name=name, carorie=carorie)

@app.route('/search', methods=['GET'])
def search():
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    count = request.args.get('count')
    responese = get_shop_info(lat, lng, count)
    datas = create_data(responese)
    return jsonify(datas)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
