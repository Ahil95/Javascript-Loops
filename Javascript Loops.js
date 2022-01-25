for (let i = 1; i <= 6; i++) {

    console.log("Da ba dee da ba daa")
}
for (let n = 100; n >= 10; n -= 10) {

    console.log(n)
}
const Cars = ['Ferrari', 'Benz', 'Minicooper']
for (let n = 0; n < Cars.length; n++) {

    console.log(n, Cars[n])
}
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {

    console.log(people[i].toUpperCase())
}
// const classTable = [
//     ['Anush', 'Monicka', 'Arun'],
//     ['Sheik', 'Ravi', 'Lokesh'],
//     ['Akshaya', 'Ananth', 'Anil', 'Karthick']

// ]
// for (let i = 0; i < classTable.length; i++) {
//     let row = classTable[i];

//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }
let i = 1.5;
while (i <= 10) {
    console.log(i)
    i++;
}

// let input = prompt('Say something');
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "don't copy me") break;

// }
// console.log('You Win')
const loops = ['for', 'while', 'for of']

for (let contents of loops) {

    console.log(contents)
}
const classTable = [
    ['Anush', 'Monicka', 'Arun'],
    ['Sheik', 'Ravi', 'Lokesh'],
    ['Akshaya', 'Ananth', 'Anil', 'Karthick']

]
for (let i of classTable) {
    for (let j of i) {
        console.log(j)
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i of numbers) {

    console.log(i * i);
}
