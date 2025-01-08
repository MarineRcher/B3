from decimal import Decimal

from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Boisson, Transaction
from .serializers import BoissonSerializer
from .services import DistributeurService


class DistributeurViewSet(viewsets.ModelViewSet):
    queryset = Boisson.objects.all()
    serializer_class = BoissonSerializer

    @action(detail=True, methods=["post"])
    def acheter(self, request, pk=None):
        boisson = self.get_object()
        montant_insere = Decimal(request.data.get("montant_insere", 0))

        try:
            # Vérifier le stock de la boisson
            if boisson.stock <= 0:
                return Response(
                    {"error": "Boisson en rupture de stock"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Calculer la monnaie à rendre
            monnaie_a_rendre = DistributeurService.calculer_monnaie(
                montant_insere, boisson.prix
            )

            # Vérifier si on peut rendre la monnaie
            if not DistributeurService.verifier_stock_monnaie(monnaie_a_rendre):
                return Response(
                    {"error": "Impossible de rendre la monnaie"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Créer la transaction
            transaction = Transaction.objects.create(
                boisson=boisson,
                montant_insere=montant_insere,
                monnaie_rendue=monnaie_a_rendre,
                statut="COMPLETEE",
            )

            # Mettre à jour le stock
            boisson.stock -= 1
            boisson.save()

            # Rendre la monnaie
            pieces_rendues = DistributeurService.distribuer_monnaie(monnaie_a_rendre)

            return Response(
                {
                    "message": "Transaction réussie",
                    "boisson": boisson.nom,
                    "monnaie_rendue": monnaie_a_rendre,
                    "pieces_rendues": pieces_rendues,
                }
            )

        except ValueError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
