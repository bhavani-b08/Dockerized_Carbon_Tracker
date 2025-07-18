from django.urls import path 
from . import views
urlpatterns = [
    path( '' , views.index , name='index' ) ,
    path( 'sign_in/' , views.sign_in , name='sign_in' ) ,
    path( 'user_credentials/' , views.sign_up , name='user_credentials' ) ,
    path( 'fp_track/' , views.fp_track , name="fp_track" ) ,
    path( 'prediction/' , views.prediction , name="prediction" ) ,

]