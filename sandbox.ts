

let age: number = 30; 

console.log(age)

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(5)); 

const ChemMarks: number = 40;
const PhycMarks: number = 50;

const total = ChemMarks + PhycMarks
console.log(total)

let isLovley = true;

isLovley = false;

console.log(isLovley)

//Arrays 
 let languagesk = ['javascript', 'typescript', 'ruby'];

languagesk.push('python')

console.log(languagesk)

//objects 
let detEmployee = {
    name: 'paul',
    age: 26,
    street: 'Entebbe',
    maiden: 'jane'
}
detEmployee.name = 'Omondi'
console.log(detEmployee)

//explicits in functions 

const addItion = (a:number,b:number)=>{
    return a + b 
}
console.log(addItion(3,4))

// explicit type 

type mathCalculation = (a:number, b:number) => number; 

const adds: mathCalculation = (a,b)=> {
    return a+b}; 

console.log(adds(3,2))