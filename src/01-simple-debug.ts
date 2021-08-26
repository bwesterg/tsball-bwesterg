import { map } from "lodash/fp"

console.log('Simple debugging example running.')

type THIS_IS_DUMB_REFACTOR_ME = any

const doubledStuff = map((x: number) => {
    return x * 2
})([2])

function double(someNumbers: number[]): number[] {
    return someNumbers.map(someNumber => {
        return someNumber * 2
    })
}

double([1, 2, 3])