#on importe le module datetime
import datetime

# on cree un dictionnaire vide
nbVendredi13 = {}
# on récupère l'année en cours
AnneeDateFin = datetime.datetime.now().year 
# la date de fin est l'année en cours - 100 ans
AnneeDateDebut = AnneeDateFin - 100

# lance une  boucle permanente15
print ("Liste des années, mois avec 3 vendredi 13 :")
AnneeEnCours = AnneeDateDebut
TblMoisVendredi = {}
TblMoisAnnee = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0,7:0, 8:0, 9:0, 10:0, 11:0, 12:0}

# on boucle sur les années
while True:
	# on sort quand on arrive à l'année en cours
	if AnneeEnCours > AnneeDateFin:
		break
	nbVendredi13Annee = 0
	tblmois=[]
	# on parcours les 12 mois
	for mois in range(1, 13):
		# détermine le jour de la semaine du 13 du mois en cours (lundi = 0, mardi = 1, ...)
		JourSemaine = datetime.datetime(AnneeEnCours, mois, 13).weekday()
		# si le jour est un vendredi on l'ajoute à la liste
		if JourSemaine == 4:
			nbVendredi13Annee += 1		# on incrémente le nombre de vendredi 13 de l'année en cours
			tblmois.append(mois)		# on ajoute le mois à la liste des mois de l'année
			TblMoisAnnee[mois] += 1		# on incrémente le nombre de vendredi 13 du mois
	
	# on ajoute le nombre de vendredi 13 de l'année en cours
	nbVendredi13[AnneeEnCours] = nbVendredi13Annee
	# On converti le tableau des mois en chaine de caractères avant de le concaténer
	# map(str, tblmois) = converti les éléments numérique de la liste en chaine de caractères
	# ou alors il faut faire un tblmois.append(str(mois)) plus haut mais cela prend plus de place en mémoire 
	strmois = '-'.join(map(str, tblmois))
	if nbVendredi13Annee == 3:
		print("Annee :", AnneeEnCours, "Mois :", strmois)
		# print ("Mois : ", strmois)
	if strmois in TblMoisVendredi:
		TblMoisVendredi[strmois] += 1
	else:
		TblMoisVendredi[strmois] = 1
	AnneeEnCours += 1

# avec le tableau on détermine l'année qui a le plus de vendredi 13
AnneeMax = 0
AnneeMin = 3000
nbVendredi13Max = 0
TblNbVendredi = {1:[], 2:[], 3:[]}
for Annee in nbVendredi13:
	if nbVendredi13[Annee] >= nbVendredi13Max :
		AnneeMax = Annee
		nbVendredi13Max = nbVendredi13[Annee]
		# pour prende le premier
		if AnneeMin > Annee and nbVendredi13[Annee] == 3:
			AnneeMin = Annee
	TblNbVendredi[nbVendredi13[Annee]].append(Annee)
print("Année Min et Max avec le plus de vendredi 13 entre ", AnneeDateDebut, "et", AnneeDateFin, " : ", AnneeMin, "-", AnneeMax, " avec ", nbVendredi13[AnneeMax], " vendredi 13")

# on affiche les année avec 1, 2 ou 3 vendredi 13
for nbvendredi in range(1, 4):
	print ("Nombre d'année avec ", nbvendredi, " vendredi 13 :", len(TblNbVendredi[nbvendredi]))

# on trie le tableau des mois de l'année selon le nombre de présence
print ("Ventilation des mois de l'année selon le nombre de vendredi 13 :")
TblMoisVendredi_trie = dict(sorted(TblMoisVendredi.items(), key=lambda item: item[1], reverse=True))
for mois in TblMoisVendredi_trie:
	print ("Mois ", mois, "\t nb :", TblMoisVendredi[mois])

TblMoisAnnee_trie = dict(sorted(TblMoisAnnee.items(), key=lambda item: item[1], reverse=True))
print ("Classement des mois par nombre de V13", TblMoisAnnee_trie)

# détermination du nombre de vendredi 13 par trimestre
print ("Nombre de vendredi 13 par trimestre :")
print ("T1", TblMoisAnnee[1]+TblMoisAnnee[2]+TblMoisAnnee[3])
print ("T2", TblMoisAnnee[4]+TblMoisAnnee[5]+TblMoisAnnee[6])
print ("T3", TblMoisAnnee[7]+TblMoisAnnee[8]+TblMoisAnnee[9])
print ("T4", TblMoisAnnee[10]+TblMoisAnnee[11]+TblMoisAnnee[12])