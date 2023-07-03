# 通用

## 代入排除法

适用题型：

​	年龄问题

​	余数问题

​	多位数

​	不定方程

​	不会做的

## 数字特性

#### 1.奇偶特性

* 奇 ± 奇 = 偶

  奇 ± 偶 = 奇

  偶 ± 偶 = 偶

* 奇 × 奇 = 奇

  奇 × 偶 = 偶

  偶 × 偶 = 偶

适用题型：

1. 知差求和，知和求差
2. 2倍类 、平均分
3. 不定方程

#### 2.整除特性

一个数能被2（5）整除，末一位能被2（5）整除
一个数能被4（25）整除，末两位能被4（25）整除
一个数能被8（125）整除，末三位能被8（125）整除
一个数能被3（9）整除，其各位数字之和能被3（9）整除

#### 3.比例倍数特性

好像用的少，自己要有敏感性（适用人数、桌子之类，像钱，重量之类的可以用小数的不能用）

若a:b=m:n（m、n互质，m:n不能继续约分）
$$
{a \over b} = {m \over n} \\
a = {m \over n}*b
$$
则：

a是m的倍数

b是n的倍数

a+b是m+n的倍数

a-b是m-n倍数
$$
{a \over a+b} = {m \over m+n}
$$
例：

班级男女比例为7:4

男生人数一定是 7 的倍数
女生人数一定是 4 的倍数
总人数一定是 11 的倍数
男女之差一定是 3 的倍数
男生人数是总人数的7/11

## 方程

小技巧
$$
{a \over b}={c \over d}={a+c \over b+d}={a-c \over a-d}
$$

### 不定方程

#### 1.尾数法

如：3x+10y=41

* 10乘任何数尾数一定是0

* 5乘任何数尾数一定是0或者5

#### 2.倍数法

有两个是某个数的倍数，则剩下那个也一定是那个数的倍数

下面因为121是11倍数，11a也是11倍数，所以7b也一定是11倍数
$$
11a+7b=121 \\
7b=11(11-a)
$$

#### 3.奇偶法

如：3x+4y=20

3x和4y必须得是偶数才能得到20这个偶数

#### 4.代入法

# 工程问题

工程总=效率*时间

## 给定时间型

* 方法：
  * 直接赋值工程总量为时间的最小公倍数（不是最小，直接给公倍数也没问题）
  * 最小公倍数可以选最大的那个直接乘2、3、4、5，一般就出来了

## 效率制约型

1. 甲:乙=2:3
2. 提高2% 1:1.2=5:6
3. 42台收割机...（每台效率都是一样的）
4. 在**原有基础**上增长1.2倍。这里不是1.2，而是2.2（有陷阱）
5. 某一部分工程，甲5天，乙3天；效率比就是甲:乙=3:5（考的少）

# 行程问题

平均速度：a*b/((a+b)/2)

## 基础公式

路程=速度*时间

72千米/时=20米/秒

108千米/时=30米/秒

### 等距离平均速度

$$
{ \mathbf{V}_平 } = {2 \times \mathbf{V}_1 \times \mathbf{V}_2 \over \mathbf{V}_1+\mathbf{V}_2}
$$

1. 上下坡
2. 往返
3. 前半程，后半程

## 相对速度型

流水行船

相遇追及

