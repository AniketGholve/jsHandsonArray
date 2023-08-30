let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

let val=studentRecords.reduce((acc,iniVal)=>{if(iniVal.marks>50){
    acc.push(iniVal.name);
}return acc;
},[]);
console.log(val)

let val1 =studentRecords.reduce((acc,iniVal)=>{iniVal.id>120 && (acc+=iniVal.marks); return acc;},0)
console.log(val1)//143

let val2 =studentRecords.reduce((acc,iniVal)=>{
    if(iniVal.marks<50){
        iniVal.marks=iniVal.marks+15;
    }
    if(iniVal.marks>50){
        acc+=iniVal.marks;
    }
    return acc;
},0)
document.getElementById("q7").innerText=val2;

let names=studentRecords.map(val=>val.name.toUpperCase());
let demo=document.getElementsByTagName("q1");
demo[0].innerText=names
let val3=studentRecords.filter(val=>val.marks>50);
let demo1=document.getElementsByTagName("q2");
console.log(val3)
let val4=studentRecords.filter(val=>val.marks>50&& val.id>120 );
let demo2=document.getElementsByTagName("q3");
let val5=studentRecords.reduce((acc, val)=>acc+val.marks,0);
console.log(val5)
let demo3=document.getElementsByTagName("q4");
demo3[0].innerHTML=val5



function Student(name,className,rollno){
    this.name=name;
    this.className=className;
    this.rollno=rollno
}
let student1 = new Student('rohan', '10th', 101);
let student2 = new Student('shubham', '9th', 102);
let student3 = new Student('aniket', '11th', 103);
let student4 = new Student('rohit', '12th', 104);
let student5 = new Student('nikhil', '8th', 105);
let student6 = new Student('anup', '10th', 106);

let studentArr=[student1,student2,student3,student4,student5,student6];
console.log(studentArr)
