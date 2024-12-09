# Le Modèle en Cascade (Waterfall)

## Un standard incontournable de la gestion de projet

---

# Introduction

-   Modèle de référence dans la gestion de projet
-   Succession logique de phases
-   Taux de réussite prouvé
-   Compatible avec certains aspects des méthodes agiles

---

# Principe Fondamental

-   Succession de phases séquentielles
-   Chaque phase commence après l'achèvement de la précédente
-   Progression linéaire :
    -   Expression des besoins
    -   Spécifications
    -   Développement
    -   Tests
    -   Déploiement

---

# La Métaphore de la Cascade

-   Comme un cours d'eau qui descend la montagne
-   Progression naturelle vers l'aval
-   Retour en arrière très coûteux
-   Règle des coûts :
    -   Modification = budget × 10 à chaque phase précédente
    -   D'où l'importance de la stabilité des spécifications

---

# Conditions de Réussite

1. Spécifications stables
2. Plateforme technique éprouvée
3. Estimation précise des phases
4. Planification détaillée
5. Marges de sécurité appropriées

---

# Processus de Validation des Spécifications

1. Rédaction des spécifications
2. Revue dirigée (commentée)
3. Révision et ajustement
4. Revue finale
5. Validation formelle (sign-off)

---

# Outils de Gestion

## 1. Gouvernance

-   Définition des règles
-   Attribution des rôles
-   Responsabilités
-   Instances de suivi
-   Processus de décision

## 2. Gestion des Risques

-   Évaluation continue
-   Arbitrage des changements
-   Qualification des modifications

---

# Indicateurs Clés

-   Qualité
-   Coût
-   Délai

---

# Adaptabilité

## Solutions pour les changements :

1. Lotissement des évolutions
2. Hybridation avec méthodes agiles
3. Cycles de projets en cascade

---

# Points Forts

-   Clarté de l'organisation
-   Facilité de planification
-   Efficacité sur projets stables
-   Documentation rigoureuse
-   Contrôle des coûts

# Les Phases de Développement Logiciel

## De l'Expression des Besoins à la Mise en Production

---

# 1. Expression de Besoins et Cahier des Charges

## Contenu du Cahier des Charges

-   Contexte et objectifs stratégiques
-   Objet et périmètre du projet
-   Domaine métier
-   Périmètre fonctionnel
-   Critères de qualité
-   Conditions opérationnelles
-   Méthodologie
-   Planning et aspects financiers
-   Responsabilités et garanties

---

# 2. Référentiels de Spécifications

## Dossier d'Intégration Fonctionnelle (DIF)

-   Acteurs
-   Étapes des processus
-   Conditions de déclenchement
-   Résultats attendus

## Dossier d'Intégration Technique (DIT)

-   Architecture applicative
-   Interfaces techniques
-   Procédures d'exploitation

---

# 3. Phase de Réalisation

## Gestion du Code Source

-   Développement collaboratif
-   Archivage sécurisé
-   Gestion des versions
-   Suivi des tâches

## Documentation

-   Commentaires dans le code
-   Documentation générée
-   Régions de code
-   Revues de code

---

# 4. Types de Tests

## Tests Unitaires

-   Validation des modules individuels
-   Tests automatisés
-   Frameworks : JUnit, NUnit

## Tests d'Intégration

-   Connectivité
-   Sécurité
-   Performance
-   Installation
-   Environnement

---

# 5. Tests Fonctionnels

## Tests Boîte Noire

-   Validation des processus
-   Sans connaissance technique
-   Tests d'acceptation utilisateur

## Tests Boîte Blanche

-   Connaissance du fonctionnement interne
-   Tests de stress
-   Tests aux limites

---

# 6. Banc d'Essai (Benchmark)

## Types de Tests

-   Tests de charge
-   Tests de performance
-   Tests de stress
-   Tests d'endurance
-   Tests aux limites

---

# 7. Gestion des Versions

## Production des Versions

-   Numérotation (Majeur.Mineur)
-   Release notes
-   Change log
-   Procédures d'installation

## Livraison Continue

-   Intégration continue
-   Déploiement automatisé
-   Tests fréquents

---

# 8. Mise en Production

## Étapes Finales

-   Industrialisation (40% de l'effort)
-   Mise en production
-   Mise en service
-   Change management
-   Support utilisateurs

---

# Points Clés à Retenir

1. Documentation rigoureuse à chaque étape
2. Tests systématiques et variés
3. Gestion stricte des versions
4. Automatisation des processus
5. Support utilisateur essentiel

# Organisation d'un Projet de Développement

## Guide Pratique de Mise en Œuvre

---

# 1. Gestion du Code Source

## Organisation avec Azure DevOps

-   Méthodologie Agile-Scrum
-   Gestion des sprints/itérations
-   Archivage quotidien du code
-   Association code/tickets
-   Tests unitaires obligatoires

## Bonnes Pratiques

-   Vérification de compilation avant/après commit
-   Mise à jour des statuts (actif, en cours, terminé)
-   Validation par les testeurs
-   Documentation systématique

---

# 2. Documentation et Revues

## Documentation Technique

-   Commentaires normalisés
-   Extraction automatique
-   Spécifications techniques :
    -   Modèles de base de données
    -   Diagrammes de classes
    -   Charte graphique
    -   Navigation
    -   Configuration

## Revues de Code

-   Fréquence hebdomadaire
-   Contrôle qualité
-   Couverture de code
-   Élimination du code mort

---

# 3. Gestion des Versions

## Identification des Versions

-   Format : Majeur.Mineur.Itération.Compilation
-   Exemple : 1.0.2.45
-   Labellisation systématique
-   Traçabilité complète

## Scripts et Base de Données

-   Scripts SQL numérotés
-   Scripts réentrants
-   Gestion des montées de version
-   Organisation par répertoires

---

# 4. Suivi d'Avancement

## Métriques

-   Charge en heures (1 jour = 8h)
-   Reste à faire
-   Points réalisés/non commencés
-   Rapports automatisés Excel

## Tableaux de Bord

-   Suivi par itération
-   État des tickets
-   Progression globale
-   Charge consommée

---

# 5. Organisation des Tests

## Scénarios de Test

-   Identification unique
-   Conditions préalables
-   Étapes détaillées
-   Résultats attendus
-   Cas nominaux et exceptions

## Tests Automatisés

-   Calculs de KPI
-   Droits d'accès
-   Non-régression
-   Jeux d'essais préparés

---

# 6. Gestion des Anomalies

## Process de Validation

-   Double validation requise
-   Qualification par développeur
-   Priorisation par analystes
-   Suivi dans Azure DevOps

## Statistiques

-   Convergence bug/correction
-   Évolution des catégories
-   Suivi de la régression
-   Tableaux de bord quotidiens

---

# 7. Déploiement

## Environnements

| Type          | Usage              |
| ------------- | ------------------ |
| Dev           | Tests unitaires    |
| Test          | Intégration        |
| Préproduction | Tests utilisateurs |
| Production    | Exploitation       |

## Procédures

-   Documentation détaillée
-   Protocoles de test
-   Contrôle des accès admin
-   Journal des interventions

---

# 8. Points Clés de Réussite

1. Documentation rigoureuse
2. Tests systématiques
3. Procédures standardisées
4. Suivi quotidien
5. Environnements dédiés
6. Traçabilité complète
7. Automatisation maximale
