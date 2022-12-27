let arr = ['7', 'd', 'h', 'E', '*', 'G', 'm', 'q', 'c', 'i', 'S', '3', 'd', 'п', '?', 'j', 'm', '[', 'щ', '4', ')', '0', '-', 'Л', '1', 'Ч', ';']

const swap = (i, j, tmp = arr[i]) => {
    arr[i] = arr[j]
    arr[j] = tmp
}

for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
        if (arr[i] > arr[j]) swap(i, j)

console.log(arr)