// 1 
const arr = []

// 2
const arr1 = [1, 2, 3, 4, 5] 

// 3
console.log(arr1.length) 

// 4
console.log(arr1[0], arr1[2], arr1[4]) 

// 5
const mixedDataTypes = ['test1', 5, 'test2', 5, 'test3', 4, 'test4', 5] 
console.log(mixedDataTypes.length) 

// 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7
console.log(itCompanies)

// 8
console.log(itCompanies.length)

// 9
console.log(itCompanies[0], itCompanies[3], itCompanies[6])

// 10
itCompanies.forEach(element => {
    console.log(element)
})

// 11
itCompanies.forEach(element => {
    console.log(element.toUpperCase())
})

// 12
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`)

// 13
console.log(itCompanies.includes('Facebook'))

// 14
itCompanies.forEach(element => {
    if(element.includes('o')) {
        console.log(element)
    }
})

// 15
console.log(itCompanies.sort())

// 16
console.log(itCompanies.reverse())

// 17
console.log(itCompanies.slice(0, 3))

// 18
console.log(itCompanies.slice(4))

// 19
console.log(itCompanies[3])

// 20
itCompanies.splice(0, 1)

// 21
itCompanies.splice(3, 1)

// 22
itCompanies.splice(6, 1)

// 23
itCompanies.splice(0)
