from rest_framework import serializers
from .models import Ventes, Boisson

class VentesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ventes
        fields = '__all__'

class BoissonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Boisson
        fields = '__all__'
        ordering = ['position']