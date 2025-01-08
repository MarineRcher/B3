from django.db import models


class Boisson(models.Model):
    nom = models.CharField(max_length=100)
    prix = models.DecimalField(max_digits=5, decimal_places=2)
    stock = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.nom} - {self.prix}€"


class StockMonnaie(models.Model):
    valeur = models.DecimalField(max_digits=5, decimal_places=2)
    quantite = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.valeur}€ x {self.quantite}"


class Transaction(models.Model):
    STATUT_CHOICES = [
        ("EN_COURS", "En cours"),
        ("COMPLETEE", "Complétée"),
        ("ANNULEE", "Annulée"),
    ]

    boisson = models.ForeignKey(Boisson, on_delete=models.PROTECT)
    montant_insere = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    monnaie_rendue = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    statut = models.CharField(max_length=20, choices=STATUT_CHOICES, default="EN_COURS")
    date_creation = models.DateTimeField(auto_now_add=True)
    date_modification = models.DateTimeField(auto_now=True)
