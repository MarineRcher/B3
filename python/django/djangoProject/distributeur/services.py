from .models import StockMonnaie


class DistributeurService:
    @staticmethod
    def calculer_monnaie(montant_total, prix):
        if montant_total < prix:
            raise ValueError("Montant insuffisant")
        return montant_total - prix

    @staticmethod
    def verifier_stock_monnaie(montant):
        pieces_disponibles = StockMonnaie.objects.all().order_by("-valeur")
        monnaie_possible = 0

        for piece in pieces_disponibles:
            nombre_pieces = piece.quantite
            while nombre_pieces > 0 and monnaie_possible < montant:
                monnaie_possible += piece.valeur
                nombre_pieces -= 1

        return monnaie_possible >= montant

    @staticmethod
    def distribuer_monnaie(montant):
        if montant == 0:
            return []

        pieces_a_rendre = []
        pieces_disponibles = StockMonnaie.objects.all().order_by("-valeur")
        montant_restant = montant

        for piece in pieces_disponibles:
            while piece.quantite > 0 and montant_restant >= piece.valeur:
                pieces_a_rendre.append(piece.valeur)
                piece.quantite -= 1
                piece.save()
                montant_restant -= piece.valeur

        if montant_restant > 0:
            raise ValueError("Impossible de rendre la monnaie exacte")

        return pieces_a_rendre
