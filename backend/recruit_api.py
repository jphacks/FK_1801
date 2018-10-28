import requests
import os
import json

def get_shop_info(lat: float, lng: float, count: int = 10, ) -> str:
    api_key = os.environ['RECRUIT_API']

    url = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key={}&lat={}&lng={}&range=3&order=4&count={}&format=json".format(api_key, lat, lng, count)

    resp = requests.get(url).json()
    return resp


def create_data(responses: dict) -> dict:
    datas = {'restaurants':[]}
    for res in responses['results']['shop']:
        data = {
                'id':res['id'],
                'name':res['name'],
                'address':res['address'],
                'lat':res['lat'],
                'lng':res['lng'],
                'img_url':res['logo_image'],
                'url':res['urls']['pc'],
                'cal':None,
                }
        datas['restaurants'].append(data)
    return datas