const arrs = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6],
    [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [7, 6, 5, 4, 3, 2, 1, 11, 10, 9, 8],
    [1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 10, 11, 2, 3]
]

const maxInArray = (arr) => {
    let max = arr[0], index = 0

    for (let i = 1; i < arr.length; i++)
        if (arr[i] > max) {
            max = arr[i]
            index = i
        }

    return `Максимум находится в позиции ${index} и его значение ${max}`
}

for (let i = 0; i < arrs.length; i++) console.log(maxInArray(arrs[i]))