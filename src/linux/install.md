---
title: linux软件安装
icon: linux
date: 2017-03-24
category: Linux
timeline: true
tag:
  - Linux
star: true
---

软件安装对于操作系统来说是常用的操作，那如何在Linux中使用命令进行软件安装呢？这里就带你来了解Linux中的软件如何进行安装、卸载、升级等管理。内容包括rpm命令管理、yum在线管理、源码包管理和脚本安装包。

## 一、软件包简介
![1.1.1_软件包分类](https://cdn.jsdelivr.net/gh/fetie/img/install/1.1.1_软件包分类.jpg)

![1.2.1_源码包优点](https://cdn.jsdelivr.net/gh/fetie/img/install/1.2.1_源码包优点.jpg)

![1.2.2_源码包缺点](https://cdn.jsdelivr.net/gh/fetie/img/install/1.2.2_源码包缺点.jpg)

![1.3.1_rpm包优缺点](https://cdn.jsdelivr.net/gh/fetie/img/install/1.3.1_rpm包优缺点.jpg)

## 二、rpm命令管理
![2.1.1_RPM包命名原则](https://cdn.jsdelivr.net/gh/fetie/img/install/2.1.1_RPM包命名原则.jpg)

![2.1.2_RPM包依赖性](https://cdn.jsdelivr.net/gh/fetie/img/install/2.1.2_RPM包依赖性.jpg)

![2.2.1_包全名与包名](https://cdn.jsdelivr.net/gh/fetie/img/install/2.2.1_包全名与包名.jpg)

![2.2.2_rpm安装命令](https://cdn.jsdelivr.net/gh/fetie/img/install/2.2.2_rpm安装命令.jpg)

![2.2.3_rpm包升级](https://cdn.jsdelivr.net/gh/fetie/img/install/2.2.3_rpm包升级.jpg)

![2.2.4_rpm卸载](https://cdn.jsdelivr.net/gh/fetie/img/install/2.2.4_rpm卸载.jpg)

![2.3.1_rpm查询是否安装](https://cdn.jsdelivr.net/gh/fetie/img/install/2.3.1_rpm查询是否安装.jpg)

![2.3.2_rpm查询软件包详细信息](https://cdn.jsdelivr.net/gh/fetie/img/install/2.3.2_rpm查询软件包详细信息.jpg)

![2.3.3_rpm查询包中文件安装位置](https://cdn.jsdelivr.net/gh/fetie/img/install/2.3.3_rpm查询包中文件安装位置.jpg)

![2.3.4_rpm查询系统文件属于哪个rpm包](https://cdn.jsdelivr.net/gh/fetie/img/install/2.3.4_rpm查询系统文件属于哪个rpm包.jpg)

![2.3.5_rpm查询软件包的依赖性](https://cdn.jsdelivr.net/gh/fetie/img/install/2.3.5_rpm查询软件包的依赖性.jpg)

![2.4.1_rpm包校验](https://cdn.jsdelivr.net/gh/fetie/img/install/2.4.1_rpm包校验.jpg)

![2.4.2_rpm包校验验证内容的8个信息](https://cdn.jsdelivr.net/gh/fetie/img/install/2.4.2_rpm包校验验证内容的8个信息.jpg)

![2.4.3_rpm包校验显示的文件类型](https://cdn.jsdelivr.net/gh/fetie/img/install/2.4.3_rpm包校验显示的文件类型.jpg)

![2.4.4_rpm包中文件提取](https://cdn.jsdelivr.net/gh/fetie/img/install/2.4.4_rpm包中文件提取.jpg)

![2.4.5_cpio命令](https://cdn.jsdelivr.net/gh/fetie/img/install/2.4.5_cpio命令.jpg)

![2.4.6_rpm包文件提取例子演示](https://cdn.jsdelivr.net/gh/fetie/img/install/2.4.6_rpm包文件提取例子演示.jpg)

## 三、yum在线安装
![3.1.1_yum源文件](https://cdn.jsdelivr.net/gh/fetie/img/install/3.1.1_yum源文件.jpg)

![3.2.1_光盘搭建yum源_挂载光盘](https://cdn.jsdelivr.net/gh/fetie/img/install/3.2.1_光盘搭建yum源_挂载光盘.jpg)

![3.2.2_光盘搭建yum源_使网络yum源失效](https://cdn.jsdelivr.net/gh/fetie/img/install/3.2.2_光盘搭建yum源_使网络yum源失效.jpg)

![3.2.3_光盘搭建yum源_使光盘yum源生效](https://cdn.jsdelivr.net/gh/fetie/img/install/3.2.3_光盘搭建yum源_使光盘yum源生效.jpg)

![3.3.1_常用yum命令](https://cdn.jsdelivr.net/gh/fetie/img/install/3.3.1_常用yum命令.jpg)

![3.3.2_yum命令安装](https://cdn.jsdelivr.net/gh/fetie/img/install/3.3.2_yum命令安装.jpg)

![3.3.3_yum命令升级](https://cdn.jsdelivr.net/gh/fetie/img/install/3.3.3_yum命令升级.jpg)

![3.3.4_yum命令卸载](https://cdn.jsdelivr.net/gh/fetie/img/install/3.3.4_yum命令卸载.jpg)

![3.3.5_YUM软件组管理命令](https://cdn.jsdelivr.net/gh/fetie/img/install/3.3.5_YUM软件组管理命令.jpg)

## 四、源码包安装
![4.1.1安装位置不同带来的影响](https://cdn.jsdelivr.net/gh/fetie/img/install/4.1.1安装位置不同带来的影响.jpg)

### 能否安两个一样的程序
拿apache举例  
用rpm安了一个apache，又用源码包安了一个apache。这样是可以安两个apache的，因为安装位置不同。  
但是启动只能启动一个，因为默认端口只有一个。你要是在重新开一个端口，那就意味着用户输网址时也要加这个端口，这是不可接受的。所以我们是不允许系统里装两个一样的程序。

![4.2.1_安装注意事项](https://cdn.jsdelivr.net/gh/fetie/img/install/4.2.1_安装注意事项.jpg)

![4.2.2_源码包安装过程](https://cdn.jsdelivr.net/gh/fetie/img/install/4.2.2_源码包安装过程.jpg)

![4.2.3_软件配置与检查_configure](https://cdn.jsdelivr.net/gh/fetie/img/install/4.2.3_软件配置与检查_configure.jpg)

![4.2.4_编译与安装](https://cdn.jsdelivr.net/gh/fetie/img/install/4.2.4_编译与安装.jpg)