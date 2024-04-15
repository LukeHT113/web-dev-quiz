type QnA = {
  q: string,
  a: string
}

export const beginnerJs: QnA[] = [
  {
    q: 'What is the DOM?',
    a: 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects.'
  },
  {
    q: 'How can you handle event bubbling in JavaScript?',
    a: 'Event bubbling is a concept in the Document Object Model (DOM) that describes the way in which events propagate or "bubble up" through the hierarchy of nested elements in the DOM. \n\nWhen an event, such as a mouse click, occurs on a DOM element, the event will be handled by the element first, then its parent element, and so on, until the event reaches the root element. This behavior is called event bubbling.'
  },
  {
    q: 'How do you remove an Element from the DOM?',
    a: 'To remove a DOM element, you can use the "remove" or "removeChild" method of the Node interface.'
  },
  {
    q: 'What are the Logical Operators in JavaScript?',
    a: 'There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), and ?? (Nullish Coalescing). They can be used with boolean values, or with non-boolean values.'
  },
  {
    q: 'What is the difference between Asynchronous and Synchronous code?',
    a: 'The difference between Asynchronous and Synchronous code is that Asynchronous code does not block the execution of the program while Synchronous code does.\n\nAsynchronous code is executed in the background and it does not block the execution of the program. It is usually used to perform tasks that take a long time to complete, such as network requests.\n\nSynchronous code is executed in sequence and it blocks the execution of the program until it is completed. If a task takes a long time to complete, everything else waits.'
  },
  {
    q: 'How do you create a new Element in the DOM?',
    a: "To create a new DOM element, you can use the 'document.createElement' method. It accepts a tag name as an argument and returns a new element with the specified tag name. You can set attributes to the element."
  },
  {
    q: 'What is the difference between `null` and `undefined`?',
    a: "The `null` is an assignment value. It can be assigned to a variable as a representation of no value. But the `undefined` is a primitive value that represents the absence of a value, or a variable that has not been assigned a value."
  },
  {
    q: 'What is the difference between `==` and `===`?',
    a: "The == equality operator converts the operands if they are not of the same type, then applies strict comparison. The === strict equality operator only considers values equal that have the same type."
  },
  {
    q: 'Are Java and JavaScript the same?',
    a: "No, Java and JavaScript are distinct languages. Their similarity in name is coincidental, much like car and carpet. Java is often used for backend and mobile apps, while JavaScript powers web interactivity and backend."
  },
  {
    q: 'What is Nullish Coalescing Operator and how does it work?',
    a: "The Nullish Coalescing Operator (??) returns the right operand if the left one is null or undefined, otherwise, it returns the left operand. It's useful for setting default values without considering falsy values like 0 or '' as absent."
  },
  {
    q: 'How do you measure the dimensions of an Element?',
    a: "You can use the `getBoundingClientRect` method to get the dimensions of an element."
  },
  {
    q: 'Difference between `appendChild()` and `insertBefore()`?',
    a: "You can add a new element to the DOM using the `appendChild` or `insertBefore` method.\n\nThe `appendChild` method adds a new element as the last child of the specified parent element.\n\nWhereas, the `insertBefore` method adds a new element before the specified child element."
  },
  {
    q: 'How do you run a piece of code only once after a specific time?',
    a: "To run a piece of code after a certain time, you can use the `setTimeout` function in JavaScript. It accepts a function and a time interval in milliseconds. It returns a unique id which you can use to clear the timeout using the `clearTimeout` function."
  },
  {
    q: 'How would you scroll to the top of the page using JavaScript?',
    a: "In order to scroll to the top of the page, you can use the `scrollTo` method: 'window.scrollTo(0, 0);'"
  },
  {
    q: 'Is it possible to run 2 lines of code at the same time in JavaScript?',
    a: "No, it is not possible to run 2 lines of code at the same time in JavaScript. JavaScript is a single-threaded language, which means that it can only execute one line of code at a time. However, it is possible to run 2 lines of code at the same time using asynchronous code."
  },
  {
    q: 'How does a `do...while` loop work in JavaScript?',
    a: "The `do...while` statement creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true."
  },
  {
    q: 'How do you select DOM elements using `querySelector()` and `querySelectorAll()`?',
    a: "For selecting elements in the DOM, the 'querySelector' and 'querySelectorAll' methods are the most commonly used. They are both methods of the document object, and they both accept a CSS selector as an argument.\n\nThe 'querySelector' method returns the first element that matches the specified selector. If no matches are found, it returns null.\n\nThe 'querySelectorAll' method returns a NodeList of elements that match the specified selector. If no matches are found, it returns an empty NodeList."
  },
  {
    q: 'How do you parse JSON in JavaScript?',
    a: "In order to parse JSON, you can use the `JSON.parse()` method. It parses a JSON string and returns the JavaScript equivalent."
  },
  {
    q: 'Is it possible to run JavaScript outside the browser?',
    a: "Yes, it is possible to run JavaScript outside the browser. There are several ways to run JavaScript outside the browser. You can use Node.js, Deno, Bun, or any other JavaScript runtime environment."
  },
  {
    q: 'What is the difference between `var`, `let`, and `const` in JavaScript?',
    a: "In JavaScript, 'var' is function-scoped and was traditionally used to declare variables. 'let' and 'const' are block-scoped. The key difference between 'let' and 'const' is that 'let' allows for reassignment while 'const' creates a read-only reference."
  },
  {
    q: 'How do you enable strict mode in JavaScript?',
    a: "To enable strict mode in JavaScript, you need to add the following line at the top of the file or function: 'use strict';."
  },
  {
    q: 'How do you debug JavaScript code?',
    a: "There are various debugging tools you can use in JavaScript. Here are a few examples:\n\nConsole Logging: You can use 'console.log()', 'console.warn()', 'console.error()', etc., to print values, variables, or messages to the browser's developer console.\n\nBrowser Developer Tools: Most modern browsers come equipped with developer tools. You can access them by pressing F12, typically.\n\nSetting Breakpoints: In the 'Sources' tab of the browser's developer tools, you can click on a line number to set a breakpoint. The code execution will pause at this line, allowing you to inspect variables, the call stack, and continue step-by-step.\n\nThe 'debugger' Statement: Inserting the 'debugger;' statement into your code will act as a breakpoint when the browser developer tools are open. Execution will pause at the 'debugger;' line."
  },
  {
    q: 'What are the different ways to declare a variable in JavaScript?',
    a: "There are three ways to declare a variable in JavaScript 'var', 'let', and 'const'."
  },
  {
    q: 'How do you define multiline strings in JavaScript?',
    a: "In order to define multiline strings in JavaScript, you need to use template literals. Template literals are enclosed by the backtick (` `) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (`${expression}`)."
  },
  {
    q: 'How do you get viewport dimensions in JavaScript?',
    a: "You can use 'window.innerWidth' and 'window.innerHeight' to get the viewport dimensions."
  },
  {
    q: 'What is Increment operator in JavaScript?',
    a: "The increment operator increases the value of a variable by 1. There are two types of increment operators: pre-increment and post-increment.\n\nThe pre-increment operator increases the value of the variable by 1 and then returns the value. (++x;)\n\nThe post-increment operator returns the value of a variable and then increases the value by 1. (x++;)"
  },
  {
    q: 'Is JavaScript a compiled or interpreted language?',
    a: "JavaScript is an interpreted language. This means that the JavaScript code is not compiled before it is executed. Instead, the JavaScript engine interprets the code at runtime."
  },
  {
    q: 'How to create Infinite Loop in JavaScript?',
    a: "You can use the 'while' or 'for' loop to create an infinite loop (while (true) { //do something })."
  },
  {
    q: 'What is JavaScript?',
    a: "JavaScript (often abbreviated as JS) is a high-level, versatile, and widely-used programming language primarily known for its role in web development. It enables interactive and dynamic behavior on websites."
  },
  {
    q: 'What is a Switch case statement in JavaScript?',
    a: "The 'switch' statement evaluates an expression, matching the expression's value to a 'case' clause, and executes statements associated with that 'case', as well as statements in cases that follow the matching case."
  },
  {
    q: 'How do you use `break` and `continue` statements in JavaScript?',
    a: "You can use 'break' and 'continue' in loops to alter the flow of the loop. 'break' will stop the loop from continuing, and 'continue' will skip the current iteration and continue the loop."
  },
  {
    q: 'What is Map in JavaScript?',
    a: "Map is another data structure in JavaScript which is similar to Object but the key can be of any type. It is a collection of elements where each element is stored as a Key, value pair. It is also known as a Hash table or a dictionary.\n\nThe key and value can be of any type. However, the key is unique and immutable, whereas the value can be mutable or immutable."
  },
  {
    q: 'What is the difference betwen `defer` and `async` attributes in JavaScript?',
    a: "The main difference between 'defer' and 'async' is the order of execution.\n\nA <script> element with a 'defer' attribute will continue to load the HTML page and render it while the script is being downloaded. The script is executed after the HTML page has been completely parsed. 'defer' scripts maintain their order in the document.\n\nOn the other hand, a <script> element with an 'async' attribute, will pause the HTML parser and execute the script immediately after it has been downloaded. The HTML parsing will resume after the script has been executed."
  },
  {
    q: 'What is Set in JavaScript?',
    a: "'Set' is a data structure in JavaScript which is similar to an Array but the values are unique. It is a collection of elements where each element is stored as a value without any keys."
  },
]

