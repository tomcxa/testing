import isValidBrand from '../isValidBrand';
import brands from '../brandsList';

test.each([
    ['false brand', '12345', false],
    ['brand name', '4561 2612 1234 5467', 'Visa'],
])(('it should be %s'), (_, input, expected) => {
    expect(isValidBrand(input, brands)).toBe(expected);
});
