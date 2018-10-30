var braces = {
    "]": "[",
    "}": "{",
    ")": "("
};
var stack = [];
var opener = "";

function bracesValid(str) {
    for (var i = 0; i < str.length; i++) {  
        if (Object.keys(braces).indexOf(str[i]) == -1) {
            if(Object.values(braces).indexOf(str[i]) == -1) {
                alert("String must only contain braces");
                return;
            }
            stack.push(str[i]);
            continue;
        } else if (stack.length === 0) {
            alert("Not valid!");
            return;
        }
        opener = stack.pop();
        console.log("Does " + opener + "equal " + braces[str[i]] + "?");
        if(opener != braces[str[i]]){
            alert("Closing brace does not equal opening brace. Not valid");
            return;
        }
    }
    if (stack.length !== 0) {
        alert("Array not empty. Not valid");
        return;
    } 
    alert("Its valid! YAY!");
}