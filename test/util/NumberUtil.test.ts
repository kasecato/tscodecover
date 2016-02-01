import * as assert from 'assert';
import {NumberUtil} from '../../src/util/NumberUtil';

suite('NumberUtil Tests', () => {

    test('isPrime', () => {
        // arrange
        const primeList: Array<Prime> = new Array<Prime>();
        primeList.push(new Prime(1, false));
        primeList.push(new Prime(3,  true));
        primeList.push(new Prime(11, true));

        primeList.forEach(p => {
            // act
            const actual: boolean = NumberUtil.isPrime(p.arrange);
            // assert
            assert.equal(actual, p.expected);
        });

    });

    class Prime {
        public arrange: number;
        public expected: boolean;

        constructor(arrange: number, expected: boolean) {
            this.arrange = arrange;
            this.expected = expected;
        }
    }

});
