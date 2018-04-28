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
            "identifier": str(message.reply_channel)
        })
    })

#broadcasts changes
def ws_recieve(message):

#disconnects
def ws_disconnect(message):