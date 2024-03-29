class Queue<T> {
    list: T[] = [];
    get length(){
        return this.list.length
    }
    enqueue(item: T){
        this.list.push(item)
    }
    dequeue(){
        return this.list.shift()
        // shift()는 배열의 첫번째 원소를 제거하는 메소드임
    }
}

const queue = new Queue<number>();
queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());



