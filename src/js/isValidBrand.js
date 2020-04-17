export default function isValidBrand(input, brands) {
    const number = input.trim().split(' ').join('');
    const brand = brands.filter((obj) => obj.pattern.test(number)
        && obj.lengths.some((lth) => lth === number.length));
    if (!brand.length) {
        return false;
    }
    return brand[0].name;
}
