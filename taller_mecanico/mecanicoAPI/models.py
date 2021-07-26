from django.db import models

# Create your models here.
class Vehiculo(models.Model):
    id = models.IntegerField(primary_key=True)
    patente = models.CharField(max_length=6)
    modelo = models.CharField(max_length=30)
