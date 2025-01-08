from rest_framework import serializers

from .models import Boisson, StockMonnaie, Transaction


class BoissonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Boisson
        fields = "__all__"


class StockMonnaieSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockMonnaie
        fields = "__all__"


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = "__all__"
