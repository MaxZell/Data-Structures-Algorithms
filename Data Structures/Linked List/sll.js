//Singly-Linked List
/*
https://dev.to/emmabostian/creating-linked-lists-with-javascript-391e
https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571
https://medium.com/@deniswells59/singly-linked-lists-with-javascript-81859a5a5095
https://learn.javascript.ru/recursion
*/
https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list

//creating of linked list
let list = {
	value: 1,
	next:{
		value:2,
		next:{
			value:3,
			next:null
		}
	}
};

//or
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };

//add new item
list = { value: 4, next: list };

//remove item
list.next = list.next.next;

//show all items with recursion
function printList(list) {
  console.log(list.value);
  
  if (list.next) {
    printList(list.next);
  }
}
printList(list);

//show all items with loop
function printList2(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}
printList2(list);

let mylast = function getLastItem(list){
	while(next != null){
		current = next;
		next = current.next;
	}
	return next;	
};