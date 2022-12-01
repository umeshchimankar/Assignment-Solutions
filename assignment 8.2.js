//given a number x, find out if it is a prime nymber or not, use javascript and find out the difference between next prime number after x and x

const num = 4;
const isPrime = (num) => {
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num !== 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        };
    };
    return prime;
}
const nextPrime = (num = 1) => {
    while (!isPrime(++num)) {
    };
    return num;
};

const nextPrimeNo = nextPrime(num);

console.log(`${nextPrimeNo} is a Next Prime number`);

const difference = num > nextPrimeNo ? num - nextPrimeNo : nextPrimeNo - num;

console.log(`${(difference)} is a Difference of number ${(num)} and ${(nextPrimeNo)}`);
