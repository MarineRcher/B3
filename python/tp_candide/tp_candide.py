import os
import re
import unidecode

dirname = os.path.abspath(os.path.dirname(__file__))

file_path_text = os.path.join(dirname, "sujet", "candide.txt")

alphabet = {
    "a": "A",
    "b": "B",
    "c": "C",
    "d": "D",
    "e": "E",
    "f": "F",
    "i": "I",
    "j": "J",
    "k": "K",
    "l": "L",
    "m": "M",
    "n": "N",
    "o": "O",
    "p": "P",
    "q": "Q",
    "r": "R",
    "s": "S",
    "t": "T",
    "u": "U",
    "v": "V",
    "w": "W",
    "x": "X",
    "y": "Y",
    "z": "Z",
}

ponctuation = [".", ",", '"', "'", ";", ":", "!", "?", "(", ")", "-"]
with open(file_path_text, "r", encoding="utf-8") as f:
    text = unidecode.unidecode(f.read())

    # Generate candideGen.txt
    with open("CandideGen.txt", "w+") as file:
        for min, maj in alphabet.items():
            line = ""
            for letter in text:
                if min == letter or maj == letter:
                    line += letter
            if line:
                file.write(line + "\n")
        for other in ponctuation:
            line = ""
            for letter in text:
                if other == letter:
                    line += letter
            if line:
                file.write(line + "\n")

    # count words
    tab_words = re.split(" |, ", text)
    number_words = len(tab_words)
    print(f"Nombre de mots {number_words}\n")

    # count sentences
    tabSentences = text.split(". ")
    number_sentences = len(tabSentences)
    print(f"Nombre de phrases : {number_sentences} \n")

    # count letter
    text = text.lower()
    i = 0
    for letter in text:
        for alpha in alphabet.keys():
            if letter in alpha:
                i += 1
    print(f"Il y a {i} lettres dans le texte\n")

    # count vowels
    vowels = ["a", "e", "u", "i", "o", "y"]
    i = 0
    for letter in text:
        if letter in vowels:
            i += 1
    print(f"Il y a {i} voyelles dans le texte\n")

    # count 5 words most uses and 5 most uses with more than 7 char
    number_words = {}
    number_long_words = {}
    for word in tab_words:
        word = word.strip(".")
        n = 0
        u = 0
        for i in range(len(tab_words)):
            if tab_words[i] == word:
                n += 1
            if tab_words[i] == word and len(word) > 7:
                u += 1
        number_words[word] = n
        number_long_words[word] = u
    sorted_words = sorted(number_words.items(), key=lambda x: x[1], reverse=True)[:5]
    print(f"Les 5 mots les plus utilises sont {sorted_words}")

    sorted_longs_words = sorted(
        number_long_words.items(), key=lambda x: x[1], reverse=True
    )[:5]
    print(f"Les 5 mots de plus de 7 char les plus utilises sont {sorted_longs_words}")
