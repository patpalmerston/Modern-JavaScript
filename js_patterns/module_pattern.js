// Module Pattern Basic Pattern

// uses an iffy(immediately invoked function or expression)'(function(){})'
// wrap it in parenthesis to make it an expression with an anonymous function
// (function() {
//   // blue print of modulus pattern is to declare private variables and functions up hear (can not access it from out side the module).. public variables / functions in the return

//   return {
//     // in the return we declare public variables or functions

//   }
// })() // double parens immediately invokes the function

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//     // Private - can not access outside of UICtrl
//     let text = 'Hello World';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     };

//     return {
//         // Public - can access private variable and function and be access from outside of UICtrl
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     };
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
// ( ver similar to module patter, but instead of returning public function, you map an object literal to the private variable or functions you want to reveal)
const ItemCtrl = (function() {
    // private
    // sometimes a private variable has an _ 'let _data = []'
    let data = [];

    function add(item) {
        data.push(item);
        console.log('item added......');
    }

    function get(id) {
        return data.find(item => {
            return item.id == id;
        });
    }

    // public - basically revealing the private methods
    return {
        add: add,
        get: get
    };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(1)); // only available because it is disclosed in the return statement
