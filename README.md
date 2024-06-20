# Portfolio de PerLucCo

Ce projet de portfolio est développé avec `VueJS3` en utilisant 2 extensions particulières : `VueRouter` et `DevTool`.
Le contenu de ce projet est fictif afin de pouvoir animer le fonctionnement du site de type `Single Page Applicatif` (SPA).
Le code d'exécution du projet est réalisé avec `Vite`.

## Versions du projet

Le projet dispose de 3 versions de prototype opérationnel (v0.1.0 à v0.3.0) et d'une version finale opérationnelle (v1.0.0).
La version à utiliser est la v1.0.0 qui développe toutes les fonctionnalités du projet.

## Structure du projet

L'accès aux documents de description du projet est dans le dossier `documents`

```sh
cd documents
```

L'accès au code du projet est dans le dossier `portfolio`

```sh
cd portfolio
```

### Compiler et recharger à chaud pour le développement

Pour visualiser rapidement le site Portfolio de PerLucCo, vous pouvez utiliser le serveur de développement `Vite` à partir du terminal de VSCode.
```sh
npm run dev
```
L'exploitation du lien pour activer l'outil DevTool peut vous permettre de visualiser le fonctionnement dynamique du code.

### Compiler pour la mise en production

Ce projet, dans cette version v1.0.0, n'a pas la vocation à une mise en oeuvre sur un site de production. Toutefois, pour produire une version pour une exploitation opérationnelle avec un code optimisé, vous pouvez exploiter la commande  de compiation qui produira un dossier `dist` contenant le code opérationnel pour une mise en production.
```sh
npm run build
```
