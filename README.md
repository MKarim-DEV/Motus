# Création du jeu Motus en Javascript
 ## La Méthode
 
 Je vais partir sur la logique qui me parait la plus simple au vue du temps que je vais pouvoir y consacrer (on fait en fonction de son niveau hein...), puis si tout fonctionne bien j'essaierais d'optimiser.
 
 Je vais créer une variable pour stocker "les mots à deviner" définis à l'avance dans un tableau, puis au chargement de la page, on choisi un mot au hasard dans la variable et on l'envoi dans toutes les lignes du tableau HTML, mais on fait en sorte que seule la première case de la ligne 1 soit visible et donc tout le reste du contenu du tableau est en "display:none" en gros.
 *optimisation possible: rajouter un bouton "démarrer la partie" pour lancer la fonction qui choisit un mot aléatoirement, plutôt que de le faire au chargement de la page.*

Puis lorsque le joueur saisi son mot dans le formulaire, une fonction se lance au click sur le submit button, elle compare les caractères du mot saisi avec ceux de la ligne du tableau, si cela correspond la cellule reçoit la classe "wellplaced" et donc s'affiche.
*optimisation possible:
_utiliser la gestion des erreurs pour renvoyer une erreur si le joueur ne saisit pas exclusivement des lettres ou si il saisit moins de 8 charactères.
_faire une classe pour les lettres qui sont présentent dans le mot mais pas à la bonne place, avec un style spécial, pour donner un indice au joueur* 

Ensuite une fonction qui gère les tours/tentatives doit vérifier que les 8 cases de la ligne n'ont pas la classe "wellplaced", sinon c'est que le mot a été trouvé et donc que le joueur a gagné (fin de la partie), elle doit aussi vérifier que le tour 10 n'a pas été atteint sinon fin de la partie aussi, et sinon il lance le tour suivant avec la saisi d'un nouveau mot dans le formulaire, et le passage à la ligne suivante.

Et pour finir une fonction pour rejouer, pour le moment on va partir sur le fait que rejouer actualise la page et donc relance la fonction de choix de mot aléatoire au chargement de la page, on verra par la suite si on peut faire moins bourrin.
*optimisation possible: créer un bouton rejouer en "display:none" au même emplacement que le bouton jouer et à la fin de la partie (gagnée ou perdue) il lui ajouter une class pour l'afficher et le bouton "jouer" reçoit une classe pour le faire disparaitre par la même occasion, ce sera une bonne opportunité pour tester le toggle.

## Choix Syntaxiques
Pour une meilleure lisibilité et bien différencier les variables et les fonctions, je vais partir sur ceci:
_Variables en camelCase.
_Constantes en UPPER_SNAKE_CASE.
_Fonctions en snake_case.