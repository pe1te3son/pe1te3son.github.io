## Optimization project - Udacity

####  Steps taken to optimize site

##### views/main.js
  1. I moved all variables in changePizzaSizes() function outside of For Loop,
  2. Created new variables which gets randomPizzaContainer by class,
  3. Moved scrollTop function outsice of For Loop in updatePositions() function,
  4. Moved `var pizzasDiv = document.getElementById("randomPizzas");` and `var movingPizzas1 = document.getElementById("movingPizzas1");` outside of ForLoop
  5. I set to display only 65 pizzas on screen for big screen and 30 for small (under 800px)

##### index.html
  1. In index.html I added async attribute to scripts tags
  2. Disabled google fonts link as it was slowing the site
  3. Added media="print" for print stylesheets
    _project-*.html_

#### General
  1. Compressed all images
  2. Compressed all css and js files
  3. updated all `<link>` attributes in all html files


To visit a site please follow the [link](https://pe1te3son.github.io/optimization)
