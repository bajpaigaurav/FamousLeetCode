

function reverse (x) {

    if(x < -2147483647 || x > 2147483647 || x === 0) {
        return 0;
    }

    const isNegative = x < 0;

    const absoluteValue = Math.abs(x);
    const len = parseInt(Math.log10(absoluteValue))+1;


    let final = 0;
    let rem = absoluteValue;

    for(let i = len -1; i >=0; i--) {
        let digit = parseInt(rem / 10**i);
        let multi = 10**(len-1-i);
        final = final + digit*multi;
        rem = rem%10**i;
 
    }
    if(final < -2147483647 || final > 2147483647 || final === 0) {
        return 0;
    }
    return isNegative ? -final : final;
}

console.log(reverse(-123));