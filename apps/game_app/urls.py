from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.render_game),
    url(r'^/logout', views.logout)
]