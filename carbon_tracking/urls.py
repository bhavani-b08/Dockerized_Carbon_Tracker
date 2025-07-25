from django.contrib import admin  # Import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),   # Admin URL
    path( '' , include( 'authentication.urls' )) ,
    path('details/' , include('calculator.urls')),
]



urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
