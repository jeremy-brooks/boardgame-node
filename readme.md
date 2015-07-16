Board game with mines
=====================

Rules of the game are as follows
--------------------------------

1. The board is 8 by 8 in size
2. A player starts on the bottom-left square
3. A player can move their piece up, down, left or right one square by entering U, D, L or R
respectively
4. A random number of squares are ‘landmines’
5. The aim of the game is to get to the top side of the board without hitting more than 2
landmines.
6. Following each move the game displays the new location and whether any landmines were hit,
plus whether the game has been lost (more than 2 land mines hit) or won (reached the top of
the board)

Installation
------------

Clone the master branch and then follow the next few steps. You can skip the node section if you already have it installed.

### First install node.js

If you have not got Node then you can follow the download and installation instructions at https://nodejs.org/

### Get dependencies

You'll need to get project dependancies with the node package manager. To do this, navigate to the project root and run the following:

```
npm install
```

Running tests
-------------

### Unit test suite

```
npm test
```

### Integration test suite

```
npm run-script int-test
```

Playing the game
----------------

This is still to be implemented fully and will emerge once the integration tests are complete.