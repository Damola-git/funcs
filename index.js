function add7(number){
    return number + 7;
}
console.log(add7(50));//*output is 57

function multiply(a,b){
    return a*b;
}
console.log(multiply(10,10)); //*output is 100

function Capitalise(sentence) {
    return sentence.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

console.log(Capitalise("hEllO lOve"));// Output: Hello Love

function lastLetter(str) {
    return str[str.length - 1];
}

console.log(lastLetter("abcd"));  // Output: "d"
