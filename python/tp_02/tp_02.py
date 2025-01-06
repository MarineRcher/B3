import csv
import json
import os


def save_data(dicStudents):
    if not os.path.exists("eleves"):
        os.makedirs("eleves")

    for student in dicStudents.keys():
        path_student = os.path.join("eleves", student)
        if not os.path.exists(path_student):
            os.makedirs(path_student)

        appreciation_file = open(os.path.join(path_student, "appreciation.txt"), "w+")
        appreciation_file.write(dicStudents[student]["appréciation"])
        appreciation_file.close()

        with open(os.path.join(path_student, "note.csv"), "w", newline="") as csv_file:
            student_note = csv.writer(
                csv_file,
                delimiter=";",
                quotechar='"',
                doublequote=True,
                quoting=csv.QUOTE_NONNUMERIC,
            )
            student_note.writerow(["TP", "Notes"])
            if "notes" in dicStudents[student]:
                for tp, note in dicStudents[student]["notes"].items():
                    student_note.writerow([tp, note])

    dictAverages = {}
    for student, info in dicStudents.items():
        if "notes" in info:
            notes = info["notes"].values()
            dictAverages[student] = {
                "moyenne": int(sum(notes) / len(notes)),
                "min": min(notes),
                "max": max(notes),
            }

    with open(os.path.join("eleves", "moyennes.json"), "w+") as json_file:
        json.dump(dictAverages, json_file, indent=4)
