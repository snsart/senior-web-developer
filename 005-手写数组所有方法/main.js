let arr=[1,2,3,4,5,6];
let deletes=arr.splice(2,2,100,200);
console.log(arr);//[1,2,100,200,5,6]
console.log(deletes);//[3,4]

arr=[1,2,3,4,5,6];
let newArr=[];
arr.forEach((value,index)=>{
    newArr.push(value*index);
})
console.log(newArr);//[0, 2, 6, 12, 20, 30]

newArr=arr.filter((value)=>value%2==0);
console.log(newArr);[2,4,6]

let num=arr.reduce((total,value)=>total+value);//数组求和
console.log(num)//21

let testAll=arr.every((value)=>value>3);//检查是否所有元素都大于3
console.log(testAll)//false

let testSome=arr.some((value)=>value>3);//检查是否有元素大于3
console.log(testSome)//true

let testFind=arr.find((value)=>value>3);//查找大于3的第一个元素
console.log(testFind)//4