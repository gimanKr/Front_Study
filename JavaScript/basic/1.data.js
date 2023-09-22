console.log("Hello World");
console.log("Hello","World");
// 주석을 작성하는 첫번째 방법

console.log("안녕"); //안녕을 출력

/**
 *  이렇게 작성하면
 *  여러줄을 한번에 주석처리 할 수
 *  있습니다.
 */


/**
 * Variable 선언
 * 
 * 1) var - 사용하지 않는다.
 * 2) let 
 * 3) const 
 * 
 */

var name = "김기만";

console.log(name);

var age = 55;
console.log(age);

var pi = 3.14;
console.log(pi);

var name = "김아무개";
console.log(name);
/**
 * let은 var에서 같은이름의 중복생성을 하지 못하게 만든 자료형이다.
 * 다만 let과 var는 모두 값을 변경하는 것은 가능하다.
 */

let name2 = "김기만";
console.log(name2);
name2 = "김떙땡";
console.log(name2);

/**
 * const는 상수를 표현하기위한 자료형
 * 값을 변경할 수 없다.
 */
const name3 = "김기만";
console.log(name2);
name3 = "김떙땡"; //불가

/**
 * Naming
 * 
 * 변수 이름 지을때
 * 1) 일반적으로 영어를 사용하며 문자와 숫자 모두 사용할 수 있다.
 * 2) 특수문자는 _ 와 $ 를 사용할수 있다.
 * 3) 숫자로 이름을 시작할 수 없다.
 *    1004jiwon  =>  x 안됨.
 * 4) 키워드를 변수명으로 사용할 수 없다.
 *    var, let 등등
 */

let $name = '지원';
let _name = "지원2";

/**
 * Naming Type
 * 
 * 1) camelCase => 대부분의 언어에서 많이 사용
 * 2) snake_case => 파이썬에서 주로 사용하며 단어의 시작마다 _로 구분해준다.
 * 3) PascalCase => c#및 ms계열의 언어에서 많이 사용하며 매단어 시작은 무조건 대문자로 한다.
 */

/**
 * Data Types
 * 
 * 여섯개의 원시타입과 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *      Function
 *      Array
 *      Object 
 */

// Number 타입

const age = 55;
const tempature  = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);

// String 타입

const names = "김기만'님'";
console.log(names);
console.log(typeof names);

/**
 * 1) newline => \n
 * 2) tab => \t
 * 3) \ => \\
 */

const str = "안녕하세요 저는 김기만 입니다.\n \t 나이는 비밀";
console.log(str);

const name = "김기만";
console.log('안녕하세요 ${name}입니다');

// Boolean 타입
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 * 
 * 개발자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 * 
 * undefined를 직접 넣어주는 것은 지양해야한다.
 */

let num = undefined;
let num2;
console.log(num);
console.log(num2);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이다.
 * 다만 js에서는 개발자가 명시적으로 없는 값을 초기화할때
 * null을 사용한다.
 */

let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때
 * 다른 원시값들과 다르게 Symbol함수를
 * 호출해서 사용한다.
 */

const tmp1 = '1';
const tmp2 = 1;

console.log(tmp1==tmp2); //값이 같니?
console.log(tmp1===tmp2); //값이랑 타입까지 같니?

const Symbol1 = Symbol('1');
const Symbol2 = Symbol('1');
console.log(Symbol1==Symbol2);
console.log(Symbol1===Symbol2); // ??이해못함ㅎ

/**
 * Object 타입
 * 
 * Map
 * 키 : 벨류 쌍으로 이루어져있다.
 * key : value
 */

const dictionary = {
    red : "빨간색",
    orange : "주황색",
    yellow : "노란색"
}

console.log(typeof dictionary);
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary.yellow);

const humna ={
    name:"기만",
    age:15
}
console.log(humna.name);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는타입
 */

const arr = ["빨강","주황","노랑","초록"];
console.log(arr);
console.log(arr.push("검은색"));
console.log(arr);
console.log(arr.length);

/**
 * index
 * 
 * 0부터 시작한다.
 * 1씩 올라간다.
 */

console.log(arr[0]);
console.log(arr[4]);
arr[0] = 12;
console.log(arr);


