![xiangyu](https://cdn.fetie.cn/shiyebian/xiangyu.png)
$$
{ \mathbf{S}_{相距} } = {(\mathbf{V}_1 + \mathbf{V}_2) \times t}
$$
![zhuiji](https://cdn.fetie.cn/shiyebian/zhuiji.png)
$$
{ \mathbf{S}_{追} } = {(\mathbf{V}_大 - \mathbf{V}_小) \times t}
$$
两端相遇

相遇次数N与路程S的关系为：(2N-1)S=相遇所走路程

# 排列组合

### 排列

A(array)：有顺序

6个人去一个窗口排队，排列组合如下
$$
A^6_6=6!=6 \times 5 \times 4 \times 3 \times 2 \times 1
$$
6个人选4个去一个窗口排队，排列组合如下
$$
A^4_6=6 \times 5 \times 4
$$

#### 相邻捆绑法

7个人去一个窗口排队，其中两个人必须挨着

先当成6个人排，再两个挨着的再排，结果如下
$$
A^6_6 \times A^2_2
$$

#### 不相邻插空法

6个人去一个窗口排队，其中两个人不能挨着

其余四人先排，排好后这个队伍会有5个空（每个人前后有个空），那两个不能挨着的在这5个空里选两个插入
$$
A^4_4 \times A^2_5
$$

#### 插板法

n个相同物（n-1个空），m个人分（插m-1块板），至少分一个
$$
C^{m-1}_{n-1}
$$

#### 错位排列

$$
D_2=1，D_3=2，D_4=9，D_5=44
$$



### 组合

C(combination)：没顺序
$$
{C^3_6}={A^3_6 \over A^3_3} \\
C^5_5=C^{10}_{10}=C^m_m=1 \\
C^7_{10}=C^3_{10}=C^n_m=C^{m-n}_m
$$

# 概率问题

$$
P=满足条件的情况数 \over 总的情况数
$$

![liangrenfendui3](https://cdn.fetie.cn/shiyebian/liangrenfendui3.png)

![liangrenfendui](https://cdn.fetie.cn/shiyebian/liangrenfendui.png)![liangrenfendui2](https://cdn.fetie.cn/shiyebian/liangrenfendui2.png)

![liangrenfendui4](https://cdn.fetie.cn/shiyebian/liangrenfendui4.png)

上面两个题目类型相同

![sunlv](https://cdn.fetie.cn/shiyebian/sunlv.png)

![choujiang](https://cdn.fetie.cn/shiyebian/choujiang.png)

### 分布乘法型

分步概率=满足条件的每个步骤概率之积

### 分类加法型

总体概率=满足条件的各种情况概率之和

### 逆向计算型

某事件的概率=1 - 该事件不发生的概率

# 经济利润问题

成本：100元

定价：150元

售价：150元

利率=利润/成本=50/100=50%（数量）

毛利率=利润/营收（资料）

![zuidashouru](https://cdn.fetie.cn/shiyebian/zuidashouru.png)

# 最值问题

## 最不利构造

![zuibuligouzao](https://cdn.fetie.cn/shiyebian/zuibuligouzao.png)

## 数列构造

特征：

最多（少）……最少（多）……

排名第……最多（少）……

![zuiduozuishao](https://cdn.fetie.cn/shiyebian/zuiduozuishao.png)

## 多集合反向构造

特征：

多集合题目中，出现，至少……都……的情况下

策略：

反向，求和，作差

![zhishaodou](https://cdn.fetie.cn/shiyebian/zhishaodou.png)

# 容斥问题

统计数据时，数据出现了重叠

解题原则：把重复的部分减去，变为一层

公式：

两者容斥：总数=a + b - 两者都有 + 都没有

三者容斥：

非标：总数=a + b + c - 只有两者 - 2 × 三者都有 + 都没有

标准：I=A+B+C-A∩B-B∩C-A∩C+A∩B∩C+M

![rchuatufa](https://cdn.fetie.cn/shiyebian/rchuatufa.png)

# 几何问题

## 周长

![jihe](https://cdn.fetie.cn/shiyebian/jihe.png)

## 面积

![mianji](https://cdn.fetie.cn/shiyebian/mianji.png)

![mianji2](https://cdn.fetie.cn/shiyebian/mianji2.png)

## 体积

![tiji1](https://cdn.fetie.cn/shiyebian/tiji1.png)

![tiji2](https://cdn.fetie.cn/shiyebian/tiji2.png)

## 勾股定理

![gougu](https://cdn.fetie.cn/shiyebian/gougu.png)

## 角度与三角形

![sanjiaoxin](https://cdn.fetie.cn/shiyebian/sanjiaoxin.png)

## 相似三角形

![xiangsi](https://cdn.fetie.cn/shiyebian/xiangsi.png)

## 等比缩放

![suofang](https://cdn.fetie.cn/shiyebian/suofang.png)



