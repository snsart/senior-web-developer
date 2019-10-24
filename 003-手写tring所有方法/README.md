### 手写string所有方法
1. s.charAt(i)
return char

2. s.indexOf(str,index),s.lastIndexOf(str,index);
字符串str在字符串中的索引,从index开始,index默认为0

3. s.substr(start,len)
返回子字符串，start子字符串起始位置，len字符串长度

4. s.slice(start,end)
返回start到end的字符串片段，含start不含end，start或end为负数表示从后面

5. s.subString(start,end)和slice一样，区别是参数不能为负

6. s.replace(a,b)
用b替换掉s中的a，a可为正则表达式，返回新的字符串

7. s.concat(a,b,...)
s和a,b,...拼接，返回新的字符串

8. s.trim()
去掉字符串两端空格

9. s.split()
字符串转为数组

10. s.search(str)
搜索字符串,str可为正则表达式
