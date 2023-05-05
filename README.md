# alhist-technical-test-nodejs
### Air Liquide ALHIST technical test for backend dev positions
A réaliser en nodejs.

Créez une branche nom-prenom et pushez votre code dessus.


J'ai une table "steps" dans ma base de donnée qui représente des étapes contenant une action, considérez que votre base de données vous retourne par exemple:
```
const steps = [
  {id: 1, action: 'MANGER', next_step_id: 3},
  {id: 3, action: 'BOIRE', next_step_id: 2},
  {id: 2, action: 'DORMIR', next_step_id: 5},
  {id: 5, action: 'TRAVAILLER', next_step_id: 4},
  {id: 4, action: 'JOUER', next_step_id: 9},
  {id: 6, action: 'VOYAGER', next_step_id: 7},
  {id: 7, action: 'TERMINER', next_step_id: NULL},
  {id: 9, action: 'TELEPHONER', next_step_id: 6}
]
```
Le but est de parcourir la donnée dans l'ordre des next steps.
1 => 3 => 2 => 5 => 4 => 9 => 6 => 7

Pour un peu plus de contexte, on imagine que les steps représentent des actions d'un robot que vous prédéfinissez, vous lui choisissez un ordre d'action et les steps doivent s'éxécuter dans l'ordre que vous avez défini, cependant vous pouvez supprimer certaines des actions que vous avez défini, ou en déplacer à souhait.

De la sorte, pour que l'on puisse stocker les steps dans une base de donnée SQL (limitation technique), on se retrouve forcé d'utiliser next_step_id pour connaitre l'ordre réel des steps et pouvoir facilement en éditer l'ordre ou en supprimer.
