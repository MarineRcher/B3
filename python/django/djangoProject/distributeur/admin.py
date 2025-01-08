from django.contrib import admin
from .models import Boisson, StockMonnaie, Transaction

admin.site.register(Boisson)
admin.site.register(StockMonnaie)
admin.site.register(Transaction)
