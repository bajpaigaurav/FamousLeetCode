

function reverse (x) {

    if(x < -2147483647 || x > 2147483647 || x === 0) {
        return 0;
    }

    const isNegative = x < 0;

    const absoluteValue = Math.abs(x);
    const len = parseInt(Math.log10(x))+1;


    let final = 0;
    let rem = absoluteValue;

    for(let i = len -1; i >=0; i--) {
        let digit = parseInt(rem / 10**i);
        let multi = 10**(len-1-i);
        final = final + digit*multi;
        rem = rem%10**i;

    }
console.log(final);
}

reverse(123);