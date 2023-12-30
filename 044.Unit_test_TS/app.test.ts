import { isPalindrome, calculateFactorial, capitalizeString, StringArray } from './app';

describe('test is palindrom function', () => {
    test('return success', () => {
        const res = isPalindrome('anna');
        expect(res).toBeTruthy();
    });

    test('return error', () => {
        const res = isPalindrome('');
        expect(res).toBe('word is empty');
    });

    test('return error', () => {
        const res = isPalindrome(123);
        expect(res).toBe('word must be a string');
    });
});

describe('test calculator function', () => {
    test('to be success', () => {
        const res = calculateFactorial(3);
        expect(res).toBe(6);
    });

    test('return error', () => {
        const res = calculateFactorial('');
        expect(res).toBe('empty');
    });

    test('return error', () => {
        const res = calculateFactorial('one');
        expect(res).toBe('must be a number')
    })
});

describe('test function capitalizeStr', () => {
    test('to be success', () => {
        const res = capitalizeString('hello arina');
        expect(res).toBe('HelloArina')
    })

    test('return error', () => {
        const res = capitalizeString('');
        expect(res).toBe('empty');
    });

    test('return error', () => {
        const res = capitalizeString(123);
        expect(res).toBe('str must be string')
    });
});

describe('test stringArray class', () => {
    test('test getLongest function', () => {
        const stringArray = new StringArray();
        const res = stringArray.getLongestWord();
        expect(res).toBe('hello');
    });

    test('test getUniqueWords function',()=>{
        const stringArray=new StringArray();
        const res=stringArray.getUniqueWords();
        expect(res).toEqual(['hi','hello']);
    });
})