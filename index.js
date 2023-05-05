const steps = [
    {id: 1, action: 'START', next_step_id: 3},
    {id: 3, action: 'BOIRE', next_step_id: 2},
    {id: 2, action: 'DORMIR', next_step_id: 5},
    {id: 5, action: 'TRAVAILLER', next_step_id: 4},
    {id: 4, action: 'JOUER', next_step_id: 9},
    {id: 6, action: 'VOYAGER', next_step_id: 7},
    {id: 7, action: 'TERMINER', next_step_id: null},
    {id: 9, action: 'TELEPHONER', next_step_id: 6}
]

function searchData(steps) {
    const list = new LinkedList();
    return list.loadDataArray(steps).print()
}

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        if (!value)
            return this
        const newNode = new LinkedListNode(value, this.head)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        return this
    }

    loadDataArray(data) {
        let nextValueId = null
        while (data.length) {
            const [newValue] = data.splice(data.findIndex(({ next_step_id }) => next_step_id === nextValueId), 1)
            this.append(newValue)
            nextValueId = newValue.id
        }
        return this
    }

    print() {
        let currentNode = this.head
        const returnedValue = []
        while (currentNode) {
            returnedValue.push(currentNode.value)
            currentNode = currentNode.next
        }
        return returnedValue
    }
}

const result = searchData(steps);
console.log(result);