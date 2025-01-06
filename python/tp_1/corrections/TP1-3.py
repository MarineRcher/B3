# on cree une liste vide
ListMots = []

# lance une  boucle permanente
while True:
    # on récupère ce qui est saisie
	chaineSaisie = input("Saisir une chaine de caractere : ")
	
	# si on saisie "stop" on sort de la boucle
	if chaineSaisie.lower() == "stop":
		# le break permet de sortir de la boucle
		break

	# si on saisie "tableau" on affiche le tableau
	if chaineSaisie.lower() == "tableau":
		print(ListMots)
	else:
		# si le mots est présent on le supprime
		if ListMots.count(chaineSaisie) > 0:
			ListMots.remove(chaineSaisie)
		else:
			# sinon on l'ajoute
			ListMots.append(chaineSaisie)

print("Fin du programme")