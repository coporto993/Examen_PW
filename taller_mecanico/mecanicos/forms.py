from django import forms
from .models import contacto



class contactoform(forms.ModelForm):

    class Meta:
        model = contacto
        fields= '__all__'