export const intermediateJs: QnA[] = [
  {
    q: 'Do Arrow functions have their own `this`?',
    a: 'No, arrow functions do not have their own this. Instead, they inherit the this of the enclosing lexical scope.'
  },
  {
    q: 'What are Labelled Statements in JavaScript?',
    a: 'JavaScript label statements are used to prefix a label to an identifier. It can be used with break and continue statements to control the flow more precisely.'
  },
  {
    q: 'What are Scopes in JavaScript?',
    a: 'A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript. Which are Global Scope, Function Scope (Local Scope), and Block Scope.'
  },
  {
    q: 'What are Scopes in JavaScript?',
    a: 'A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript. Which are Global Scope, Function Scope (Local Scope), and Block Scope.'
  },
  {
    q: 'What is Type Casting?',
    a: 'Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types.'
  },
  {
    q: 'What is `preventDefault()` method in JavaScript?',
    a: "The 'event.preventDefault()' method is used to prevent the default action of an event. For example, when you click on a link, the default action is to navigate to the link's URL. But, if you want to prevent the navigation, you can use 'event.preventDefault()' method."
  },
  {
    q: 'What is the difference between `map()` and `forEach()` methods?',
    a: "The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the `forEach()` method executes a provided function once for each array element."
  },
  {
    q: 'How do you accept a variable number of arguments in a JavaScript function?',
    a: "In JavaScript, you can accept a variable number of arguments in a function using the `arguments` object or the rest parameter (...).\n\nThe `arguments` is an array-like object that holds all of the passed arguments. They are only available inside the function body.\n\nThe rest parameter allows you to represent an indefinite number of arguments as an array (...args)."
  },
  {
    q: 'Does the `map()` method mutate the original array?',
    a: "No, the `map()` method does not mutate the original array. It returns a new array with the results of calling a provided function on every element in the calling array."
  },
  {
    q: 'What is the Comma Operator in JavaScript?',
    a: "The Comma Operator , evaluates each of its operands (from left to right) and returns the value of the last operand."
  },
  {
    q: 'What is ternary operator in JavaScript?',
    a: "The ternary operator is a conditional operator that takes three operands. It is frequently used as a shortcut for the if statement."
  },
  {
    q: 'What is the difference between `map()` and `reduce()` methods?',
    a: "The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value."
  },
  {
    q: 'How to use `reduce()` method?',
    a: "You can use the `reduce()` method to reduce an array to a single value. The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.\n\nThis can be used to, for example, add all the numbers in an array of numbers to create a single 'sum' output."
  },
  {
    q: 'How can you merge multiple arrays in JavaScript?',
    a: "You can use the `concat()` method to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.\n\nThe spread operator (...) can also be used to expand an iterable object into the list of arguments."
  },
  {
    q: 'Does `map()` method mutate the original array?',
    a: "No, the `map()` method does not mutate the original array. It returns a new array with the results of calling a provided function on every element in the calling array."
  },
  {
    q: 'How do you use the `filter()` method?',
    a: "You can use the `filter()` method to filter an array based on a condition. The `filter()` method creates a new array with all elements that pass the test implemented by the provided function."
  },
  {
    q: 'How can you find unique values in an array?',
    a: "There are several ways to find unique values in an array. Here are some of them...\n\nYou can use a `Set`, creating a new Set with the array will find only unique values since Sets cannot have identical elements.\n\nYou can use the `filter()` method to ensure that no element is repeated in the new array.\n\nYou can use `reduce()` in a similar fashion to `filter()`."
  },
  {
    q: 'What is the spread operator in JavaScript?',
    a: "The spread operator in JavaScript is represented by three dots (...). It allows the elements of an array or properties of an object to be expanded or 'spread' into individual elements or properties. This can be useful in various contexts, such as when passing elements as function arguments, cloning arrays and objects, or merging arrays and objects."
  },
  {
    q: 'Does `forEach()` method return a new array?',
    a: "No, the 'forEach()' method does not return a new array. It simply calls a provided function on each element in the array."
  },
  {
    q: 'What is Event Capturing in JavaScript?',
    a: "Event capturing is the first phase of event propagation. In this phase, the event is captured by the outermost element and propagated to the inner elements. It is also known as trickling. It is the opposite of event bubbling."
  },
  {
    q: 'Explain `alert()`, `prompt()`, and `confirm()` methods in JavaScript?',
    a: "The 'alert()' method displays an alert box with a specified message and an 'OK' button.\n\nThe 'prompt()' method displays a dialog box that prompts the user for input. A prompt box is often used if you want the user to input a value before entering a page. The 'prompt()' method returns the input value if the user clicks OK. If the user clicks Cancel, the method will return `null`.\n\nThe 'confirm()' method displays a dialog box with a specified message, along with an OK and a Cancel button. This is often used to confirm or verify something from the user."
  },
  {
    q: 'Are references copied in JavaScript?',
    a: "No, references are not copied in JavaScript. When you assign an object to a variable, the variable will contain a reference to the object. If you assign the variable to another variable, the second variable will also contain a reference to the object. If you change the object using one of the variables, the change will be visible using the other variable."
  },
]

