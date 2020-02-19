var myFabonacciArray = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];

let arrLength = myFabonacciArray.length;

function binarySearch(myArray, target){
	
}

function bsrc(arr, search){
var toValue = arguments[2] || search.toValue || (f=>f);
search = toValue(search);
for(var x1=0, mid, x2=arr.length; x1 < x2;){
mid = x2+x1-1>>1;
if(toValue(arr[mid]) > search) x2=mid;
else x1=mid+1;
}
return (x1%=arr.length) && toValue(arr[x1-=1])==search ? x1:-1;
}