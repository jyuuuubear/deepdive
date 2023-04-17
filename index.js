// 식별자가 먼저 실행된다고 했는데 그럼 할당과 동시에 값을 생성해야하는 변수는?

console.log(sum); //undefined
var sum = 10 + 20;
console.log(sum); //30

// 실행결과 값을 생성하는게 먼저 
var add = 1;

console.log(sum);