from django.shortcuts import render
from django.views import View
from .models import Vehiculo
from django.http import JsonResponse
# Create your views here.

class VehiculoListView(View):
    def get(self, request):
        vList = Vehiculo.objects.all()
        return JsonResponse(list(vList.values()), safe=False) 