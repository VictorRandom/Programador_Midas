
function getRandom(){
    return Math.floor(Math.random() * 10 + 1)
}

let array = [];
for (let i = 0 ; i < 10 ; i++){
  array.push(getRandom(1,10));
}


let sorted_arr = array.slice().sort();
let soma = 0;


var frequency = {};  
var max = 0;  
var result;   
for(var num in array) {
        frequency[array[num]]=(frequency[array[num]] || 0)+1; 
        if(frequency[array[num]] > max) { 
                max = frequency[array[num]];  
                result = array[num];          
        }
}

console.log("Array sorteado = " + array);
console.log("O número que mais se repete é o " + result);
console.log("Ele se repete " + max + " vezes");


