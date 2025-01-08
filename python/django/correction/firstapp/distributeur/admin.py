from django.contrib import admin
from .models import Boisson, Distributeur, Ventes, VentesAdmin
# Register your models here.
admin.site.register(Boisson)
admin.site.register(Distributeur) 
admin.site.register(Ventes, VentesAdmin) 

# Register your models here.