export const advancedJs: QnA[] = [
  {
    q: 'How does garbage collection work in JavaScript?',
    a: 'The JavaScript engine uses automatic garbage collection. JavaScript automatically manages memory by freeing up space used by objects no longer needed. This algorithm is called Mark and Sweep, which is performed periodically by the JavaScript engine.'
  },
  {
    q: 'What is the difference between `Promise.all()` and `Promise.allSettled()`?',
    a: 'The core difference between Promise.all() and Promise.allSettled() is that Promise.all() rejects immediately if any of the promises reject whereas Promise.allSettled() waits for all of the promises to settle (either resolve or reject) and then returns the result.'
  },
  {
    q: 'How to handle error in async/await?',
    a: "In order to handle errors in async/await, we can use the 'try/catch' statement.\n\nThe 'catch' block will be executed when an error is thrown inside the 'try' block."
  },
  {
    q: 'What is the difference between `Map` and `WeakMap` in JavaScript?',
    a: "The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Whereas, the `WeakMap` object is a collection of key/value pairs in which the keys are weakly referenced.\n\nYou can use any data type as a key or value in a `Map` whereas in `WeakMap` you can only use objects as keys. The `WeakMap` is not iterable whereas `Map` is. In `WeakMap` it holds the weak reference to the original object which means if there are no other references to an object stored in the `WeakMap`, those objects can be garbage collected."
  },
  {
    q: 'How do you use the `finally` block in a Promise?',
    a: "The `finally` block will be executed when the promise is resolved or rejected."
  },
  {
    q: 'What is the purpose of `async/await` in JavaScript?',
    a: "`async` and `await`, introduced in ES2017, provides a more readable and cleaner way to handle asynchronous operations compared to callbacks and promises. An `async` function always returns a promise, and within such a function, you can use `await` to pause execution until a promise settles."
  },
  {
    q: 'How do you make an Object immutable in JavaScript?',
    a: "To make an object immutable, you can use the `Object.freeze()` method. It prevents the modification of existing property values and prevents the addition of new properties."
  },
  {
    q: 'What is callback hell in JavaScript?',
    a: "Callback hell, sometimes referred to as Pyramid of Doom, describes a situation in JavaScript where multiple nested callbacks become difficult to manage, leading to unreadable and unmaintainable code. It often arises when performing multiple asynchronous operations that depend on the completion of previous operations. The code starts to take on a pyramidal shape due to the nesting.\n\nDevelopers can address or avoid callback hell by using strategies like modularizing the code into named functions, using asynchronous control flow libraries, or leveraging modern JavaScript features like Promises and async/await to write more linear, readable asynchronous code."
  },
  {
    q: 'What is IIFE in JavaScript?',
    a: "The IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.\n\nThe IIFE is frequently used to create a new scope to avoid variable hoisting from within blocks."
  },
  {
    q: 'What is Inheritance in JavaScript?',
    a: "Inheritance is a way to create a new Class from an existing Class. The new Class inherits all the properties and methods from the existing Class. The new Class is called the child Class, and the existing Class is called the parent Class."
  },
  {
    q: 'What is the Prototype Chain in JavaScript?',
    a: "The prototype chain in JavaScript refers to the chain of objects linked by their prototypes. When a property or method is accessed on an object, JavaScript first checks the object itself. If it doesn't find it there, it looks up the property or method in the object's prototype. This process continues, moving up the chain from one prototype to the next, until the property or method is found or the end of the chain is reached (typically the prototype of the base object, which is null). The prototype chain is fundamental to JavaScript's prototypal inheritance model, allowing objects to inherit properties and methods from other objects."
  },
  {
    q: 'What is Event Loop in JavaScript?',
    a: "The Event loop is one the most important aspect to understand in JavaScript. It is the mechanism that allows JavaScript to perform non-blocking operations. It is the reason why we can use asynchronous code in JavaScript. The Event loop is a loop that constantly checks if there are any tasks that need to be executed. If there are, it will execute them. If there are no tasks to execute, it will wait for new tasks to arrive."
  },
  {
    q: 'How do you handle errors in a Promise?',
    a: "In order to handle errors in promises, we can use the 'catch' method or the second argument of the 'then' method.\n\nIn the catch method, you can pass a callback function that will be called when the promise is rejected.\n\nUsing the second argument of 'then', you can pass two callback functions as arguments. The first one will be called when the promise is resolved and the second one will be called when the promise is rejected."
  },
  {
    q: 'What are the Heap and Stack in JavaScript?',
    a: "The Heap and Stack in JavaScript Engine are two different data structures that store data in different ways.\n\nThe stack is a small, organized region of memory. It is where primitive values, function calls, and local variables are stored. It follows a 'Last In, First Out' (LIFO) order, meaning that the last item added to the stack is the first one to be removed. Each function invocation creates a new stack frame, which contains the function's local variables, return address, and other contextual data.\n\nThe heap is a large, mostly unstructured region of memory. It is where objects, arrays, and functions are stored. Variables from the Stack (e.g., in functions) point to locations in the Heap for these dynamically allocated structures.\nWhen you declare a primitive type (like a number or a boolean), it's usually managed in the stack. But when you create an object, array, or function, it's stored in the heap, and the stack will hold a reference to that location in the heap."
  },
  {
    q: 'What is a closure in JavaScript?',
    a: "A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished."
  },
  {
    q: 'What is Explicit binding in JavaScript?',
    a: "Explicit binding is a way to explicitly state what the this keyword is going to be bound to using 'call', 'apply' or 'bind' methods of a function."
  },
  {
    q: 'How can you implement your own Custom Event in JavaScript?',
    a: "You can use the 'CustomEvent' constructor to create a custom event. The 'CustomEvent' constructor accepts two arguments: the event name and an optional object that specifies the event options. And you can use the 'dispatchEvent' method to dispatch the custom event on the target element/document.\n\nYou can listen for custom events using the 'addEventListener' method. The 'addEventListener' method accepts the event name and a callback function that is called when the event is dispatched.\n\nYou can remove event listeners using the 'removeEventListener' method. The 'removeEventListener' method accepts the event name and the callback function that was used to add the event listener."
  },
  {
    q: 'What is a JavaScript promise?',
    a: "A 'Promise' in JavaScript represents a value that may not be available yet but will be at some point. Promises provide a way to handle asynchronous operations, offering methods like .then() and .catch() to register callbacks for success and failure."
  },
  {
    q: 'How does the Event Loop work in JavaScript?',
    a: "The Event Loop has two main components: the Call stack and the Callback queue.\n\nThe Call stack is a data structure that stores the tasks that need to be executed. It is a LIFO data structure, which means that the last task that was added to the Call stack will be the first one to be executed.\n\nThe Callback queue is a data structure that stores the tasks that have been completed and are ready to be executed. It is a FIFO data structure, which means that the first task that was added to the Callback queue will be the first one to be executed.\n\nThe workflow of the Event Loop is as follows:\n\n1. Executes tasks from the Call stack.\n2. For an asynchronous task, such as a timer, it runs in the background. JavaScript proceeds to the next task without waiting.\n3. Once the asynchronous task concludes, its callback function is added to the Callback queue.\n4. If the Call stack is empty and there are tasks in the Callback queue, the Event Loop transfers the first task from the Queue to the Call stack for execution."
  },
]