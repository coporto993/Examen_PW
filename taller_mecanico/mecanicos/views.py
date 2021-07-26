from django.shortcuts import render
from django.http import HttpResponse
from .forms import contactoform

# Create your views here.

def index(request):

    return render(request,'mecanicos/index.html' , {})

def listar(request):

    return render(request,'mecanicos/listar.html' , {})

def crear(request):

    return render(request,'mecanicos/crear.html' , {})

def CAracteristicas(request):
    return render(request,'mecanicos/CAracteristicas.html' , {})

def caracteristicasmec(request):

    return render(request,'mecanicos/caracteristicasmec.html' , {})

def Caracteristicasuser(request):

    return render(request,'mecanicos/Caracteristicasuser.html' , {})

def clientes(request):

    return render(request,'mecanicos/clientes.html' , {})

def contacto(request):
    data = {
        'form': contactoform()
    }
    if request.method== 'POST':
        formulario= contactoform(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "contacto guardado"


    return render(request,'mecanicos/contacto.html' , data)

def contactoM(request):

    return render(request,'mecanicos/contactoM.html' , {})

def elec_usuario(request):

  return render(request,'mecanicos/elec_usuario.html' , {})

def fichatecmec2(request):

    return render(request,'mecanicos/fichatecmec2.html' , {})

def FichaTecnica(request):
    return render(request,'mecanicos/FichaTecnica.html', {})

def fichatecnica2(request):
    return render(request, 'mecanicos/fichatecnica2.html' , {})

def fichatecnica2User(request):
    return render(request,'mecanicos/fichatecnica2User.html' , {})


def fichatecmec3(request):
    return render(request,'mecanicos/fichatecmec3.html' , {})

def fichatecnica3(request):
    return render(request,'mecanicos/fichatecnica3.html', {})


def fichatecnica3User(request):
    return render(request,'mecanicos/fichatecnica3User.html' , {})


def fichatecnicaUser(request):
    return render(request,'mecanicos/fichatecnicaUser.html' , {})


def fichetecmec1(request):
    return render(request,'mecanicos/fichetecmec1.html' , {} )


def formulario(request):
    return render(request, 'mecanicos/formulario.html' , {})


def formularioEXITO(request):
    return render(request, 'mecanicos/formularioEXITO.html' , {})


def IniciarSesion(request):
    return render(request, 'mecanicos/IniciarSesion.html' , {})


def IniciarSesionMecanico(request):
    return render(request, 'mecanicos/IniciarSesionMecanico.html' , {})


def pagina_error(request):
    return render(request, 'mecanicos/pagina_error.html' , {})


def user(request):
    return render(request,'mecanicos/user.html',{})


def userMecanico(request):
    return render(request,'mecanicos/userMecanico.html', {})


def publicar(request):
    return render (request, 'mecanicos/publicar.html', {})

<<<<<<< HEAD
=======
def login(request):
    return render(request, 'mecanicos/login.html',{} )

def clientem(request):
    return render(request,'mecanicos/clientem.html',{})
>>>>>>> rama_thomas


