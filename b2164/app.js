const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// LinkedList 클래스 설정
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.size++;

        return newNode;
    }

    getHead() {
        return this.head.val;
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
    }

    getSize() {
        return this.size;
    }
}

const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
    cards.push(i);
}

while (cards.getSize() !== 1) { // getSize 가 0 이 아니라면.
    cards.removeHead(); // 맨 앞 노드를 지우고
    cards.push(cards.getHead()); // 맨 앞 노드를 맨뒤로 붙이고
    cards.removeHead(); // 다시 맨 앞 노드를 지우고
}
console.log(cards.getHead());