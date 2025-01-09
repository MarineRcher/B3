"""
Classer les villes par leur nombre de factures, puis leur montant HT
Déterminer la liste des factures ayant un montant supérieur à 1000€
Déterminer la liste des factures du client OPTILOG
Déterminer la liste des articles commençant par AR...
Calculer pour les factures de la ville de Lyon (avec tous les arrondissements)La somme, la moyenne, le min et le max
Convertir la date de facture, filtrer celle du mois de mars 2021 et totaliser le montant
Réaliser un graphique des montants des factures du mois de mars par client
"""

import csv
import os

import pandas as pd

# Chemin absolu du répertoire courant
rep_courant = os.path.abspath(os.path.dirname(__file__))

# Chemin absolu du fichier
chemin_fichier = os.path.join(rep_courant, "listedefactures.csv")

df = pd.read_csv(
    chemin_fichier,
    sep=";",
    encoding="ISO-8859-1",
    quoting=csv.QUOTE_ALL,
    lineterminator="\n",
)
partDf = df.drop_duplicates(subset=["Document - Numéro du document"])

nombre_factures = len(partDf)
print(nombre_factures)

nombre_clients = len(partDf["Document - Code client"].unique())
print(nombre_clients)

# ville par nombre de factures
villes = partDf.groupby(["Document - Ville (facturation)"])
for ville in villes.item():
    print(villes)
partDf["Total_TTC"] = partDf["Total_TTC"].str.replace(",", ".").asType(float)
