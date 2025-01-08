import csv
import os
import matplotlib.pyplot as plt
import pandas as pd

# Chemin absolu du répertoire courant
rep_courant = os.path.abspath(os.path.dirname(__file__))

# Chemin absolu du fichier
chemin_fichier = os.path.join(rep_courant, "winter_olympics_medals.csv")

df = pd.read_csv(
    chemin_fichier,
    sep=",",
    encoding="ISO-8859-1",
    quoting=csv.QUOTE_ALL,
    lineterminator="\n",
)
# années ayant eu des JO hiver
print(df["year"].unique())

# pays ayant participé au JO et gagné une médaille
print(df["pays"].unique())

# sports représentés au jo d’hiver
print(df["sport"].unique())

# pays organisateurs ayant gagné une médaille
print(df["pays"].df.loc[df["host"] == True])

# moyenne par pays de médailles
nombre_medails = len(df)
nombre_pays = len(df["country"].unique())
print(nombre_medails / nombre_pays, "medails sur ", nombre_medails)

# moyenne par pays 1920 - 1970
pays_periode = df.loc[df["year"] < 1970]
nombre_pays = len(pays_periode["country"].unique())
nombre_medails = len(pays_periode)
print(nombre_medails / nombre_pays, "medails sur ", nombre_medails)

# Faire un graphique par année, nombre de médaille entre les usa et la Russie penser à cumuler URS et RUS

usa_medals = (
    df[df["country"] == "USA"].groupby("year").size().reset_index(name="medals")
)

russia_medals = (
    df[df["country"].isin(["URS", "RUS"])]
    .groupby("year")
    .size()
    .reset_index(name="medals")
)

plt.figure(figsize=(12, 6))

plt.plot(usa_medals["year"], usa_medals["medals"], label="USA", marker="o")
plt.plot(
    russia_medals["year"], russia_medals["medals"], label="Russia/USSR", marker="o"
)

plt.xlabel("Année")
plt.ylabel("Nombre de médailles")

plt.show()
