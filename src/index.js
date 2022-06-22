module.exports = function reverse (n) {
    n=Math.abs(n)
    let str = n.toString(), str_rev='';
    for (let i = str.length-1; i >= 0; i--) {
        str_rev += str[i];
    }
    return +str_rev;
}
