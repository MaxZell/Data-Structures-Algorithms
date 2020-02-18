//Arrays
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
//new array
var myArray = ["item1", "item2", 3];
//print array length
console.log(myArray.length);
//add new item to array to the front
myArray.unshift("item0");
//add new item to array to the end
myArray.push("item4");
//print item from array plaiced on 4, will print item4
console.log(myArray[4]);
//remove item from front
myArray.shift();
//remove item from end
myArray.pop();
//remove 1 item by position 0, will remove item1
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
myArray.splice(0, 1);
//loop array, will print all items with their indexes(position)
myArray.forEach(function(item, index, array) {
  console.log(item, index);
})