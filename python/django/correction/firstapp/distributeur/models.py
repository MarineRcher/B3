from django.db import models
from django.contrib import admin


# Create your models here.
class Ventes(models.Model):
    montant = models.FloatField()
    date = models.DateTimeField(auto_now_add=True)
    fk_boisson = models.ForeignKey('Boisson', on_delete=models.CASCADE)
    fk_distributeur = models.ForeignKey('Distributeur', on_delete=models.CASCADE)
    def __str__(self):
        return self.date.strftime('%d/%m/%Y %H:%M:%S') + ' - ' + str(self.montant) + ' - ' + self.fk_boisson.title + ' - ' + self.fk_distributeur.title

class VentesAdmin(admin.ModelAdmin):
    list_display = ('montant', 'date', 'fk_boisson', 'fk_distributeur') 
    list_filter = ('date', 'fk_boisson', 'fk_distributeur')

class Distributeur(models.Model):
    title = models.CharField(max_length=200)
    adresse = models.CharField(max_length=200)
    def __str__(self):
        return self.title

class Boisson(models.Model):
    position = models.IntegerField()
    title = models.CharField(max_length=200)
    prix = models.FloatField()
    def __str__(self):
        return self.title + ' - ' + str(self.prix)