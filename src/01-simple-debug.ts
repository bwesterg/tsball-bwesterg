console.log('Simple debugging example running.')

function double(someNumbers: number[]): number[] {
    return someNumbers.map(someNumber => {
        return someNumber * 2
    })
}

double([1, 2, 3])