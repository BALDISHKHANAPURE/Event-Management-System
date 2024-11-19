from django.urls import path
from . import views

urlpatterns = [
    path('events/', views.events_default, name='events_default'),  # URL for predictions
    path('cultural-events/', views.list_cultural_events, name='list_cultural_events'),  # List Cultural Events
    path('technical-events/', views.list_technical_events, name='list_technical_events'),
    path('sports-events/', views.list_sports_events, name='list_sports_events'),
    path('register-event/', views.register_event, name='register_event'),
]

