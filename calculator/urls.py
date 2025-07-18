from django.urls import path
from . import views 
urlpatterns = [
    path('details/' , views.collect_data , name = 'collect_data') ,
    path('fp_track/', views.save_details, name='save_details'),
    ]
