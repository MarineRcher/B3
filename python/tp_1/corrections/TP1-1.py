import datetime
date = datetime.datetime.now()
# récupération de l'année en cour
annee_en_cours = date.year

anneeSaisie = input("annee de naissance : ")
# calcul de l'age l'année saisie est une chaine de caractere, il faut la convertir en entier
age = annee_en_cours - int(anneeSaisie) 
print ('age : ' + str(age))

# calcul du mois
ageEnMois = age * 12
print ('age En Mois : ' + str(ageEnMois))

# calcul en jour
anneeBisextile = int(age / 4)
ageEnJours = age * 365 + anneeBisextile
print ('age En Jours : {}'.format(ageEnJours))

# calcul en semaine
ageEnSemaine = age * 52	 # attention il y a des années avec 53 semaines
ageEnSemaine2 = int(ageEnJours / 7)
print ('age En Semaine :', ageEnSemaine, 'age En Semaine 2 :', ageEnSemaine2)