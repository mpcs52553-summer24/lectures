# Week 5

Today there are two folders with sample code:

* `movies` has an `index.html` file that we will start with today
* `server` has an example of server-side functionality, if we have time today

**NOTE**: For next week, please install Node from https://nodejs.org/ if you wish to code along in class.

The main idea for this week is that you can think of a big website as a collection
of smaller components.  Each component:

* is a rectangle on the page
* has its own state
* knows how to draw itself onto the screen
* can be initialized with an initial state
* reacts to events only within its own rectangle

### The JavaScript Event Loop

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
* To run a function "asynchronously", look at functions like `setTimeout()` and `setInterval()`

### Maintaining Page State with JS

* Using the `Element.innerHTML` property
* Holding state
  * File-level variables
  * Global variables on `window`
  * Element-level variables using `data-*` attributes
  * Using JS classes and object instances
  * Using `localStorage` or `sessionStorage`
  * Using an external database or API
* Object destructuring syntax

### Intro to Frameworks

* CSS Frameworks: Bootstrap, Tailwind, ...
* JS Frameworks: React, Angular, Vue, Next, Ember, ...
* Static site generators: Jekyll, Hugo, Gatsby, GitBook, ....
* Server-side frameworks: Laravel (PHP), Rails (Ruby), Spring (Java), Express (JS), Django (Python), Flask (Python),  ...

### HTTP is Stateless!

* How do we manage state between requests?
* Flask example
* Client-side "cookies" and server-side databases

