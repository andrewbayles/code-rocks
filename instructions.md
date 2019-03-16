# jQuery Assignment

### Overview

In this assignment, you'll create another fun and interactive game for web browsers. This time, your app must dynamically update your HTML pages with the jQuery library.

### Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

### Before You Begin

1. Read these instructions all the way through.
   
2. Create a new GitHub repo, give it a good name for the game you are building , then clone it to your computer.

3. Inside the cloned folder, create an `index.html` file.

4. Still inside the cloned directory, make a folder called `assets`.
   * Inside the `assets` directory, make three additional folders: `javascript`, `css` and `images`.
     * In the `javascript` folder, make a file called `game.js`.
     * In the `css` folder, make a file called `style.css`.
     * In the `css` folder, make a file called `reset.css`. Paste into it the code found from the Meyerweb Reset.
     * In the images folder, save any of the images you plan on using. (Unsplash has a good collection of photography you can use for free)

5. Set up your repository to deploy to Github Pages.

6. Push the above changes to GitHub. 
   
7. Choose whichever game you want to make. Option Two is an extra hard challenge. After reading the instructions for Option Two, if you don't know where to start, start with Option One. If you have some idea of where to start, see how far you can get with Option Two. If you choose option one, there is nothing wrong with that. Both options are plenty challenging.

### Option One (Recommended)

1. The player will have to guess the answer - similar to Unit 3 Homework. This time, though, the player will guess with numbers instead of letters. 

2. Here's how the app works:

   * There will be four real-world items (food, gems, magical items) displayed as image buttons on the page. (Pick a theme, find images of your items to display to the player).

   * The player will be shown a random number at the start of the game.
   
   * Each item should have a random associated value chosen by the computer.

   * When the player clicks one of the items, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks an item.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the objects will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

#### Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each item should have a random hidden value between 1 - 12.

#### User Stories

- As a user, I should see instructions of how to play.
- As a user, I should be presented with the target number for winning the game.
- As a user, I should be able to click on an item and see my score increase by a determined but unknown amount.
- As a user, I should see that I won the game when my score matches the random number chosen at the beginning.
- As a user, I should see that I lost the game when my score goes over the random number chosen at the beginning.
- As a user, I should be able to play a new game when I win or lose the current game.
- As a user, I should be presented with a new target number for each game.
- As a user, I should know how many times I won and lost the game.

### Option Two (Challenge)

1. Here's how the app works:

   * When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

   * The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.

   * The player chooses an opponent by clicking on an enemy's picture.

   * Once the player selects an opponent, that enemy is moved to a `defender area`.

   * The player will now be able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.

2. The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

3. The player wins the game by defeating all enemy characters. The player loses the game if their character's `HP` falls to zero or below.

#### Option 2 Game design notes

* Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.

* Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
  * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
* The enemy character only has `Counter Attack Power`. 

  * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

* No characters in the game can heal or recover Health Points. 

  * A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

* Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.

#### User Stories

- As a user, I should see instructions for how to play the game.
- As a user, I should be able to see the four character choices and their health points, attack power, and counter attack power.
- As a user, I should be able to select my character from a choice of 4 characters.
- As a user, I should be able to choose which of the remaining 3 characters I will fight first.
- As a user, I should easily be able to distinguish who is currently the defending character.
- As a user, I should see that my attack power is increasing by its starting attack power each time I attack.
- As a user, I should be able to win or lose with any of the characters.
- As a user, I should be able to attack the defending character and see the damage applied.
- As a user, I should be able to pick a new defender when one defender is defeated.
- As a user, I should be able to see the damage I take when a defender attacks my character.
- As a user, I should see that I won the game when I defeat all defending opponents - the opponent health points fall to or below 0. 
- As a user, I should see that I lost the game when my character has been defeated when my character's health points fall to or below 0.

### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**
