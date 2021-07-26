"""taller_mecanico URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import index

#www.taller_mecanico.cl/mecanicos/crear
urlpatterns = [
    path('', index, name="index"),

    path('listar/', views.listar, name='listar'),

    path('crear/', views.crear, name='crear'),

    path('CAracteristicas/', views.CAracteristicas, name='CAracteristicas'),

    path('caracteristicasmec/', views.caracteristicasmec, name='caracteristicasmec'),

    path('Caracteristicasuser/', views.Caracteristicasuser, name='Caracteristicasuser'),

    path('clientes/', views.clientes, name='clientes'),

    path('contacto/', views.contacto, name='contacto'),

    path('contactoM/', views.contactoM, name='contactoM'),

    path('elec_usuario/', views.elec_usuario, name='elec_usuario'),

    path('fichatecmec2/', views.fichatecmec2, name='fichatecmec2'),

    path('fichatecmec3/',views.fichatecmec3, name='fichatecmec3'),

    path('FichaTecnica/',views.FichaTecnica, name = 'FichaTecnica'),

    path('fichatecnica2/',views.fichatecnica2, name = 'fichatecnica2'),

    path('fichatecnica2User/',views.fichatecnica2User, name='fichatecnica2User'),

    path('fichatecnica3/',views.fichatecnica3, name= 'fichatecnica3'),

    path('fichatecnica3User/',views.fichatecnica3User,name='fichatecnica3User'),

    path('fichatecnicaUser/',views.fichatecnicaUser,name='fichatecnicaUser'),

    path('fichetecmec1/',views.fichetecmec1,name='fichetecmec1'),

    path('formulario/',views.formulario,name='formulario'),

    path('formularioEXITO/',views.formularioEXITO,name='formularioEXITO'),

    path('IniciarSesion/',views.IniciarSesion,name='IniciarSesion'),

    path('IniciarSesionMecanico/',views.IniciarSesionMecanico, name='IniciarSesionMecanico'),

    path('pagina_error/',views.pagina_error, name='pagina_error'),

    path('publicar/',views.publicar, name ='publicar'),

    path('user/',views.user, name='user'),

    path('userMecanico/',views.userMecanico,name='userMecanico'),

<<<<<<< HEAD
=======
    path('login/', views.login, name = 'login'),

    path('clientem',views.clientem,name='clientem')

>>>>>>> rama_thomas

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)