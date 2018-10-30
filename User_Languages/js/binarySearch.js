function binarySearch(arr, val){
    var num = 0;
    var tempArr = [];
    if(arr.length === 0){
        alert("-1");
        return -1;
    }
    while(true){
        if(arr.length === 1){
            if(val==arr[0]){
                alert(num);
                return num;
            } else{
                alert("-1");
                return -1;
            }
        }
        if(val == arr[Math.floor(arr.length/2)]){
            alert(Math.floor(arr.length/2));
            return Math.floor(arr.length/2);
        } else if (val > arr[Math.floor(arr.length/2)]){
            num += Math.floor(arr.length/2);
            tempArr = arr.slice(Math.floor(arr.length/2) + 1);
        } else{
            tempArr = arr.slice(0, Math.floor(arr.length/2) - 1);
        }
        alert("this is the end");
        return false;
    }
}