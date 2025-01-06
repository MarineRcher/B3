#chaineSaisie = input("saisir une chaine de caractere : ")
chaineSaisie = "saisir une chaine de caractere"
# on définie les voyelles (en majuscule)
voyelles = "AEIOUY"

# détermination du nombre de voyelles
nbVoyelles = 0
for voyelleEnCours in voyelles :
    nbVoyelles += chaineSaisie.upper().count(voyelleEnCours)
print ("le nombre de voyelle est : ", str(nbVoyelles))

# variante avec parcours des lettres saisies
nbVoyelles = 0
for lettre in chaineSaisie:
	if lettre.upper() in voyelles:
		nbVoyelles += 1
print ("le nombre de voyelle est : ", str(nbVoyelles))

lettreAChercher = input("saisir une lettre a chercher : ")

# nombre d'itération de la lettre à chercher
nbLettre = chaineSaisie.count(lettreAChercher)
if nbLettre > 0:
    print ("la lettre " + lettreAChercher + " est présente", str(nbLettre), "fois")
else:
	print ("la lettre " + lettreAChercher + " n'est pas présente" )


# Nombre de mots dans la phrase saisie
nbMots = len(chaineSaisie.split(' '))
print("le nombre de mots est : ", str(nbMots))

# recherche d'un mot dans la phrase saisie (proche du deuxième exercice)
if chaineSaisie.count(lettreAChercher) > 0:
    print ("la lettre " + lettreAChercher + " est présente")
else:
	print ("la lettre " + lettreAChercher + " n'est pas présente" )

# recherche d'un mot dans la phrase saisie
motAChercher = input("saisir un mot a chercher : ")
if chaineSaisie.split(' ').count(motAChercher) > 0:
    print ("le mot '" + motAChercher + "' est présent")
else:
	print ("le mot '", motAChercher, "' n'est pas présent" )
