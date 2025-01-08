import os
import csv
import pandas as pd
import matplotlib.pyplot as plt

rep_courant = os.path.abspath(os.path.dirname(__file__))

# Chemin absolu du fichier
chemin_fichier = os.path.join(rep_courant, "../listedefactures.csv")

df = pd.read_csv(
    chemin_fichier,
    sep=";",
    encoding="ISO-8859-1",
    quoting=csv.QUOTE_ALL,
    lineterminator="\n",
)

df.rename(columns={"Document - Numéro du document": "ref"}, inplace=True)

# pour isoler que les factures sans le détail
dfFacture = df.drop_duplicates(
    subset=[
        "ref",
        "Document - Code client",
        "Document - Code postal (facturation)",
        "Document - Ville (facturation)",
        "Document - Département (facturation)",
        "Document - Code Pays (facturation)",
        "Document - Date",
        "Document - Total Brut HT",
        "Document - Total TTC",
    ]
)
dfFacture.rename(columns={"Document - Total Brut HT": "TotalHT"}, inplace=True)

print(dfFacture["ref"].unique())
# nb facture
print("nb fact", len(dfFacture["ref"].unique()))
# nbclient
print("nb client", len(dfFacture["Document - Code client"].unique()))

# nb facture par villes
dfnbville = dfFacture["Document - Ville (facturation)"].value_counts()
print(dfnbville.head(10))
# pour visualiser le regroupement réalisé des factures
dfnbville = df["Document - Ville (facturation)"].value_counts()
print(dfnbville.head(10))

# déterminer le total par ville ht
dfFacture["TotalHT"] = dfFacture["TotalHT"].str.replace(",", ".").astype(float)

# on convertie la date en datetime pour pouvoir faire des filtrage par date ensuite
dfFacture["Document - Date"] = pd.to_datetime(
    dfFacture["Document - Date"], format="%d/%m/%Y"
)
dfFacture.rename(columns={"Document - Date": "date_facture"}, inplace=True)

print(dfFacture.info())

dfTotalVille = dfFacture.groupby("Document - Code client")["TotalHT"].sum()

# on trie par ordre décroissant des montants
dfTotalVille = dfTotalVille.sort_values(ascending=False)
print(dfTotalVille.head(10))

# filtrage sur une place de date
dffactMars = dfFacture[
    (dfFacture["date_facture"] >= "2021-03-01")
    & (dfFacture["date_facture"] <= "2021-03-31")
]
print(dffactMars["TotalHT"].sum())


# graphique par client des montants de factures
total_par_client = dffactMars.groupby("Document - Code client")["TotalHT"].sum()

# Création d'un graphique en barres
total_par_client.plot(kind="bar", figsize=(10, 6))

# Ajouter un titre et des étiquettes d'axes
plt.title("Montant total facturé par client")
plt.xlabel("Client ID")
plt.ylabel("Montant total (€)")

# Affichage du graphique
plt.show()
