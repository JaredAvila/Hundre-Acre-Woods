function minMaxAvg(arr){
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    let avg = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        } else if (arr[i] > max){
            max = arr[i];
        }
        sum+= arr[i];
    }
    avg = sum/arr.length;
    
    var sentence = "This is a nicely formatted string that contains the Maximum value which is " + max + ", the minimum value, which is " + min + ", and the average of the array, which is " + avg;
    document.getElementById("showText").innerHTML = sentence;
}