/* eslint-disable no-plusplus */
/* eslint-disable radix */
export default function luhnAlgorithm(digits) {
    let sum = 0;
    const fixInput = digits.trim().split(' ').join('');
    for (let i = 0; i < fixInput.length; i++) {
        let cardNum = parseInt(fixInput[i]);

        if ((fixInput.length - i) % 2 === 0) {
            cardNum *= 2;

            if (cardNum > 9) {
                cardNum -= 9;
            }
        }

        sum += cardNum;
    }

    return sum % 10 === 0;
}
