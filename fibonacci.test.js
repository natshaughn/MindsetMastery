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

test('Call next once to see if it returns 1', () => {
    // fibonacci.next();
    expect(fibonacci.next()).toBe(1);
});

test('Fibby seq to see if 3 next calls equal right num', () => {
    fibonacci.next();
    fibonacci.next();
    fibonacci.next();
    expect(fibonacci.next()).toBe(5);
});

test('When skip is called it should move forward and return the number further down in fibby sequence', () => {
    fibonacci.init(2);
    expect(fibonacci.skip(3)).toBe(8);
});

test('When a high number initialized, the right next number should be returned', () => {
    fibonacci.init(2584);
    expect(fibonacci.next()).toBe(4181);
});

test('When initialized with number in fibby seq it should not throw error', () => {
    fibonacci.init(5)
    expect(fibonacci.previous).toBe(3);
});

// Negative tests
// Jest Example 
// test('throws on octopus', () => {
//     expect(() => {
//       drinkFlavor('octopus');
//     }).toThrow();
//   });

test('throws on 7 as it is not a fibby num', () => {
    expect(() => {
        fibonacci.init(7);
    }).toThrow();
});

test('throws on -1 skip as it is a go forward function', () => {
    fibonacci.init(5);
    expect(() => {
        fibonacci.skip(-1);
    }).toThrow();
});

test('throws on "one" as it is a string', () => {
    expect(() => {
        fibonacci.init('one');
    }).toThrow();
});

test('throw on two numbers in same bracket', () => {
    expect(() => {
        fibonacci.init(5, 8);
    }).toThrow();
}); 

test('throw on -1 in init seed', () => {
    expect(() => {
        fibonacci.init(-1);
    }).toThrow();
});





