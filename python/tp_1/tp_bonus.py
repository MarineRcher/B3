import random

# 10000 rounds of 6-sided dice
number_rounds = 10000
points_player_1 = 0
points_player_2 = 0
equality_first_part = 0
equality_second_part = 0


def lancer_de():
    return random.randint(1, 6)


# each player shoot one time
# if player 1 has the highest value, he won 1 point
# if player 2 has the highest value, he won 1 point
# if equality, memorize it
def first_part():
    player_1 = lancer_de()
    player_2 = lancer_de()

    if player_1 > player_2:
        points_player_1 += 1
    elif player_1 < player_2:
        points_player_2 += 1
    elif player_1 == player_2:
        equality_first_part += 1

    return points_player_1, points_player_2, equality_first_part


# Each player draws 5 times, we total the two highest values ​​and the lowest
# if player 1 has the highest value, he won 1 point
# if player 2 has the highest value, he won 1 point
# if equality, memorize it
def second_part():
    pass


# print result
