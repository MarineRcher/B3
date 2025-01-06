import datetime
# print age from birth year

birth_year = input("Votre année de naissance : ")
birth_year = int(birth_year)

# In years
actual_year = datetime.date.today().year
age = actual_year - birth_year
print(f"Vous avez : {age} ans")

# In number of months
number_of_months = age * 12
print(f"{number_of_months} mois se sont écoulés depuis votre naissance")

# In number of days
bi = age / 4
number_of_days = int(age * 365.25)
print(f"{number_of_days} jours se sont écoulés depuis votre naissance")

# In number of weeks
number_of_weeks = int(age * 52.1429)
print(f"{number_of_weeks} semaines ce sont écoulés depuis votre naissance")

# count letters or worlds in a string
sentence = input("Tapez une phrase : \n")
sentence = sentence.lower()

# count vowels in a string
vowels = ["a", "e", "u", "i", "o", "y"]
i = 0
for letter in sentence:
    if letter in vowels:
        i += 1
print(f"Il y a {i} voyelles dans votre phrase")

# count a letter in a string
letter_to_count = input("Quelle lettre voulez-vous compter ? \n")
i = 0
for letter in sentence:
    if letter in letter_to_count:
        i += 1
print(f"Il y a {i} {letter_to_count} dans votre phrase")
# return list of worlds from a sentence
tbl_words = sentence.split(" ")
print(f"Le rendu dans un tableau est {tbl_words}")

# Check the presence of a letter in a string
letter_to_check = input("Quelle lettre voulez-vous verifier ? \n")
letter_presence = False
i = 0
for letter in sentence:
    if letter in letter_to_check:
        letter_presence = True
        i += 1

if letter_presence:
    print(f"Il y a la lettre {letter_to_check} {i} fois dans votre phrase")
else:
    print(f"La lettre {letter_to_check} n'est pas dans la phrase")

# check a word presence in a list and return his position
word_to_check = input("Quel mot voulez-vous vérifier ? \n")

for i in range(len(tbl_words)):
    if tbl_words[i] == word_to_check:
        print(f"Mot trouvé: {tbl_words[i]} à l'index {i}")


# Word list manager
sentence = input("Tapez une phrase : \n")
sentence = sentence.lower()
tbl_words = sentence.split(" ")
# Add word if he is not in the list
word_to_add = input("Quel mot voulez vous ajouter")
word_presence = False
for word in tbl_words:
    if word_to_add == word:
        word_presence = True
        break
if not word_presence:
    tbl_words.append(word_to_add)

# Remove word if he is already in the list
word_to_remove = input("Quel mot voulez vous supprimer")
word_presence = False
for word in tbl_words:
    if word_to_remove == word:
        word_presence = True
        break
if word_presence:
    tbl_words.remove(word_to_remove)

# Print table if we write "tableau"
# stop program if we write stop
response = input(
    "Que voulez vous faire ? Stopper le programme ou afficher le tableau ? \n"
)
if response.lower == "tableau":
    print(tbl_words)
elif response.lower == "stop":
    exit()
