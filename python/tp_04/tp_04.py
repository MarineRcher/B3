Pieces = [50, 20, 10, 5, 2]
Boissons = {
    1: {"nom": "Café noir", "prix": 20},
    2: {"nom": "Café au lait", "prix": 25},
    3: {"nom": "Thé", "prix": 15},
    4: {"nom": "Chocolat au lait", "prix": 35},
    5: {"nom": "Cappuccino", "prix": 40},
}

while True:
    print("---------Distributeur de boissons---------")
    for num, boisson in Boissons.items():
        print(
            f"{num}. {boisson['nom']}{'.' * (20 - len(boisson['nom']))} {boisson['prix']} c"
        )
    print("0. Annuler")
    choix = int(input("Quelle boisson soutez-vous prendre ?\n"))

    if choix == 0:
        break
    if choix not in Boissons:
        print("Choix invalide. Veuillez réessayer.")

    Boisson = Boissons[choix]
    total = 0
    pieces_inserees = {50: 0, 20: 0, 10: 0, 5: 0, 2: 0}
    while True:
        piece = input(
            "Insérez une pièce (2, 5, 10, 20, 50 centimes) ou 'ok' pour terminer: "
        )
        if piece.lower() == "ok":
            break
        piece = int(piece)
        if piece not in Pieces:
            print("Pièce non acceptée. Utilisez 2, 5, 10, 20 ou 50 centimes.")
            continue

        total += piece
        pieces_inserees[piece] += 1


print("Fin du programme")
