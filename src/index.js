module.exports = function toReadable(number) {
    const NUMBERS_IN_WORDS = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    if (number <= 20) {
        return NUMBERS_IN_WORDS[number];
    }
    if (number > 20 && number < 100 && Number(String(number)[1])) {

        return `${NUMBERS_IN_WORDS[String(number)[0] * 10]} ${NUMBERS_IN_WORDS[String(number)[1]]}`;
    }
    if (Number(String(number)[1] + String(number)[2]) < 20) {

        if (Number(String(number)[1] + String(number)[2])) {

            return `${NUMBERS_IN_WORDS[String(number)[0]]} hundred ${NUMBERS_IN_WORDS[Number(String(number)[1] + String(number)[2])]}`;
        }
        return `${NUMBERS_IN_WORDS[String(number)[0]]} hundred`;
    }

    if (String(number)[1] !== '0' && String(number)[2] === '0') {
        return `${NUMBERS_IN_WORDS[String(number)[0]]} hundred ${NUMBERS_IN_WORDS[String(number)[1]* 10]}`;
    }

    if (String(number)[1] !== '0' && String(number)[2] !== '0') {
        return `${NUMBERS_IN_WORDS[String(number)[0]]} hundred ${NUMBERS_IN_WORDS[String(number)[1]* 10]} ${NUMBERS_IN_WORDS[String(number)[2]]}`;
    }
    return NUMBERS_IN_WORDS[number];
}