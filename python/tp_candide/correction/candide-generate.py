import os
from unidecode import unidecode

# on se place dans le dossier du fichier
import pathlib
myFolderpath= pathlib.Path(__file__).parent.resolve()
os.chdir(myFolderpath)

# on ouvre un fichier texte et on le lit
file = open("candide.txt", "r", encoding="utf-8")
# on vire les accents
text = unidecode(file.read())
file.close()
file = open("candideGen.txt", "w")

alphabet = "abcdefghijklmnopqrstuvwxyz,-.'"
# on parcourt les lettre de l'alphabet
for lettre in alphabet:
	# on enleve la lettre de l'alphabet
	alphabetSuppr = alphabet.replace(lettre, "")
	textGen = text

	for lettreSuppr in alphabetSuppr:
		textGen = textGen.replace(lettreSuppr, "")
		# on enleve la lettre de l'alphabet en majuscule
		textGen = textGen.replace(lettreSuppr.upper(), "")
		# on enleve les espaces
		textGen = textGen.replace(" ", "")
	# si la lettre est présente dans le texte généré
	if lettre in textGen:
		#print (textGen)
		file.write(textGen)

file.close()

# nombre de mots
print ("Nombre de mots :", len(text.split()))
# nombre de phrases
print ("Nombre de phrases :", len(text.split(".")))
# nombre de caractères
print ("Nombre de caractères :", len(text))
#nombre de voyelles
nbVoyelles = 0
for c in text.lower():
	if c in "aeiouy":
		nbVoyelles +=1
print ("Nombre de voyelles :", nbVoyelles)

# on supprime les ponctuations
text = text.replace(",", "")
text = text.replace(".", "")
# on compte les mots les plus employés
tblMot = {}
tblMotSuperieur6 = {}
for mot in text.lower().split():
	if mot in tblMot:
		tblMot[mot] += 1
	else:
		tblMot[mot] = 1
	# et les mots de plus de 6 lettres
	if len(mot) > 7:
		if mot in tblMotSuperieur6:
			tblMotSuperieur6[mot] += 1
		else:
			tblMotSuperieur6[mot] = 1

# on trie les tableaux
tblMot = dict(sorted(tblMot.items(), key=lambda item: item[1], reverse=True))
tblMotSuperieur6 = dict(sorted(tblMotSuperieur6.items(), key=lambda item: item[1], reverse=True))
for mot in tblMot:
	print (mot, tblMot[mot])


print ("Les 5 mots les plus employés :")
# on boucle sur les 5 premiers elements de la liste des mots
for mot in list(tblMot.keys())[:5]:
	print (mot, tblMot[mot])
print ("Les 5 mots supérieur à 7 les plus employés :")
for mot in list(tblMotSuperieur6.keys())[:5]:
	print (mot, tblMotSuperieur6[mot])
