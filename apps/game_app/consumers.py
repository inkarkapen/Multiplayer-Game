from channels import Channel, Group
from channels.auth import http_session
from channels.sessions import channel_session
import json
from game_world import world_map

#new connections
def ws_connect(message):
    print("in connect")
    Group('player').add(message.reply_channel)
    message.reply_channel.send({
        "text": json.dumps({
            "world": world_map,
            "identifier": str(message.reply_channel)
        })
    })

#broadcasts changes
#doesn't send world map, but send second player positions
def ws_recieve(message):
    print("in recieve")
    Group('player').send({
        "text": json.dumps({
            "identifier": str(message.reply_channel),
            "pos": json.loads(message['text'])
        })
    })

#disconnects
def ws_disconnect(message):