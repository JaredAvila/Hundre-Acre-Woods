var arr = [2, 10, 5 , 11, 23, 4, 0, -89, -1, 77];
function bubbleSort(){
    let temp = arr[0];
    while(true){
        let flag = true;
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                flag = false;
            }
            
        }
        if(flag === true){
            document.getElementById("showText").innerHTML = arr;
            return false;
        }
    }
    
}