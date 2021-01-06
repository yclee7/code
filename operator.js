// 1. String concatenation

console.log('my' + ' cat1');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

const v1 = true ;
const v2 = 4 > 2 ;

console.log(`or : ${v1 || v2 || check()}`);


console.log(`and : ${v1 && v2 && check()}`);

function check()
{
    for (let i = 0 ; i < 10 ; i++) {
        console.log('@');
    }
    return true;
}

//const aa = ( 4, 5) => a + b ;
//console.log(aa );

