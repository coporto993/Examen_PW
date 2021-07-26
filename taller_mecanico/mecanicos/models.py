from django.db import models


# Create your models here.
#id autofield->autoincremental

class cliente(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length= 50)
    clave = models.CharField(max_length= 50)

class mecanico(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length= 50)
    clave = models.CharField(max_length= 50)

class publicaciones(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_trabajo = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=200)

class contacto(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length= 50)
    email = models.EmailField(null=True)
    mensaje = models.TextField(null=True)
    
    

    def __str__(self):
        return self.nombre
    


