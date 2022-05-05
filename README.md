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

## Réponse à la problématique

Dans le but de répondre à la problématique et refactorer le code "sans douleur", dans cet ordre chronologique, je souhaite effectuer les tâches suivantes.

1. Rédaction des tests en tdd : écrire les tests d'abord, qui seront au rouge, pour les passer au vert dans la suite du tp (branche "tests"). Les tests seront décomposés par items : "Standard items", "Aged Brie", "Backstage passes", "Sulfuras", "Conjured".

2. Refactorer le code de la manière suivante (banche "refactor"):
    1. Création d'un sous répertoire "class", dans le but d'écarter les classes existantes du fichier principal du projet.
    2. Sous division de la classe item en 3 nouvelles classes (chacune héritant de la classe "Item") : "Legendary", "Conjured", "Standard", "Brie" et "Concert".
    3. Division des tests en fichiers distincts.

3. Rédaction ou modification du code pour faire passer les tests au vert (branche "dev") : modifier la méthode updateQuality et en faire plusieurs méthodes par classe héritée d'item.