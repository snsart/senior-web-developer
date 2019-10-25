### 手写数组所有方法
1. 创建数组
let arr1=[];
let arr2=new Array(5)//创建长度为5的数组
let arr3=new Array(2,3)//创建数组，初始值为2和3

#### 实例方法
1. arr.push(2)
数组尾部插入一个元素，返回插入后数组的长度
2. arr.pop();
从数组尾部弹出一个元素，返回被弹出的值
3. arr.shift();
删除数组头部元素，返回删除的元素
4. arr.unshift(2);
在数组头部插入元素，返回插入后数组的长度
5. arr.tostring();
数组转字符串，逗号分割，返回转换后的字符串
6. arr.join(“*”);
数组转字符串，join函数的参数风格，返回转换后的字符串
7. delete arr[0];
把数组第0个元素改为 undefined
8. arr[arr.length]=2;
在数组结尾追加元素
9. arr.splice(2, 1, "Lemon", "Kiwi");
从数组索引为2的地方开始，删除1个元素，插入Lemon和Kiwi两个元素,返回被删除元素组成的数组
10. newArr=arr1.concat(arr2,arr3);
合并数组，返回合并后的新数组
11. newArr=arr.slice(1,3);
从arr中切出一个新数组，1，3为切割点，含头不含尾
12. arr.reverse();
颠倒数组顺序
13. arr.sort(sortby);
对数组排序

14. arr.forEach((value,index,array)={});
对数组中每个元素调用一次函数,不会更改原数组 
15. newArr=arr.map((value,index,array)=>value*2);
通过对arr中的每个元素执行函数来创建新数组
16. newArr=arr.filter((value,index,array)={})；
返回一个通过函数测试的新数组，函数返回true表示当前元素通过测试
17. let num=arr.reduce((total,value,index,array)=>{},100)；
在每个元素上运行函数，生成一个值，total为默认值(第1个元素)或上次返回的值，reduce的第二个参数为默认值
18. let num=arr.reduceRight((total,value,index,array)=>{},100)；
和reduce作用一样，不过是从右边开始遍历
19. let testAll=arr.every((value, index, array)=>{})
检查是否所有值都能通过函数测试
20. let testSome=arr.some((value, index, array)=>{})
检查是否有值能通过函数测试
21. let testfind=arr.find((value, index, array)=>{})
查找满足函数测试的第一个元素
22. let testfindIndex=arr.findIndex((value, index, array)=>{})
查找满足函数测试的第一个元素的索引
23. let arr.copyWithin(target, start = 0, end = this.length)
将数组内部从start到end(不包含end)的元素复制到target位置，该方法会改变原数组
24. let arr.fill(value,start,end)
将数组start到end的元素填充为value,若start和end省略，则填充所有位置
25. arr.entries()，arr.keys()和arr.values()
上述方法返回遍历器，分别是多键值对的遍历，键的遍历和值的遍历
26. let testValue=arr.includes(value)
查看value是否存在于数组中
27. let newArr=arr.flat()
将一维以上的数组拉平为一维数组，返回拉平后的数组
28. let newArr=arr.flatMap((x) => [x, x * 2])
对原数组执行map，再执行flat，不过只能展开一层

#### 静态方法
1. Array.from({length:5},(value, index, array)=>0)
Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
类似数组的对象指有length属性的对象.第二个参数类似与map函数，对每个元素进行处理，将处理的值放入返回的函数
2. Array.to(1,2,3)
Array.to方法用来将参数转为数组