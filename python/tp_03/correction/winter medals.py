import os
import pandas as pd
import csv
import matplotlib.pyplot as plt

rep_courant = os.path.abspath(os.path.dirname(__file__))
chemin_fichier = os.path.join(rep_courant, "winter_olympics_medals.csv")
df = pd.read_csv(chemin_fichier, sep=',', encoding="ISO-8859-1", quoting=csv.QUOTE_ALL, lineterminator='\n')

# Affiche les premières lignes du DataFrame
print(df.head())
print(df.info())

# liste des années
print ("liste des années")
dfannee = df['year'].unique()
print (dfannee)
# on trie les années
dfannee.sort()
print (dfannee)
print ("")
print ("liste des pays")
dfpays = df['pays'].unique()
dfpays.sort()
print (dfpays)
print ("")
print ("nombre des médailles par pays")
dfpaysmedailles = df.groupby('country').count()
dfpaysmedailles = dfpaysmedailles.loc[:,['id']]
print (dfpaysmedailles)
print ("")
print ("moyenne annuelle des médailles par pays")
dfpaysmedailles = df.groupby(['country', 'year']).count()
dfpaysmedailles = dfpaysmedailles.groupby('country').mean()
dfpaysmedailles = dfpaysmedailles.loc[:,['id']]
print (dfpaysmedailles)

# Determine average of medal by country
dfcroise = df.loc[:, ['pays', 'medal']]
medal_by_country = dfcroise.groupby(['pays', 'medal']).size().unstack(fill_value=0)
print(medal_by_country)


# on cumule les médailles de la russie et de l'urss

print ("")
print ("liste des sports")
dfsport = df['sport'].unique()
dfsport.sort()
print (dfsport)
print ("")
print ("liste des pays ayant organisé les JO (avec une médaille)")	
dfpaysJO = df['pays'].loc[df['host'] == True]
# print (dfpaysJO)
dfpaysJO = dfpaysJO.unique()
dfpaysJO.sort()
print (dfpaysJO)

print ("liste des pays ayant organisé les JO avec une médaille d'or")
dfpaysJO = df.loc[df['host'] == True]
dfpaysJO = dfpaysJO.loc[dfpaysJO['medal'] == 'gold']
dfpaysJO = dfpaysJO.loc[:,['pays', 'year']]
dfpaysJO = dfpaysJO.drop_duplicates()
print (dfpaysJO)


# création graphique entre les médailles des USA et de l'URS/RUS

usMedals = df.loc[df['country'] == 'USA']
# on comte le nombre de médailles par année
usMedals = usMedals.groupby('year').count()
# print (usMedals['id'])
# print ("-------------------")
# on récupére les médailles de l'urs et de rus 
usrmedals = df.loc[df['country'] == 'URS']
rusmedals = df.loc[df['country'] == 'RUS']
# on concatène les deux dataframes
rusmedals = pd.concat([usrmedals, rusmedals])

rusmedals = rusmedals.groupby('year').count()
# on ajoute un zero sur les les années vides
for annee in dfannee:
	if annee not in rusmedals.index:
		rusmedals.loc[annee] = 0
# print (rusmedals['id'])
# on trie les années
rusmedals.sort_index(inplace=True)

# on fait un graphique
plt.plot(dfannee, usMedals['id'], dfannee, rusmedals['id'])
plt.legend(['USA', 'URS/RUS'], loc='upper left')
plt.title('Médailles USA et URS/RUS')
plt.xlabel('Année')
plt.ylabel('Médailles')
plt.show()

