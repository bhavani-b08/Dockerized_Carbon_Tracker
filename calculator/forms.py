from django import forms
from .models import CarbonData 

class CarbonDataForm(forms.ModelForm) :
    class Meta :
        model = CarbonData 
        exclude = ['user' , 'total_emissions' , 'timestamp']
