// "use strict";

// `"use strict";` is a directive in JavaScript that activates **strict mode**, a restricted variant of JavaScript. It was introduced in ECMAScript 5 (ES5) to make code safer and reduce potential bugs.

// ### Effects of `"use strict";`

// 1. **Eliminates some silent errors**:
//    - Without strict mode, certain errors fail silently. In strict mode, these throw exceptions.
//      ```javascript
//      // Without strict mode
//      x = 10; // This creates a global variable implicitly.

//      // With strict mode
//      "use strict";
//      x = 10; // Throws ReferenceError: x is not defined.
//      ```

// 2. **Disallows certain syntax**:
//    - Strict mode forbids the use of some syntax that is considered error-prone or ambiguous.
//      ```javascript
//      "use strict";
//      delete Object.prototype; // SyntaxError: Cannot delete property 'prototype'
//      ```

// 3. **Prevents using reserved keywords**:
//    - Reserved words for future versions of JavaScript cannot be used as variable names.
//      ```javascript
//      "use strict";
//      let public = 123; // SyntaxError: Unexpected strict mode reserved word
//      ```

// 4. **Avoids accidental global variables**:
//    - Assigning a value to an undeclared variable will throw an error.
//      ```javascript
//      "use strict";
//      myVar = 5; // ReferenceError: myVar is not defined
//      ```

// 5. **Disallows duplicate parameter names**:
//    - Strict mode disallows duplicate parameter names in functions.
//      ```javascript
//      "use strict";
//      function sum(a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
//        return a + a;
//      }
//      ```

// 6. **Prevents `this` from defaulting to `window` in functions**:
//    - In strict mode, `this` inside a function is `undefined` if the function is called without an explicit context.
//      ```javascript
//      "use strict";
//      function showThis() {
//        console.log(this); // undefined
//      }
//      showThis();
//      ```

// ### How to Enable Strict Mode
// - **Globally**: Add `"use strict";` at the top of a script.
//   ```javascript
//   "use strict";
//   // Entire script runs in strict mode
//   ```

// - **In Functions**: Use `"use strict";` inside a function to enable strict mode only within that function.
//   ```javascript
//   function myFunction() {
//     "use strict";
//     // Only this function runs in strict mode
//   }
//   ```

// ### Why Use Strict Mode?
// - It makes debugging easier by catching more errors.
// - It avoids accidental global variable creation.
// - It ensures safer and more predictable behavior in your code.