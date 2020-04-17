import luhnAlgorithm from '../isValidNumber';

test.each([
    ['true card number', '4561 2612 1234 5467', true],
    ['false card number', '999', false],
])(('it should be %s'), (_, input, expected) => {
    expect(luhnAlgorithm(input)).toBe(expected);
});
