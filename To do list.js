let input = prompt("Add some target")
const todo = ['gyming', 'attend course']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}:${todo[i]}`)
        }
        console.log('***********')
    }
    else if (input === 'new') {
        const newtodo = prompt("What's new?");
        todo.push(newtodo);
        console.log(`${newtodo},added`)
    }
    else if (input === 'delete') {
        const index = prompt('Enter an index to be deleted')
        const deleted = todo.splice(index, 1)
        console.log(`deleted ${deleted[0]}`)
    }
    input = prompt("Add some target")
}
console.log("Ok you quit!")