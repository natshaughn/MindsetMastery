class Fibonacci {
    constructor() {
        // Where does your sequence start by default? 

        // Initializes the fib seeds
        this.previous = 0;
        this.current = 1;
    }

    // Returns the next Fibonacci number in the current sequence
    next() {
        // Calculate the next fib number
        const next = this.previous + this.current;

        // Move on the sequence
        this.previous = this.current;
        this.current = next;

        // Return the calculated fib number
        return next;
    }

    // Initialize sequence with number to start from
    init(seed) {
        // Reset seeds back to the start
        this.previous = 0;
        this.current = 1;

        // Loop to find the seed
        while (this.current < seed) {
            this.next();
        }

        // Check if a real fib number
        if (this.current != seed) {
            throw new Error('Not a real fib number');
        }
    };

    // Return the Fibonacci number further on in the sequence
    skip(forward) {
       /*
        let next;
        for (let i = 0; i < forward; i++) {
            next = this.next();
        }
        return next; 
        */
        
        for (let i = 0; i < forward; i++) {
            this.next()
        }
        return this.current; 
        
        /*
        for (let i = 0; i < forward; i++) {
            this.next();
        }
        return this.next(); 
        */

        // throw new Error('Skipping forward is not yet supported!');
    }
}

module.exports = Fibonacci;