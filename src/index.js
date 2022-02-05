module.exports = function reverse (n) {
    let numberAbsoluteValue = Math.abs (n);
    let numberSting = numberAbsoluteValue.toString();
    let result = '';
    let numberLength = numberSting.length;
    let i = 0;
    while (i < numberLength) {
        result = numberSting[i] + result;
        i = i + 1;
    }
    return result;
}
