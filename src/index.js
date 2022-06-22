module.exports = function reverse (n) {
    if(n<0){n*=-1}
    let str = n.toString(), str_rev='';
    for (let i = str.length-1; i >= 0; i--) {
        str_rev += str[i];
    }
    return +str_rev;
}
