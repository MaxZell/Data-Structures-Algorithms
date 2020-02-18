function bubbleSort(arr){
	var arr_len = arr.length;
	for (var i = 0; i < arr_len ; i++) {
        for(var j = 0 ; j < arr_len - i - 1; j++){
        if (arr[j] > arr[j + 1]) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
}

// console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1]));
let myArr = [3, 0, 2, 5, -1, 4, 1];
console.log(bubbleSort(myArr));