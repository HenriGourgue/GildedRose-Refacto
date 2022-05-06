# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

## Réponse à la problématique (plan initial)

Dans le but de répondre à la problématique et refactorer le code "sans douleur", dans cet ordre chronologique, je souhaite effectuer les tâches suivantes.

1. Rédaction des tests en tdd : écrire les tests d'abord, qui seront au rouge, pour les passer au vert dans la suite du tp (branche "tests"). Les tests seront décomposés par items : "Standard items", "Aged Brie", "Backstage passes", "Sulfuras", "Conjured".

2. Refactorer le code de la manière suivante (banche "refactor"):
    1. Création d'un sous répertoire "class", dans le but d'écarter les classes existantes du fichier principal du projet.
    2. Sous division de la classe item en 3 nouvelles classes (chacune héritant de la classe "Item") : "Legendary", "Conjured", "Standard", "Brie" et "Concert".
    3. Division des tests en fichiers distincts.

3. Rédaction ou modification du code pour faire passer les tests au vert (branche "dev") : modifier la méthode updateQuality et en faire plusieurs méthodes par classe héritée d'item.

## Réponse à la problématique (tâches effectuées)

Ici, est expliqué l'ensemble des tâches que j'ai mise en oeuvre dans un ordre chronologique pour répondre à la problématique (en comparaison avec moin plan initial).

1. Rédaction des tests en tdd par rapport à la méthoide initiale "updateQuality" codée dans la classe "Shop". => Tous les tests au vert sauf ceux des items conjurés. **Branche "tests"**.

2. Refactoring du code **Branche "refactor"** :
    1. Création d'un sous dossier "class".
    2. Export des classes "Item" et "Shop" dans des fichiers séparés. Modification des imports des tests pour utiliser ces nouveaux fichiers => Tests au vert.
    3. Création des classes "Brie", "Standard", "Concert", "Legendary" et "Conjured" en fichiers distincts. Modification des imports des tests pour utiliser ces nouveaux fichiers => Tests au vert.

3. Modification du code **Branche dev** :
    1. Modification du code de la classe "Shop" pour utiliser les méthodes "updateQuality" des classes héritées.
    2. Ajout dans chaque classe héritée de la méthode "updateQuality" dont le fonctionnement est propre à chaque Objet.
    3. Vérification des tests au vert.
    4. Supression du code commenté/inutile.

4. Merge des branches **Branche main**.

5. Fin du projet.
