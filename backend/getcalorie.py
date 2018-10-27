import requests
import redis

def rgetCal(data,name):
    #データベースからnameに対応するカロリーを取得
    y = data.get(name)
    if y:
        return y
    else
        return None

def translate(phrase):
    # Glosbe API により、引数に与えられた単語の翻訳を取得                                                                                                                
    # set URL                                                                                                                                                            
    from_lang = "en"# English                                                                                                                                            
    dest_lang = "ja"# Japanese                                                                                                                                           
    url = "https://glosbe.com/gapi/translate?from=" \
        + from_lang + "&dest=" + dest_lang \
        + "&format=json&phrase=" + phrase + "&pretty=true"
    #APIに投げる
    response = requests.get(url)
    #jsonにする
    json_dict = response.json()

    return_txt = "" # これを返り値にする                                                                                                                                 
    tuc = json_dict["tuc"]# tuc: list                                                                                                                                    
    for i in range(len(tuc)):
        if u"phrase" in tuc[i].keys():
            return_txt += tuc[i]["phrase"]["text"] + "\n" 
    if return_txt:
            return return_txt
    else:
            print("not found:", phrase)
            return None

if __name__ == "__main__":
    #r = redis.StrictRedis(host='localhost', port=5000, db=1)
