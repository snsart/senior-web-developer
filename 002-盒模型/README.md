### 盒模型常见问题及解释

#### 基本概念：标准模型+IE模型
盒模型从内而外包括:content padding border margin

#### 标准模型和IE模型的区别
* 标准模型的宽高计算只包括content
* IE模型的宽高计算包括content padding及border

#### CSS如何设置这两种模型
* box-sizing:content-box 标准模型
* box-sizing:border-box IE模型

#### JS如何设置获取盒模型对应的宽和高
1. dom.style.width/height(只能取内联样式的宽和高)
2. dom.currentStyle.width/height（只有IE支持）
3. windom.getComputedStyle(dom).width/height
4. dom.getBoundingClientRect().width/height/top/left（可取元素的绝对位置和宽高）

#### 根据盒模型解释边距重叠
示例：父元素包含一个子元素，子元素高100px，margint-top为10px，问父元素高度。分两种情况：
1. 父元素默认为100px，因为会发生边距折叠
2. 当父元素为BFC时，父元素高度为110px
边距重叠发生的情况:
子父级
兄弟元素取两元素边距最大值折叠
空元素取上下边距的最大值折叠

#### BFC(边距重叠解决方案)
BFC为块级格式化上下文
##### BFC原理:
1. BFC垂直方向的边距会发生重叠
2. BFC区域不会与浮动元素的box重叠（清除浮动）
3. BFC在页面上是一个独立的容器，里外元素不会互相影响（无父子边距折叠）
4. 计算BFC高度时，内部的浮动元素也会参与计算
##### 如何创建BFC
1. float值不为none
2. position值不为static或relative
3. display设为flex或table及相关属性(table-cell,table-row等)
4. overflow不为visible，比如设置:overflow:auto,overflow:hidden