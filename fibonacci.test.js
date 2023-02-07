const Fibonacci = require('./fibonacci');

let fibonacci;

// Jest framework has built in function beforeEach()
// that says run the function declared before each test
beforeEach(() => {
    fibonacci = new Fibonacci();
});

// Positive tests
test('When initialized the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.next()).toBe(13);
});

test('When initialized the next number should be returned in the sequence', () => {
    fibonacci.next();
    expect(fibonacci.init(2)).toBe(3);
});

test('When skip is initialized it should move forward and return the number further down', () => {
    fibonacci.init(2);
    expect(fibonacci.skip(3)).toBe(8);
});

test('When a high number initialized, the right next number should be returned', () => {
    fibonacci.init(2584);
    expect(fibonacci.next())
})

// Negative tests
// Jest Example 
// test('throws on octopus', () => {
//     expect(() => {
//       drinkFlavor('octopus');
//     }).toThrow();
//   });

test('throws on 7', () => {
    expect(() => {
        fibonacci.init(7);
    }).toThrow();
});





