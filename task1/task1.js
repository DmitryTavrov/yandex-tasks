const n = 10000000

let arr = [], res = [], limit = Math.sqrt(n)

for (let i = 2; i < n; i++) arr[i] = true

for (let i = 2; i <= limit; i++) if (arr[i]) for (let j = i * i; j < n; j += i) arr[j] = false

for (let i = 2; i < n; i++) if (arr[i]) res.push(i)

console.log(`Количество простых чисел в массиве: ${res.length}`)