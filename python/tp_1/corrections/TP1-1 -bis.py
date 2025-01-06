from datetime import datetime
date_du_jour = datetime.now()
# récupération de l'année en cour
annee_en_cours = date_du_jour.year

# anneeSaisie = input("annee de naissance (JJ/MM/AAAA): ")
anneeSaisie = "02/07/1968"
tblanneeSaisie = anneeSaisie.split('/')
if len(tblanneeSaisie) != 3:
	print('Erreur de saisie nbValeur')
	exit()
for i in range(0, 3):
	if not tblanneeSaisie[i].isdigit():
		print('Erreur de saisie')
		exit()

dateSaisie = datetime(int(tblanneeSaisie[2]), int(tblanneeSaisie[1]), int(tblanneeSaisie[0]))

# calcul de l'age l'année saisie est une chaine de caractere, il faut la convertir en entier
age = date_du_jour - dateSaisie 
print ("age en annee " + (age / (365.25)))
print ("age en mois " + str(age / (30.4375)))
print ("age en semaine " + str(age / (7)))
print ('age en jours ' + str(age))

