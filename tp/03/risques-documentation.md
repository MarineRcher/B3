# Prendre en compte le risque

## 1. L'analyse des risques

L'informatique fait souvent l'objet de critiques : complexité excessive, manque de fiabilité, coûts élevés. Les équipes projets sont également critiquées : lenteur, frilosité, difficulté d'adaptation aux nouvelles technologies. Ces critiques, qu'elles concernent les langages de programmation, la taille des projets ou leur rentabilité, soulignent l'importance cruciale de l'analyse des risques dans la conduite de projet.

### a. Les classes de risques

Les risques se répètent souvent selon des thématiques similaires. Prenons l'exemple du choix du langage de programmation : les débats entre programmation orientée objet et autres paradigmes illustrent qu'il n'existe pas de solution universelle. Chaque technologie est adaptée à un contexte spécifique.

#### Classifications des risques par catégorie

##### Risques Organisationnels

| Type | Exemples |
|------|----------|
| Taille du projet | - Projet trop gros pour l'équipe<br>- Projet trop petit pour les procédures qualité |
| Structure de l'équipe | - Équipe trop jeune<br>- Excès de leadership<br>- Manque de disponibilité |
| Calendrier | - Planning trop serré<br>- Sous/sur-dimensionnement |
| Dotation | - Budget insuffisant<br>- Dotation tardive |
| Rentabilité | - Projet non rentable<br>- ROI négatif |
| Sous-traitance | - Sous-traitants non identifiés<br>- Problèmes de leadership |

##### Risques Fonctionnels

| Type | Exemples |
|------|----------|
| Périmètre | - Non déterminé<br>- Trop large<br>- Redondance avec l'existant |
| Processus | - Différences critiques avec l'existant<br>- Processus non validés |
| Domaine métier | - Imprécisions<br>- Décalque inapproprié |
| Changement | - Impact utilisateurs trop important<br>- Manque d'accompagnement |

##### Risques Techniques

| Type | Exemples |
|------|----------|
| Plateforme | - Non adaptée<br>- Non qualifiée<br>- Documentation insuffisante |
| Composants tiers | - Problèmes de disponibilité<br>- Incompatibilités<br>- Coûts de licence |
| Maîtrise technique | - Manque d'expertise<br>- Technologies inadaptées |
| Contraintes environnementales | - Tests d'intégration impossibles<br>- Sécurité non prise en compte |

##### Risques Stratégiques

| Type | Exemples |
|------|----------|
| Type de développement | - Concurrence progiciel<br>- Architecture non réutilisable |
| Adaptation existant | - Reprise sans maîtrise<br>- Différences critiques |
| Généricité | - Trop conceptuel<br>- Non modulaire |
| Coût et charge | - Mobilisation excessive<br>- Impact trésorerie |

### b. L'identification des risques

L'identification efficace des risques nécessite :

- Une revue systématique par thématique
- Un travail en binôme (chef de projet + expert)
- Une analyse basée sur une solution partiellement conçue
- Un focus sur les différences plutôt que les similitudes entre projets

### c. La caractérisation du risque

#### Processus de caractérisation

1. **Recherche de l'aléa potentiel**
2. **Identification des causes et conséquences**
3. **Formulation d'un énoncé clair**

#### Quantification

- **Probabilité** : relative à la durée du projet (0-100%)
- **Sévérité** : échelle de 0 à 3 (ou plus)
- **Coût probable** = probabilité × sévérité

## 2. Le plan de risques

### a. Stratégies de gestion

- Consensus sur le niveau de risque
- Documentation formelle des décisions
- Surveillance continue
- Mise à jour régulière

### b. Modèle de suivi des risques

| Risque | Propriétaire | Détection | Mesures correctives |
|--------|--------------|-----------|-------------------|
| Module SSO | Architecte | - Retard installation<br>- Non conformité<br>- Manque expertise | - Isolation du module<br>- Remplacement<br>- Formation équipe |

### c. Choix du modèle de développement

#### Critères de sélection
- Cadre projet
- Périmètre fonctionnel/technique
- Risques d'intégration
- Qualité requise
- Stratégie globale

#### Comparaison des modèles

| Aspect | Cascade | Cycle en V | Itératif |
|--------|----------|------------|-----------|
| Projets longs | ❌ | ✅ | ⚠️ |
| Périmètre évolutif | ❌ | ⚠️ | ✅ |
| Complexité technique | ⚠️ | ❌ | ✅ |
| Intégration | ❌ | ⚠️ | ✅ |

> Note: La combinaison de différentes approches est souvent nécessaire pour optimiser la gestion des risques.
