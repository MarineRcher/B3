import os
import json

import pathlib											# utilisation de la bibliothèque pathlib
myFolderpath= pathlib.Path(__file__).parent.resolve()	# on récupère le chemin du programme
os.chdir(myFolderpath)									# on se positionne dans le bon dossier

if not os.path.exists('listeleves.json'):
	# on déclare le dictionnaire des élèves
	dicEleves = { 
		'titi' : {'notes':{'tp1':12, "tp2":14}, 'appréciation': '' }, 
		'toto' : {'notes' :{}, 'appréciation': '' }, 
		'tata' : {'notes':{}, 'appréciation': '' },
		'tutu' : {'notes':{}, 'appréciation': '' },
	}
else :
	# pour recharger le dictionnaire
	with open('listeleves.json', 'r') as file:
		dicEleves =  json.load(file)

while True:
	print ('action possible : add, note, appr, list, quit')
	action = input ("action à réaliser :")
	if action == "add":
		# on ajoute un élève
		nom = input("nom de l'élève :")
		dicEleves[nom] = {'notes':{}, 'appréciation': '' }
		print("l'élève", nom, "a été ajouté")

	elif action == "appr":
		# on ajoute une appréciation à un élève
		nom = input("nom de l'élève :")
		appreciation = input("appréciation :")
		dicEleves[nom]['appréciation'] = appreciation
		print("l'appréciation", appreciation, "a été ajoutée à l'élève", nom)
	
	elif action == "note":
		# on ajoute une note à un élève
		nom = input("nom de l'élève :")
		# while True:
		tpName = input ("nom du TP :")
		# if tpName == "quit":
		# 	break
		note = input("note :")
		dicEleves[nom]['notes'][tpName] = note
		print("la note", note, "du tp ", tpName, "a été ajoutée à l'élève", nom)

	elif action == "list":
		# on liste les élèves
		for nom in dicEleves:
			print("Eleves : " + nom)
			# et leur notes
			print ("Notes :")
			for note in dicEleves[nom]['notes']:
				print("\t", note, ":", dicEleves[nom]['notes'][note])
			# et leur appréciation	
			print("Appréciation : ", dicEleves[nom]['appréciation'])
			print(20 * "-") # pour séparer les élèves
	elif action == "quit":	
		# on sauvegarde le dictionnaire dans un fichier json
		with open('listeleves.json', 'w+') as file:
			json.dump(dicEleves, file, indent=4)
		print("bye")
		break
	else:
		print("pas compris")



def gen_carnet(dicEleves):
	# partie 2 : creation du carnet des élèves en json
	# on définie le dictionnaire de note
	dicNotes={}
	# pour chaque éleve du dictionnaire
	for eleve in dicEleves :
		# on boucle sur les notes de chaque élève
		total_note = 0
		min_note = 999
		max_note = 0
		nb_note = 0
		for note in dicEleves[eleve]['notes'] :
			# on récupère la valeur de la note dans le dictionnaire 
			noteEleve = dicEleves[eleve]['notes'][note]
			total_note += noteEleve
			if (noteEleve < min_note):
				min_note = noteEleve
			if (noteEleve > max_note):
				max_note = noteEleve
			nb_note += 1
		if nb_note > 0 :
			dicNotes[eleve] = {'moyenne':int(total_note/nb_note), 'min':min_note, 'max':max_note}
		else :
			dicNotes[eleve] = {'moyenne':0, 'min':0, 'max':0}
	# on écrit le dictionnaire de notes dans un fichier json
	with open('notesEleves.json', 'w+') as file:
		json.dump(dicNotes, file, indent=4)
	return dicNotes

gen_carnet(dicEleves)


# pour tester ma fonction	
# dicEleves2 = { 
# 'titi' : {'notes':{'tp1':12, "tp2":14}, 'appréciation': '' }, 
# 'toto' : {'notes' :{'tp1':12, "tp2":14}, 'appréciation': '' }, 
# 'tata' : {'notes':{'tp1':12, "tp2":14,'tp1':16, "tp2":14}, 'appréciation': '' },
# 'tutu' : {'notes':{'tp1':12, "tp2":14, 'tp1':12, "tp2":14}, 'appréciation': '' },
# }

# dicnote = gen_carnet(dicEleves)

# dicnote = { 
# 'titi' : {'moyenne':0, 'min':0, 'max':0}, 
# 'toto' : {'moyenne':0, 'min':0, 'max':0}, 
# 'tata' :{'moyenne':0, 'min':0, 'max':0},
# 'tutu' : {'moyenne':0, 'min':0, 'max':0},
# }