'use strict';

console.log('Hello World !');
let globalname = 'global name set';
{
    let ii = 5;
    console.log(ii);
    ii = 'i test';
    console.log(ii);
    console.log(globalname);
}

//console.log(ii);
console.log(globalname);


console.log(age);
age = 4;
console.log(age);
var age ;
console.log(age);

const Maxnum = 10;
const Minnum = 1.6;
console.log(Maxnum+Minnum);

// Number  mmmm ;
console.log(`value : ${Maxnum}, type: ${typeof Maxnum}`);
console.log(`value : ${Minnum}, type: ${typeof Minnum}`);


const bigInt = 12345678901234567890n;
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);

// template le
const you = 'Lee Young';
const are = 'hello ' + you;
console.log(`value : ${are}, type: ${typeof are}`); 
const hoo = `hi ${are}!`;
console.log(`value : ${hoo}, type: ${typeof hoo}`);

const yclee7 = { name: 'LEE', mobile: '010-1234-5678', age: 20 };
console.log( yclee7.name );
console.log( yclee7.mobile );
console.log( yclee7.age );

console.log(`이름은 ${yclee7.name} 이고 나이는 ${yclee7.age} 
이며 전화번호는 ${yclee7.mobile} 이다`);

yclee7.name = 'kim';
yclee7.age = 40;
yclee7.mobile = '011-9876-5432';
console.log( yclee7.name );
console.log( yclee7.mobile );
console.log( yclee7.age );

console.log(`이름은 ${yclee7.name} 이고 나이는 ${yclee7.age} 
이며 전화번호는 ${yclee7.mobile} 이다`);






