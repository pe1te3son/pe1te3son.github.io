## Optimization project udacity

####  Steps taken to optimize site

##### views/main.js
  1. I moved all variables in changePizzaSizes() function outside of For Loop,
  2. Created new variables which gets randomPizzaContainer by class,
  3. Moved scrollTop function outsice of For Loop in updatePositions() function,
  4. Moved `var pizzasDiv = document.getElementById("randomPizzas");` and `var movingPizzas1 = document.getElementById("movingPizzas1");` outside of ForLoop

##### index.html
  1. In index.html I added async attribute to scripts tags
  2. Fixed google fonts link
  3. Added media="print" for print stylesheets
    _project-*.html_

#### General
  1. Compressed all images
  2. Compressed all css and js files
  3. updated all `<link>` attributes in all html files

#### Gulp

_I have used gulp for most of the task requiered compresion_

To run gulp:

*  Navigate to root directory and run `npm install` from command line,
*  Run `gulp` _(gulp will compress all files and images.jpg in the same directory)_
