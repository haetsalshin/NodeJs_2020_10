console.log("안녕", "반가워유~");
console.log("3 + 4 =", 3 + 4);

var num1;
let num2;
const num3 = 100;

num1 = 30;
num2 = 40;
// myfunc 객체(이자 메서드)에게 1000이라는 값을 넣어주고
// 그 결과를 보여줘라
const myfunc = function (num1) {
  console.log(num1);
};
myfunc(1000);
myfunc();

const callfunc = function (call) {
  call(2000);
};
// facade 패턴
// 함수를 다른 함수의 매개변수로 전달하여
// 함수 내부에서 실행하도록 하는 패턴
callfunc(myfunc);

// 변수 : 1개의 값을 저장하는 공간
// 배열, JSON 객체 : 1개 이상의 값을 저장하고 활용하는 메모리 구조형

// 배열선언하기
// 배열은 같은 종류의 데이터들을 저장할 때 주로 사용한다.
// 다른 type(숫자, 문자열)의 데이터를 저장할 수 있지만
// 일반적으로 그렇게 사용하지 않는다
let 이름 = ["김윤아", "배수지", "아이유"];
console.log(이름[0]);
// JSON 객체
// key : value 쌍으로 이루어진 종류가 다른 데이터들을 저장할 때 사용한다
// 다수의 데이터를 저장하는 용도로 아주 많이 사용하는 타입이다.
let car = { 이름: "그랜져", 엔진: "알파" };
console.log(car["이름"]);

// 이름 배열에 장보고 데이터를 추가하고 싶다
// 전통적인 방법
이름.push("장기용");
console.log(이름);

이름 = [...이름, "크러쉬"];

// JSON객체의 어떤 요소 값을 변경하고 싶을 때
// 과거 방식
car["엔진"] = "베타";
// 전개연산자 이용
// car라는 요소들을 펼쳐놓고 엔진이라는 요소가 있으면 베타로바꾸고
car = { ...car, 엔진: "베타" };
// 색깔이라는 요소가 있으면 흰색으로 바꿔라.
// 없으면 새로 만들어라
car = { ...car, 색깔: "흰색" };
car = console.log(car);
