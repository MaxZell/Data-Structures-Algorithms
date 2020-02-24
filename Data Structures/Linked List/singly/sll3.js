//https://tproger.ru/translations/introduction-to-linked-lists/
//https://tproger.ru/translations/linked-list-for-beginners/
class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

let item1 = new Node('item1')
let item2 = new Node('item2', item1)
let item3 = new Node('item2', item1)
let item4 = new Node('item3', item2)
let item5 = new Node('item4', item3)