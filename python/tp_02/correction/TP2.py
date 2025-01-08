import os
import csv

import pathlib											# utilisation de la bibliothèque pathlib
myFolderpath= pathlib.Path(__file__).parent.resolve()	# on récupère le chemin du programme
os.chdir(myFolderpath)									# on se positionne dans le bon dossier


# on déclare le dictionnaire des élèves
dicEleves = { 
	'titi' : {'notes':{'tp1':10, 'tp2':13,'tp3':17}, 'appréciation': 'moyenne' }, 
	'toto' : {'notes' :{'tp1':19, 'tp2':11,'tp3':14}, 'appréciation': 'Très Bien' }, 
	'tata' : {'notes':{'tp1':15,'tp2':8,'tp3':13}, 'appréciation': 'Bonne' },
	'tutu' : {'notes':{'tp3':15,'tp4':13}, 'appréciation': 'Bonne' },
}

# si le dossier n'existe pas
if not os.path.exists("eleves"):
	# on crée le dossier
	os.mkdir("eleves")

# partie 1 : on crée les dossiers des élèves
for eleve in dicEleves :
	# on crée un dossier pour chaque élève
	if not os.path.exists("eleves/" + eleve):
		os.mkdir("eleves/"+eleve)

	# on crée un fichier d'appréciation pour chaque élève
	with open("eleves/"+eleve+"/appreciation.txt", 'w') as fichier :
		# on écrit l'appréciation dans le fichier
		fichier.write(dicEleves[eleve]['appréciation'])
		# on ferme le fichier
		fichier.close()

	# on crée un fichier pour chaque élève
	with open("eleves/"+eleve+"/notes.csv", 'w', newline='') as fichier :
		# on crée un objet writer pour écrire dans le fichier
		writer = csv.writer(fichier, delimiter=';', 
                          quotechar='"', doublequote=True, 
                          quoting=csv.QUOTE_NONNUMERIC)
		# on écrit les entêtes
		writer.writerow(['TP', 'Notes'])
		# on boucle sur les notes de chaque élève
		for note in dicEleves[eleve]['notes'] :
			# on écrit les notes dans le fichier
			writer.writerow([note, dicEleves[eleve]['notes'][note]])
		fichier.close()


import json
# partie 2 : creation du carnet des élèves en json

# on définie le dictionnaire de note
dicNotes={}
# pour chaque éleve du dictionnaire
for eleve in dicEleves :

	# on boucle sur les notes de chaque élève
	total_note = 0
	min_note = 99	# on initialise la note minimale à 99# 
	max_note = 0	# on initialise la note maximale à 0
	nb_note = 0
	for note in dicEleves[eleve]['notes'] :
		# on récupère la valeur de la note dans le dictionnaire 
		noteEleve = dicEleves[eleve]['notes'][note]
		total_note += noteEleve
		# si la note est inférieure à la note minimale
		if (noteEleve < min_note):
			# on met à jour la note minimale
			min_note = noteEleve

		# si la note est supérieure à la note maximale
		if (noteEleve > max_note):
			# on met à jour la note maximale
			max_note = noteEleve
		nb_note += 1

	if nb_note > 0 :	# il faut que l'élève ait au moins une note
		dicNotes[eleve] = {'moyenne':int(total_note/nb_note), 'min':min_note, 'max':max_note}

	# variante plus rapide (et courte) avec un trie/lambda sur les notes de l'élève
	# noteTrier = sorted(dicEleves[eleve]['notes'].items(), key=lambda item : item[1], reverse=True)
	# moyenneEleve=0
	# for note in noteTrier :
	# 	moyenneEleve += note[1]
	# moyenneEleve = round(moyenneEleve / len(noteTrier),2)
	# dicNotes[eleve] ={"moyenne" : moyenneEleve, "notemax" : noteTrier[0][1], "notemin" : noteTrier[-1][1]}


print (dicNotes)
# on écrit le dictionnaire de notes dans un fichier json
with open('notesEleves.json', 'w+') as file:
	json.dump(dicNotes, file, indent=4)

