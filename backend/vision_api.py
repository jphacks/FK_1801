from sys import argv
import json
import os

import requests
from base64 import b64encode

ENDPOINT_URL = 'https://vision.googleapis.com/v1/images:annotate'

def get_food_name(img_bin: bytes) -> str:
    api_key = os.environ['VISION_API']
    img_requests = []
    text = img_bin.decode()
    img_requests.append({
            'image': {'content': text},
            'features': [{
                'type': 'LABEL_DETECTION',
                'maxResults': 1
            }]
    })

    response = requests.post(ENDPOINT_URL,
                             data=json.dumps({"requests": img_requests}).encode(),
                             params={'key': api_key},
                             headers={'Content-Type': 'application/json'})

    resp = response.json()['responses'][0]['labelAnnotations'][0]['description']
    return resp