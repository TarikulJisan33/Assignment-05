# JavaScript DOM Questions & Answers

This file contains some important JavaScript DOM related questions and answers.  
I tried to explain them in my own words, in a very simple way.

---
<!-- Question 1 -->
## 1. Difference between getElementById, getElementsByClassName and querySelector / querySelectorAll

- **getElementById("id")**  
  Finds an element by its id. Since id is unique, it always gives only one element.

- **getElementsByClassName("class")**  
  Finds all elements with the same class name.  
  It returns something like an array (HTMLCollection). You can loop through it.

- **querySelector("selector")**  
  Finds the first element that matches the CSS selector.  
  Example: `document.querySelector(".box")` will give the first element with class `box`.

- **querySelectorAll("selector")**  
  Finds all elements that match the CSS selector.  
  It returns a NodeList (almost like an array).

---
<!-- Question 2 -->

## 2. How to create and insert a new element into the DOM?

We can use `document.createElement()` to create a new element.  
Then we can set its text or HTML and finally add it to the page using `appendChild()` or `append()`.

Example:
```js
const div = document.createElement("div");
div.innerText = "Hello, I am a new element!";
document.body.appendChild(div);


// Quesion-3

## 3. What is Event Bubbling and how does it work?

Event bubbling is a behavior in the DOM where an event starts from the element that triggered it and then propagates (moves upward) through its parent elements, one by one, until it reaches the top (document or window).

### Example:
Suppose you have a `<button>` inside a `<div>`, and the `<div>` is inside the `<body>`.  
If you click the button:

1. The event on the button is triggered first.  
2. Then the event on the parent `<div>` is triggered.  
3. After that, the `<body>` event is triggered.  
4. Finally, it can reach `document` and `window`.  

This way, the event "bubbles up" the DOM tree from child to parent step by step.


//Question 4


## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where instead of attaching event listeners to each child element, we attach a single event listener to their parent element. Because of event bubbling, the parent can “catch” the events from its children.

### Example:
```javascript
document.getElementById("menu").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked on:", e.target.innerText);
  }
});



// Question 5


## 5. What is the difference between preventDefault() and stopPropagation() methods?

- **preventDefault()**:  
  This method stops the default behavior of an element from happening.  
  Example: Preventing a form from submitting or preventing a link from opening.  
  ```javascript
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // stops the form from submitting
    console.log("Form submission stopped!");
  });


