let currArrUser = +(new Array(prompt('How many variables do you need?', 2)));
let arrUserVar = [0];
for (let i=0; i<currArrUser; i++) {arrUserVar.push(0)}

let userCheck =  prompt('How much do you want to check the distribution?', 1000);

alert(`The number of randoms will be generated ${currArrUser} at ${userCheck} Math.random calls.`);

let varABC = 0;//var for nornalABC

for(let i=0; i<userCheck;i++){
    normalABC(Math.random()*(currArrUser));
}



function normalABC(number) {
    if(number<=varABC){
        arrUserVar[varABC] +=1;
        varABC=0;
        return 0;
    }else {
        varABC++;
        normalABC(number);
    }
}
arrUserVar.shift();
arrUserVar.forEach(a=>console.log(a))
console.log(arrUserVar.length);

//alert(`1: ${a}, 2: ${b}, 3: ${c}`);

