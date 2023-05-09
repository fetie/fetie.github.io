---
title: scss速查笔记
icon: chrome
date: 2021-02-10
category: 前端
timeline: true
tag:
  - scss
star: false
---

## 安装配置

安装css-loader、style-loader、node-sass、sass-loader

```
npm install css-loader style-loader --save-dev
npm install node-sass sass-loader --save-dev
```

在webpack.config.js配置文件中添加对应的loader

```js
module: {
	rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader','sass-loader']
        }
	]
},
```



## 1.变量

* 多个同名变量使用最后那个

````scss
$nav-color: #F90;	
nav {
  $width: 100px;	//可以出现在任何形式的{...}中
  width: $width;
  color: $nav-color;
  border: 1px solid $nav-color;
  background: $nav_color;	//中划线和下划线相等，可以互换
}

//编译后

nav {
  width: 100px;
  color: #F90;
  border: 1px solid #F90;
  background: #F90;
}
````

--------------------------------------------------

## 2.嵌套规则

### 2.1 正常嵌套 

````scss
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
 /* 编译后 */
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
````

### 2.2 &嵌套 

````scss
//使用:hover这种伪类要使用&标识符
//&标识符会被父选择器直接替换，而不是拼接
article a {
  color: blue;
  &:hover { color: red }
}
 /* 编译后 */
article a { color: blue }
article a:hover { color: red }
````

### 2.3 群组嵌套

````scss
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
 /* 编译后 */
.container h1, .container h2, .container h3 { margin-bottom: .8em }


nav, aside {
  a {color: blue}
}
 /* 编译后 */
 nav a, aside a {color: blue}
````

 ### 2.4 源生css的>、+和~嵌套

* 子组合选择器>	一个元素的直接子元素		article > section
* 同层相邻组合选择器+		紧跟在一个元素后的同层的元素		header + p
* 同层全体组合选择器~		跟在一个元素后的所有同层元素	article ~ article

 ````
article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}
 /* 编译后 */
article ~ article { border-top: 1px dashed #ccc }
article > footer { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }
 ````

### 2.5 属性嵌套

````scss
//把属性名从-的地方断开
nav {
  border: {
  style: solid;
  width: 1px;
  color: #ccc;
  }
}
 /* 编译后 */
nav {
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
}

nav {
  border: 1px solid #ccc {
  left: 0px;
  right: 0px;
  }
}
 /* 编译后 */
nav {
  border: 1px solid #ccc;
  border-left: 0px;
  border-right: 0px;
}
````

--------------------------------------------------

## 3.@import导入sass文件

* sass的@import规则在生成css文件时就把相关文件导入进来
* sass的@import规则并不需要指明被导入文件的全名，可以省略.sass或.scss文件后缀
* 局部文件：专门为@import命令而编写的sass文件，并不需要生成对应的独立css文件
* sass局部文件的文件名以下划线开头
* @import一个局部文件时可省略下划线

### 3.1 嵌套导入

```scss
/*局部文件：_blue-theme.scss*/
aside {
  background: blue;
  color: white;
}

.blue-theme {@import "blue-theme"}	//可在css样式内导入
 /* 编译后 */
.blue-theme {
  aside {
    background: blue;
    color: #fff;
  }
}
```

### 3.2 原生的CSS导入

**以下三种情况会使用原生的css导入**

* 被导入文件的名字以.css结尾；
* 被导入文件的名字是一个URL地址（比如http://www.sass.hk/css/css.css），由此可用谷歌字体API提供的相应服务；
* 被导入文件的名字是CSS的url()值。

--------------------------------------------------

## 4.静默注释//

```scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```

--------------------------------------------------

## 5.混合器@mixin和@include

* 混合器使用@mixin标识符定义，@include使用，可以实现大段样式的重用

### 5.1 使用混合器

```scss
@mixin no-bullets {
  list-style: none;
  li {
    list-style-image: none;
    list-style-type: none;
    margin-left: 0px;
  }
}
ul.plain {
  color: #444;
  @include no-bullets;
}

 /* 编译后 */
ul.plain {
  color: #444;
  list-style: none;
}
ul.plain li {
  list-style-image: none;
  list-style-type: none;
  margin-left: 0px;
}
```

### 5.2 混合器传参

```scss
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
a {
  @include link-colors(blue, red, green);
}
/*下面这种使用混合器的方法可以不用考虑参数顺序
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}
*/

 /* 编译后 */
a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }

//使用参数默认值
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
//如果像这样调用：@include link-colors(red) $hover和$visited也会被自动赋值为red。
```

--------------------------------------------------

## 6.选择器继承@extend

1.当某个类要对另一个类进行细化时就可以使用@extend

2.@extend背后最基本的想法是，如果.seriousError @extend .error， 那么样式表中的任何一处.error都用.error.seriousError这一选择器组进行替换

3.跟混合器相比，继承生成的css代码相对更少

4.继承遵从css层叠的规则

5.像#main .error这种选择器序列是不能被继承的

6.不要用后代选择器去继承

* 以下代码中，.seriousError将会继承样式表中任何位置处为.error定义的所有样式。以class="seriousError" 修饰的html元素最终的展示效果就好像是class="seriousError error"

```scss
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

* .seriousError不仅会继承.error自身的所有样式，任何跟.error有关的组合选择器样式也会被.seriousError以组合选择器的形式继承，如下代码:

```scss
//.seriousError从.error继承样式
.error a{  //应用到.seriousError a
  color: red;
  font-weight: 100;
}
h1.error { //应用到hl.seriousError
  font-size: 1.2rem;
}
```