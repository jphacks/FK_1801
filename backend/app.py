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
    calorie = 500.0

    return jsonify(name=name, calorie=calorie)

@app.route('/search', methods=['GET'])
def search():
    # lat = request.args.get('lat')
    # lng = request.args.get('lng')
    # count = request.args.get('count')
    # responese = get_shop_info(lat, lng, count)
    # datas = create_data(responese)
    # return jsonify(datas)

    # Dummy
    return '''
    {
      "restaurants": [
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u4e2d\u592e\u8857\uff14\uff0d\uff12\uff13\u30db\u30c6\u30eb\u30bb\u30f3\u30c8\u30e9\u30fc\u30b6B\uff11F",
          "cal": 200,
          "id": "J000761007",
          "img_url": "https://imgfp.hotp.jp/IMGH/72/28/P022557228/P022557228_69.jpg",
          "lat": "33.5908687000",
          "lng": "130.4220246250",
          "name": "\u3068\u3081\u624b\u7fbd \u535a\u591a\u7b51\u7d2b\u53e3\u5e97",
          "url": "https://www.hotpepper.jp/strJ000761007/?vos=nhppalsa000016"
        },
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u6771\uff12-5-19",
          "cal": 235,
          "id": "J001193023",
          "img_url": "https://imgfp.hotp.jp/IMGH/91/74/P001069174/P001069174_69.jpg",
          "lat": "33.5878748949",
          "lng": "130.4229665645",
          "name": "\u535a\u591a\u5c45\u9152\u5c4b \u713c\u9ce5 \u304f\u3044\u3057\u3093\u307c",
          "url": "https://www.hotpepper.jp/strJ001193023/?vos=nhppalsa000016"
        },
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u4e2d\u592e\u8857\uff16\uff0d\uff12\u3000\uff11\uff26",
          "cal": 1000,
          "id": "J000952492",
          "img_url": "https://imgfp.hotp.jp/IMGH/51/52/P021315152/P021315152_69.jpg",
          "lat": "33.5888328139",
          "lng": "130.4215552777",
          "name": "\u4e5d\u5dde\u5275\u4f5c\u9152\u5834 \u535a\u591a \u7b11\u9580",
          "url": "https://www.hotpepper.jp/strJ000952492/?vos=nhppalsa000016"
        },
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u4e2d\u592e\u88571-1 JR\u30b7\u30c6\u30a3\u3000\u30a2\u30df\u30e5\u30d7\u30e9\u30b6\u535a\u591a9\uff26",
          "cal": 800,
          "id": "J001117713",
          "img_url": "https://imgfp.hotp.jp/IMGH/83/35/P026978335/P026978335_69.jpg",
          "lat": "33.5905248327",
          "lng": "130.4210694430",
          "name": "\u30ab\u30f3\u30c6\u30a3\u30fc\u30ca\u30b7\u30c1\u30ea\u30a2\u30fc\u30ca CANTINA SICILIANA",
          "url": "https://www.hotpepper.jp/strJ001117713/?vos=nhppalsa000016"
        },
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u6771\uff12\uff0d\uff14\uff0d\uff11\uff17\u7b2c\u516d\u5ca1\u90e8\u30d3\u30eb1F\uff08\u7b2c2\u5408\u540c\u5e81\u820e\u524d\uff09",
          "cal": null,
          "id": "J000026389",
          "img_url": "https://imgfp.hotp.jp/IMGH/66/79/P030456679/P030456679_69.jpg",
          "lat": "33.5884079018",
          "lng": "130.4236328787",
          "name": "\u5143\u7956\u7af9\u70ad\u3084\u304d\u9ce5 \u306f\u304b\u305f\u98a8\u571f \u672c\u5e97",
          "url": "https://www.hotpepper.jp/strJ000026389/?vos=nhppalsa000016"
        },
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u6771\uff12\uff0d\uff14\uff0d\uff17",
          "cal": 400,
          "id": "J000705540",
          "img_url": "https://imgfp.hotp.jp/IMGH/10/12/P028071012/P028071012_69.jpg",
          "lat": "33.5887189795",
          "lng": "130.4237578590",
          "name": "\u535a\u591a\u9903\u5b50\u820e 603 \u7b51\u7d2b\u53e3\u5e97",
          "url": "https://www.hotpepper.jp/strJ000705540/?vos=nhppalsa000016"
        },
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u4e2d\u592e\u88574-10-2F",
          "cal": null,
          "id": "J001054134",
          "img_url": "https://imgfp.hotp.jp/IMGH/35/99/P027493599/P027493599_69.jpg",
          "lat": "33.5914436349",
          "lng": "130.4220718275",
          "name": "\u6d77\u9bae\u51e6 \u535a\u591a \u677e\u6708\u4ead",
          "url": "https://www.hotpepper.jp/strJ001054134/?vos=nhppalsa000016"
        },
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u6771\uff12\u2010\uff12\u2010\uff11\uff18",
          "cal": 980,
          "id": "J000749257",
          "img_url": "https://imgfp.hotp.jp/IMGH/74/89/P011137489/P011137489_69.jpg",
          "lat": "33.5888970100",
          "lng": "130.4235128764",
          "name": "\u304b\u3093\u3066\u304d\u3084 \u535a\u591a\u99c5\u524d\u5e97",
          "url": "https://www.hotpepper.jp/strJ000749257/?vos=nhppalsa000016"
        },
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u6771\uff11-1-33   ",
          "cal": 50,
          "id": "J001202972",
          "img_url": "https://imgfp.hotp.jp/IMGH/64/26/P030666426/P030666426_69.jpg",
          "lat": "33.5921507668",
          "lng": "130.4215857414",
          "name": "\u5fd7\u307e\u3065 \u535a\u591a",
          "url": "https://www.hotpepper.jp/strJ001202972/?vos=nhppalsa000016"
        },
        {
          "address": "\u798f\u5ca1\u770c\u798f\u5ca1\u5e02\u535a\u591a\u533a\u535a\u591a\u99c5\u6771\uff12\u4e01\u76ee3-29\u3000\u6771\u798f\u535a\u591a\u99c5\u6771\u30d3\u30eb2F",
          "cal": null,
          "id": "J000705280",
          "img_url": "https://imgfp.hotp.jp/IMGH/11/91/P001091191/P001091191_69.jpg",
          "lat": "33.5889189575",
          "lng": "130.4238078491",
          "name": "\u554f\u5c4b\u9152\u5834 \u3068\u3093\u3068\u3093",
          "url": "https://www.hotpepper.jp/strJ000705280/?vos=nhppalsa000016"
        }
      ]
    }
    '''

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
