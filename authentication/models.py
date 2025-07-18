from django.db import models
from django.contrib.auth.models import AbstractUser

class Create_account(AbstractUser):
    is_active = models.BooleanField(default=True)  
    first_name = None
    last_name = None
    username = None
    name = models.CharField(max_length=255, null=True, blank=True) 
    email = models.EmailField( unique = True ) 
    phone = models.CharField(max_length=15, unique=True )  
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [ "name" , "phone" , "password" ]  
 
