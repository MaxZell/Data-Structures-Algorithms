function addToQuene(arr, item){
	arr.push(item);
	console.log(arr);
}

function removeFromQuene(arr){
	arr.shift();
	console.log(arr);
}

// var queue = [];
// queue.push(2);         // queue is now [2]
// queue.push(5);         // queue is now [2, 5]
// var i = queue.shift(); // queue is now [5]
// alert(i);              // displays 2