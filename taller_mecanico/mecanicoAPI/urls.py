from django.urls import path
from .views import VehiculoListView

urlpatterns = [
    path('vehiculo/', VehiculoListView.as_view(), name='vehiculo_list')
]
