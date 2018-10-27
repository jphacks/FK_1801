import redis
import os

def get_config():
    database_url = os.environ['REDIS_URL'].split('//')[1].split('@')
    host_and_port = (database_url[0] if len(database_url) == 1 else database_url[1]).split(':')

    return {
        'password': None if len(database_url) == 1 else database_url[0].split(':')[1],
        'host': host_and_port[0],
        'port': host_and_port[1]
    }

def connect():
    config = get_config()
    return redis.Redis(host=config['host'], port=config['port'], password=config['password'])
