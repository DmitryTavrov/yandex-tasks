class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)

        if (this.root === null) this.root = newNode
        else this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode) {
        if (newNode.data <= node.data)
            if (node.left === null) node.left = newNode
            else this.insertNode(node.left, newNode)
        else
            if (node.right === null) node.right = newNode
            else this.insertNode(node.right, newNode)
    }
}

const BST = new BinarySearchTree(), arr = [34, 23, 29, 12, 19, 39, 38, 40, 9, 13, 7, 25, 8]

for (let i = 0; i < arr.length; i++) BST.insert(arr[i])

const checkNode = (node, res = []) => {
    if (node === null) return res

    if ((node.left !== null && node.right !== null) && (node.left?.data <= node.data && node.right?.data > node.data))
        res.push([true, `Узел: ${node.data} является двоичным деревом поиска`])
    else
        res.push([false, `Узел: ${node.data} не является двоичным деревом поиска`])

    return checkNode(node.left, res) && checkNode(node.right, res)
}

console.log(checkNode(BST.root))