module.exports = function reverse(n) {
    let str = String(n);
    let arr = str.split("");
    if (arr[0] === "-") {
        arr.shift();
    }
    arr.reverse();
    let result = arr.join("");
    return result;
};

