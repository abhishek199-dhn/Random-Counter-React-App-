/* eslint-disable no-plusplus */

// @flow

/**
 * @description
 * Non repeating random number generator. It Generates random number within given range
 * and inclusive of both the bound limits.
 */

class RandomNumberGenerator {
    currentPointer: number;
    tracker: Array<number>;
    isDone: boolean;

    /**
     *
     * @param minNumber lower bound
     * @param maxNumber upper bound
     */
    constructor(minNumber: number, maxNumber: number) {
        this.currentPointer = maxNumber;
        this.tracker = [];
        this.isDone = false;

        let i = minNumber || 1;

        // Generates array containing numbers from min to max.
        for (i; i <= maxNumber; i++) {
            this.tracker.push(i);
        }
    }

    /**
     * Generates non repeating random number and mark isDone flag as true once
     * all the number within given range are generated.
     *
     * @return {number}
     */
    nextInt = (): number => {
        if (this.tracker && Array.isArray(this.tracker)) {
            if (!this.isDone) {
                let randomNumber: number = 0;
                let upperBound: number = this.currentPointer;
                const randomIndex: number = Math.floor((Math.random() * upperBound));
                upperBound--;

                // swap or shift the random number to upperBond i.e to higher extent of array.
                randomNumber = this.tracker[randomIndex];
                this.tracker[randomIndex] = this.tracker[upperBound];
                this.tracker[upperBound] = randomNumber;

                // move the current pointer to upperBound as the
                // number after upperBound are of no use.
                this.currentPointer = upperBound;

                // mark isDone as true when all the numbers are gen.
                if (upperBound === 0) {
                    this.isDone = true;
                }
                return randomNumber;
            }
            // no more numbers to generate.
            throw Error("No non-repeating random number available.");
        }
        throw Error("RandomNumberGenerator Not initialised.");
    };
}

export default RandomNumberGenerator;
