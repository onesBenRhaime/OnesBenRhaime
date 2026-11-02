---
title: "What building an AI EdTech platform taught me about being a full-stack product engineer"
date: 2026-11-20
description: "Lessons from building PrimeProfs end to end — Next.js frontend, NestJS backend, PostgreSQL, a data migration, SEO and AI features — as a full-stack product engineer."
tldr: "Shipping PrimeProfs taught me that full-stack isn't knowing every layer — it's owning the problem across all of them. The hardest parts weren't the AI features, they were the database, the migration and getting found on Google."
tags: ["Product Engineering", "Full-Stack", "Next.js", "NestJS", "PostgreSQL", "AI", "EdTech"]
draft: true
---

students don't care what stack you used. they care that the page loads, the exercise makes sense, and their progress is still there tomorrow.

that sentence took me [X months] of building primeprofs to really believe.

## the problem

[à compléter : le problème que primeprofs résout. pour qui ? pourquoi les solutions existantes ne suffisaient pas ? un chiffre si tu en as : nombre d'élèves, de profs, de cours.]

## the stack, and why

- **frontend:** react + next.js — [pourquoi : seo, rapidité, rendu serveur…]
- **backend:** nestjs — [pourquoi : structure, modules, typescript partout…]
- **database:** postgresql — [pourquoi : relations élèves / cours / progression…]
- **ai:** [quel modèle / quelle feature : génération d'exercices, correction, recommandations…]

the stack matters less than the reasons. a recruiter reading this should see *decisions*, not logos.

## what i got wrong first

[à compléter : une vraie erreur. ex : un schéma de base de données qu'il a fallu refaire, une feature ia trop ambitieuse, une page trop lente. c'est la partie que les lecteurs retiennent.]

## the migration nobody sees

[à compléter : une migration de données ou de schéma que tu as faite. qu'est-ce qui a bougé ? comment tu as évité de casser les données des élèves ? backup, script, migration progressive, tests…]

```ts
// [un vrai petit bout de code : une migration, un service nestjs, un appel ia]
```

> the most important feature is the one that keeps the data safe.

## making the ai actually useful

[à compléter : comment l'ia aide vraiment les élèves. ce qui a marché, ce qui n'a pas marché (hallucinations, coût, latence) et comment tu l'as cadrée.]

## getting found: seo for a product, not a blog

[à compléter : ce que tu as fait pour le seo de primeprofs : métadonnées, pages rapides, données structurées, contenu. un résultat si tu en as : impressions, clics, positions.]

## what i'd tell you

- own the problem, not the layer. full-stack means you can follow a bug from the button to the database.
- [leçon 2, tirée de ton expérience]
- [leçon 3, tirée de ton expérience]

primeprofs is live and students open it every day. that's still the best code review i've ever had.
