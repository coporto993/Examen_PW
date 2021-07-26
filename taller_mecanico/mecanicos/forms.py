from django import forms
from .models import contacto
from django.contrib.auth.forms import UserCreationForm



class contactoform(forms.ModelForm):

    class Meta:
        model = contacto
        fields= '__all__'


class CustomUserForm(UserCreationForm):
    pass