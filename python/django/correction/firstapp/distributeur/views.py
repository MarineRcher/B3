from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Ventes, Boisson
from .serializers import VentesSerializer, BoissonsSerializer

# Create your views here.
class VentesViewSet(viewsets.ModelViewSet):
    serializer_class = VentesSerializer
    queryset = Ventes.objects.all()
    # permission_classes = (IsAuthenticated,)

# Create your views here.
class BoissonsViewSet(viewsets.ModelViewSet):
    serializer_class = BoissonsSerializer
    queryset = Boisson.objects.all().order_by('position')
    # permission_classes = (IsAuthenticated,)
