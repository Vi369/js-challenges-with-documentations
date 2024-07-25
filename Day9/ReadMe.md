## Day 9: DOM Manipulation

### Approach and Thought Process

On Day 9, the goal was to explore and gain a deeper understanding of DOM manipulation, including selecting and modifying elements, creating and appending elements, removing elements, modifying attributes and classes, and handling events.

#### Activity 1: Selecting and Manipulating Elements

##### Task 1: Select an HTML element by its id and change its text content
###### Approach:
* Approach is, selecting an HTML element by its id and changing its text content.

###### Thought Process:
* I used `getElementById` to select the element with the id `changeText` and then changed its `textContent` to 'Chai Aur Code'.

##### Task 2: Select elements by their class and change background color
###### Approach:
* Approach is, selecting elements by their class and changing their background color.

###### Thought Process:
* I used `getElementsByClassName` to select elements with the class `ChangeBgColor`. Then, I looped through the NodeList and set the `backgroundColor` style property to 'red'.

#### Activity 2: Creating and Appending Elements

##### Task 3: Create a div element with some text content and append it to the body
###### Approach:
* Approach is, creating a div element with text content and appending it to the body.

###### Thought Process:
* I created a new `div` element, set its `innerHTML` to contain a header, and appended it to the `bodyContainer` element using `appendChild`.

##### Task 4: Create an li element and add it to an existing UL list
###### Approach:
* Approach is, creating an `li` element and adding it to an existing `ul` list.

###### Thought Process:
* I created a new `li` element, set its `textContent` to 'Pani', and appended it to the `unOrderlist` element using `appendChild`.

#### Activity 3: Removing Elements

##### Task 5: Select an HTML element and remove it from the DOM
###### Approach:
* Approach is, selecting an HTML element and removing it from the DOM.

###### Thought Process:
* I selected the `para` element and removed it from its parent element `removePara` using `removeChild`.

##### Task 6: Remove a specific child element
###### Approach:
* Approach is, selecting and removing a specific child element.

###### Thought Process:
* I selected the fourth child of the `parent` element and removed it using `removeChild`.

#### Activity 4: Modifying Attributes and Classes

##### Task 7: Select an HTML element and change one of its attributes
###### Approach:
* Approach is, selecting an HTML element and changing one of its attributes.

###### Thought Process:
* I changed the `id` attribute of the element with id `hello` to 'chai' and set its `style` attribute to 'none'.

##### Task 8: Add and remove a CSS class from an HTML element
###### Approach:
* Approach is, adding and removing a CSS class from an HTML element.

###### Thought Process:
* I used `classList.toggle` to add or remove the `decorate` class from the `text` element when the `toggleButton` is clicked.

#### Activity 5: Event Handling

##### Task 9: Add a click event listener to a button that changes the text content of a paragraph
###### Approach:
* Approach is, adding a click event listener to a button to change the text content of a paragraph.

###### Thought Process:
* I added a `click` event listener to the `button` that changes the `textContent` of the `changeAblePara` element to 'Hey Baby!'.

##### Task 10: Add a mouseover event listener to an element that changes its color
###### Approach:
* Approach is, adding a mouseover event listener to an element to change its color.

###### Thought Process:
* I added a `mouseover` event listener to the `button` that changes its `borderColor` to 'red'.

### Achievements

By completing these activities, I gained:
* Practical experience in selecting and manipulating DOM elements using JavaScript.
* Improved understanding of creating, appending, and removing elements dynamically.
* Enhanced skills in modifying attributes and classes of HTML elements.
* Proficiency in handling various events to create interactive web pages.
