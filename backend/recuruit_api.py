import requests
import os
import json

def get_shop_name(lat: float, lng: float) -> str:
    api_key = os.environ['RECRUIT_API']

    url = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key={}&lat={}&lng={}&range=5&order=4&format=json".format(api_key, lat, lng)

    resp = requests.get(url).json()
    return resp