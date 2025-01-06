import random

nombreDeManche = 10000
def tirageUneFois(nbManche):
	compteurJoueur1 = 0
	compteurJoueur2 = 0
	nbEgalite = 0

	# variante avec un seul tirage par joueur et par manche
	for manche in range(nbManche):
		tirageJoueur1 = random.randrange(6)
		tirageJoueur2 = random.randrange(6)

		if tirageJoueur1 > tirageJoueur2:
			compteurJoueur1 += 1
		elif tirageJoueur1 < tirageJoueur2:
			compteurJoueur2 += 1
		else:
			print ("il y a égalité {} et {}".format(tirageJoueur1, tirageJoueur2))
			nbEgalite += 1
	return compteurJoueur1, compteurJoueur2, nbEgalite

def tirageCinqFois(nbManche):
	compteurJoueur1 = 0
	compteurJoueur2 = 0
	nbEgalite = 0

	###variante avec 5 tirages, on conserve les deux meilleurs et le plus mauvais
	for manche in range(nbManche):
		totalTirageJoueur1 = 0
		totalTirageJoueur2 = 0

		tirageJoueur1 = []
		tirageJoueur2 = []
		# on fait 5 tirages pour chaque joueur
		for i in range(5):
			tirageJoueur1.append(random.randint(1,6))
			tirageJoueur2.append(random.randint(1,6))

		# on trie les tirages
		tirageJoueur1.sort()
		tirageJoueur2.sort()

		# on conserve les deux meilleurs et le plus mauvais
		totalTirageJoueur1 = tirageJoueur1[-1] + tirageJoueur1[-2] + tirageJoueur1[0]
		totalTirageJoueur2 = tirageJoueur2[-1] + tirageJoueur2[-2] + tirageJoueur2[0]
		if totalTirageJoueur1 > totalTirageJoueur2:
			compteurJoueur1 += 1
		elif totalTirageJoueur1 < totalTirageJoueur2:
			compteurJoueur2 += 1
		else:
			nbEgalite += 1
			print ("il y a égalité {} et {} soit {}".format(tirageJoueur1, tirageJoueur2, totalTirageJoueur1))
	return compteurJoueur1, compteurJoueur2, nbEgalite

#pour lancer l'un ou l'autre des tirages
if False :
	compteurJoueur1, compteurJoueur2, nbEgalite = tirageUneFois(nombreDeManche)
else: 
	compteurJoueur1, compteurJoueur2, nbEgalite = tirageCinqFois(nombreDeManche)

print ("le joueur 1 a gagne", compteurJoueur1, "fois")
print ("le joueur 2 a gagne", compteurJoueur2, "fois")

if compteurJoueur1 > compteurJoueur2:
	print("le joueur 1 est le grand gagnant")
elif compteurJoueur1 < compteurJoueur2:
	print("le joueur 2 est le grand gagnant")

print ("il y a eu", nbEgalite, "egalites", "ou ", nombreDeManche - compteurJoueur1 - compteurJoueur2, " egalités")

print("fin du programme")