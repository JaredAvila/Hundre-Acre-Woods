function fizzBuzz(n) {
    var arr = [];
    var num = parseInt(n);
    if(Number.isInteger(num) == false){
        alert("Only positive numbers please.");
        return;
    }
    if (num < 0) {
        alert("Only positive numbers please.");
        return;
    }
    for (i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            arr.push("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }
    alert(arr);
}