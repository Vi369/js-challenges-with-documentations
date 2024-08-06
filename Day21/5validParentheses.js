/**
 * Activity: 5 Valid Parentheses
 * Task: 5: solve the valid parentheses problem 
 * Write a function that takes a string containing just the (){}[] and determisnes if the input string is valid
 * a string is valid if open bracket are closed in the correct order
 * log the result for a few test cases
 */

function validParenthese(str){
    if (!str) {
        return "Provide a valid string.";
    }

    if (str[0] === ")" || str[0] === "]" || str[0] === "}") {
        return false;
    }

    const map = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    let stack = [];

    for (const char of str) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            let popout = stack.pop();
            if (map[popout] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log("Valid Or Not:" ,validParenthese("")); // message 
console.log("Valid Or Not:" ,validParenthese("))")); // message 
console.log("Valid Or Not:" ,validParenthese("(())")); // true
console.log("Valid Or Not:" ,validParenthese("(({{[[]]}}))")); // true