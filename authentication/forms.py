from django import forms
from .models import Create_account

class Create_account_form(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = Create_account
        fields = ["name", "email", "phone" , "password" ]

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password"])
        user.is_active = True 
        # print("🔥 Debug: User about to be saved:", user)
        if commit:
            user.save()
        # print("✅ User successfully saved with ID:", user.id)
        return user
