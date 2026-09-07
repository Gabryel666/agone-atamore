# Sources de travail — projet Agone / Atamore

Ce dossier est destiné à permettre à Codex de poursuivre l’analyse éditoriale sans dépendre du chat d’origine.

## Contenu

- `journal-atamore/` : extraction texte fidèle, page par page, du PDF de journal personnel d’Atamore (11 pages).
- `ecole-obscurantiste/` : extraction texte du PDF de l’École obscurantiste de Vertelarme. La page 1 est essentiellement un plan graphique ; sa géométrie n’est donc pas restituée par l’extraction texte. La page 2 contient la légende détaillée des pièces.
- `chronologie-campagne-vertelarme/` : texte source de la chronologie de campagne, découpé uniquement pour faciliter le stockage et la lecture. Les parties doivent être lues dans l’ordre `part-00`, `part-01`, `part-02`.
- `solo-abyme-1444.md` : notes de campagne fournies directement par l’utilisateur pour le flashback solo d’Abyme, encore en cours de jeu.

## Règles d’utilisation

Ces fichiers sont des **sources**, pas des textes prêts à publier. Ne pas corriger silencieusement les noms, dates, contradictions ou formulations. Comparer avec `docs/ALPHA_EDITORIAL_HANDOFF.md` et `docs/CANON_SOURCE_PACK.md`, qui contiennent les décisions éditoriales et corrections explicitement validées par l’utilisateur.

N’inventer aucune suite à un événement non documenté. En particulier, l’aventure solo d’Abyme 1444 est toujours **en cours**.

## Originaux binaires

Les originaux disponibles dans le chat étaient :

- `journal(1).pdf` — 11 pages ;
- `école.pdf` — 2 pages, dont un plan graphique ;
- `1024-Agone-US-10.jpg` — carte de l’Harmonde ;
- `chronologie-campagne-vertelarme.md`.

Le connecteur GitHub utilisé depuis le chat écrit directement des fichiers texte mais ne transfère pas ici les binaires PDF/JPEG. Les contenus textuels nécessaires à l’analyse sont donc déposés sous forme d’extractions fidèles. Pour une future exploitation graphique précise du plan ou de la carte, conserver/ajouter les originaux binaires depuis le poste local si nécessaire.
