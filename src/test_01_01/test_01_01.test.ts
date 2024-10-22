//data

import {mult, sum} from "./test_01_01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test("sum should be correct", () => {

    //action
    const result = sum(a, b)
    const result2 = sum(c, b)

    //expect
     expect(result).toBe(3)
     expect(result2).toBe(5)



})

test("multiply should be correct", () => {

    //action
    const result = mult(a, b)

    //expect
     expect(result).toBe(2)

})