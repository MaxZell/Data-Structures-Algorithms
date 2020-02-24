//https://learn.javascript.ru/function-prototype
//https://www.internet-technologies.ru/articles/strukturirovanie-dannyh-s-pomoschyu-javascript-spiski.html

//node constructor
function Node(data) {
    this.data = data;
    this.next = null;
}
//single linked list
function SinglyList() {
    this._length = 0;
    this.head = null;
}

//add method
SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    // 1 if list is empty
    if (!currentNode) {
        this.head = node;
        this._length++;
        return node;
    }

    // 2 if no
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return node;
};

//search
SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1-ый случай: неверная позиция 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: верная позиция 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

//remove
SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1-ый случай: неверная позиция
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: первый узел удален
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // 3-ий: все прочие узлы удалены
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};