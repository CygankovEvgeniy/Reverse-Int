module.exports = function reverse (n) {
    let Number = String(Math.abs(n));
    let reverseNumber = Number.split('').reverse().join('');
    return reverseNumber;
}