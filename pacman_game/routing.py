from channels.routing import include, route
routing = [
    include('apps.game_app.routing.routing', path = r'^/game/')
]