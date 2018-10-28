import requests
import redis

def translate(phrase):
    from_lang = "en"
    dest_lang = "ja"
    url = "https://glosbe.com/gapi/translate?from=en&dest=ja&format=json&phrase={}&pretty=true".format(phrase)
    response = requests.get(url)
    json_dict = response.json()

    return_txt = ""
    tuc = json_dict["tuc"]
    for i in range(len(tuc)):
        if "phrase" in tuc[i].keys():
            return_txt += tuc[i]["phrase"]["text"] + "\n"
    if return_txt:
        return return_txt
    else:
        return None
