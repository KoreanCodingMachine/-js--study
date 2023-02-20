// js는 subObject가 superObjcet(prototype object)의 상속을 받는다.  (prototype link -> )

let superObj = { superVal: 'super' };
let subObj = { subVal: 'sub' };

// prototype link를 정해준다.
// subObj의 원형(prototype Object)는 superObj이다.
subObj.__proto__ = superObj;
console.log('subObj.subVal =>', subObj.subVal); // sub

// subObj에 정의된 superVal이 없음으로 그것의 prototype object인 superObject를 찾아간다.
console.log('subObj.superVal =>', subObj.superVal); // super

// prototype 을 바꾸는것이 아님에 주의하자
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal); // super
console.log('subObj.superVal =>', subObj.superVal); // sub

// __proto__ 의 대체제
