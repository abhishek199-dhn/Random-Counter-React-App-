/* eslint-disable no-plusplus */
// @flow

import RandomNumberGenerator from './RandomNumberGenerator';

describe("RandomNumberGenerator Test cases", () => {
    const lowerBound: number = 1;
    const upperBound: number = 10;

    it("RandomNumberGenerator generates random number within given range without crashing", () => {
        const randomNumberGenerator = new RandomNumberGenerator(lowerBound, upperBound);
        let randomNumber: number = -1;
        const number: number = randomNumberGenerator.nextInt();
        if (number >= lowerBound && number <= upperBound) {
            randomNumber = number;
        }
        expect(randomNumber).not.toBe(-1);
    });

    it("RandomNumberGenerator generates non-repeating random number within given range", () => {
        const randomNumberGenerator = new RandomNumberGenerator(lowerBound, upperBound);
        const lookup: Array<number> = [];
        let i;
        for (i = lowerBound; i <= upperBound; i++) {
            const number: number = randomNumberGenerator.nextInt();
            if (lookup.indexOf(number) === -1) {
                lookup.push(number);
            }
        }
        expect(lookup).toHaveLength(upperBound);
    });
});
