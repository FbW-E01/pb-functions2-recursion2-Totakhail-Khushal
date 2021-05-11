// # Recursion

// #### Write a function which can reverse string
//     * Write a JavaScript function that reverse a string.
// Sample Data and output:
// Example reverse("hello world")
// Expected Output: dlrow olleh

//     ```javascript
//     const string="hello world"
//     reverse(string)  // return dlrow olleh
// ```


//===============================================================

function reverseString(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;

}
const stringTwo = ("hello world")

const result = reverseString(stringTwo);
console.log(result);
//==================================================

