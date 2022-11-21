//fazer as variáveis A e B trocarem entre si

let a = 7;
let b = 94;

//solução minha

let a_novo = b;
let b_novo = a;

a = a_novo;
b = b_novo;

//depois da troca.. a = 94, b = 7
console.log("A = "+a);
console.log("B = "+b);

//outra forma
console.log("");

let c = 7;
let d = 94;

[c, d] = [d, c]

//depois da troca.. c = 94, d = 7
console.log("C = "+c);
console.log("D = "+d);