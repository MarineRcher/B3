Quelles améliorations de performance avez-vous observées après l'ajout d'index ?

On a moins de documents examinés et un type de scan differents, il passe de `COLLSCAN` à `IXSCAN`. Mongodb trouve directement les documents concercernés à partir des indexs.

Quels types d'index ont été les plus efficaces pour vos requêtes ?

Les indexs pour les requêtes couvertes, elle n'examine aucun documents, ce qui nous aussure sont efficacites.
Les indexs TTL qui permettent de supprimer automatiquement des sessions apres un temps definit.
Les indexs partiels, qui vont viser des données précises. 

Avez-vous identifié des compromis entre performance de lecture et d'écriture ?
On a moins de documents examines mais le temps d'execution ne change pas beaucoup. 

Comment choisiriez-vous les index pour une application de bibliothèque en production ?
Les index courvertes pour des recherches precises avec les filtres avec des sortie en decroissant selon l'annee de publication ou l'ordre alphabetique des auteurs.
Les indexs de recherche globales comme l'auteur ou le titre avec des sortie en decroissant selon l'annee de publication ou l'ordre alphabetique des auteurs.
Des indexs partiels pour les livres en retard par exemple.

