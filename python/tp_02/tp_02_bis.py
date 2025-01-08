import json
import os
import tp_02

dicStudents = {
    "titi": {"notes": {"tp1": 10, "tp2": 13, "tp3": 17}, "appréciation": "moyenne"},
    "toto": {"notes": {"tp1": 19, "tp2": 11, "tp3": 14}, "appréciation": "Très Bien"},
    "tata": {"notes": {"tp1": 15, "tp2": 8, "tp3": 13}, "appréciation": "Bonne"},
    "tutu": {"notes": {"tp3": 15, "tp4": 13}, "appréciation": "Bonne"},
    "tete": {"appréciation": "nouveau"},
}

while True:
    if os.path.existe("listeleves.json"):
        with open("listeleves.json", "r") as file:
            dicStudents = json.load(file)
    input_user = input("Saisir une option : ")

    if input_user.lower() == "quitter":
        break
    elif input_user.lower() == "list":
        for student, info in dicStudents.items():
            print(f"L'etudiant(e) {student}")
            print("Appréciation : ", info["appréciation"])
            if "notes" in info:
                print("Note(s) :")
                for tp, note in dicStudents[student]["notes"].items():
                    print(f"{tp} : {note}")
    elif input_user.lower() == "add":
        student = input("Le nom de l'élève : ")
        appreciation = input("Son appreciation : ")
        dicStudents[student] = {"appréciation": appreciation}
    elif input_user.lower() == "notes":
        student = input("Le nom de l'élève auquel vous ajoutez une note : ")
        name_note = input("Le nom de l'eval ? ")
        note = input("Quelle note vous lui attribuez ? ")
        if student in dicStudents:
            dicStudents[student]["notes"] = {name_note: int(note)}
        else:
            print("L'eleve n'existe pas")
    elif input_user.lower() == "appr":
        student = input("Le nom de l'élève : ")
        appreciation = input("Son appreciation : ")
        if student in dicStudents:
            dicStudents[student] = {"appréciation": appreciation}
        else:
            print("L'eleve n'existe pas")
    else:
        print("Pas compris")


with open("listeleves.json", "w+") as file:
    json.dump(dicStudents, file, indent=4)

tp_02.save_data(dicStudents)
print("Fin du programme")
