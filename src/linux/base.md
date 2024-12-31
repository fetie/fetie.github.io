---
title: linux基础知识
icon: linux
date: 2017-01-14
category: Linux
timeline: true
tag:
  - Linux
star: true
---

以centos为例的Linux基础知识

<!-- more -->

## 一、系统安装
    1.Linux严格区分大小写
    2.Linux中所有内容以文件形式保存，包括硬件
    3.Linux不靠扩展名区分文件类型，是靠权限区分
    4.windows下的程序不能直接在Linux中安装和运行

Linux默认文件名后缀

![1.2 Linux默认文件名后缀](https://cdn.jsdelivr.net/gh/fetie/img/1.2-Linux默认文件名后缀.jpg)

![2.1-分区类型](https://cdn.jsdelivr.net/gh/fetie/img/2.1-分区类型.jpg)

![2.2.1-硬件设备文件名](https://cdn.jsdelivr.net/gh/fetie/img/2.2.1-硬件设备文件名.jpg)

![2.2.2-文件名意义](https://cdn.jsdelivr.net/gh/fetie/img/2.2.2-文件名意义.jpg)

![2.2.3-文件系统结构](https://cdn.jsdelivr.net/gh/fetie/img/2.2.3-文件系统结构.jpg)

![2.2.4-挂载](https://cdn.jsdelivr.net/gh/fetie/img/2.2.4-挂载.jpg)

![2.2.5-如何分区](https://cdn.jsdelivr.net/gh/fetie/img/2.2.5-如何分区.jpg)

###  第一次装注意项

如果是真正的电脑装Linux，开机后进入bios系统  选择boot，即开机启动项。一般硬盘启动都是在光盘启动前面的，而我们的系统在光盘里，所以要把光盘启动调到第一个，从光盘启动，这样才能启动我们的安装界面。装完了以后，第二次再重启时还要在进入bios界面。把硬盘启动调成第一个。否则每次重启都从光盘启动则每次都要重启安装。

如果是虚拟机的话，它会自动判断。如果硬盘里没有系统，就会自动从光盘启动。第二次因为有系统了，所以又会自动从硬盘启动。所以虚拟机安装不需要进入bios。

### xshell

Xshell链接不上的，试试ifconfig命令看看能不能看到eth0，看不到的话去dev目录下看看eth0是不是默认不随系统启动。如果不知道怎么看，可以用ifup eth0命令启动网卡，然后用ifconfig就能看到了。

第一次新建会话，名称随便，协议是ssh 主机是在Linux里显示的ipv4地址，端口22就行。然后点用户身份验证，写上在Linux里设置的用户名和密码就行。

## 二、命令格式

![3.1.1-命令提示符](https://cdn.jsdelivr.net/gh/fetie/img/3.1.1-命令提示符.jpg)

![3.1.2-命令格式](https://cdn.jsdelivr.net/gh/fetie/img/3.1.2-命令格式.jpg)

![3.1.3-查询目录中的内容LS](https://cdn.jsdelivr.net/gh/fetie/img/3.1.3-查询目录中的内容LS.jpg)

![3.1.4-权限](https://cdn.jsdelivr.net/gh/fetie/img/3.1.4-权限.jpg)

## 三、文件

![4.1.1-建立目录_mkdir](https://cdn.jsdelivr.net/gh/fetie/img/4.1.1-建立目录_mkdir.jpg)

![4.1.2-切换所在目录_cd](https://cdn.jsdelivr.net/gh/fetie/img/4.1.2-切换所在目录_cd.jpg)

![4.1.3-查询所在目录位置_pwd](https://cdn.jsdelivr.net/gh/fetie/img/4.1.3-查询所在目录位置_pwd.jpg)

![4.1.4-删除文件或目录_rm](https://cdn.jsdelivr.net/gh/fetie/img/4.1.4-删除文件或目录_rm.jpg)

![4.1.5-复制命令_cp](https://cdn.jsdelivr.net/gh/fetie/img/4.1.5-复制命令_cp.jpg)

![4.1.6-剪切或改名命令_mv](https://cdn.jsdelivr.net/gh/fetie/img/4.1.6-剪切或改名命令_mv.jpg)

![4.2.1-常用目录的作用](https://cdn.jsdelivr.net/gh/fetie/img/4.2.1-常用目录的作用.jpg)

![4.2.2-常用目录的作用](https://cdn.jsdelivr.net/gh/fetie/img/4.2.2-常用目录的作用.jpg)

![4.3.1-链接命令_ln](https://cdn.jsdelivr.net/gh/fetie/img/4.3.1-链接命令_ln.jpg)

![4.3.2-硬链接](https://cdn.jsdelivr.net/gh/fetie/img/4.3.2-硬链接.jpg)

![4.3.3-文件访问形式](https://cdn.jsdelivr.net/gh/fetie/img/4.3.3-文件访问形式.jpg)

![4.3.4-软链接](https://cdn.jsdelivr.net/gh/fetie/img/4.3.4-软链接.jpg)
> 注意：
> Linux输入命令时按两下tab键可以补全命令或目录

## 四、搜索
![5.1.1-locate命令格式](https://cdn.jsdelivr.net/gh/fetie/img/5.1.1-locate命令格式.jpg)

![5.1.2-locate搜索限制需遵从的配置文件](https://cdn.jsdelivr.net/gh/fetie/img/5.1.2-locate搜索限制需遵从的配置文件.jpg)

![5.2.1-搜索命令的命令whereis](https://cdn.jsdelivr.net/gh/fetie/img/5.2.1-搜索命令的命令whereis.jpg)

![5.2.2-搜索命令的命令which](https://cdn.jsdelivr.net/gh/fetie/img/5.2.2-搜索命令的命令which.jpg)

![5.2.3-path环境变量](https://cdn.jsdelivr.net/gh/fetie/img/5.2.3-path环境变量.jpg)

![5.3.1-find命令](https://cdn.jsdelivr.net/gh/fetie/img/5.3.1-find命令.jpg)

![5.3.2-Linux中的通配符](https://cdn.jsdelivr.net/gh/fetie/img/5.3.2-Linux中的通配符.jpg)

![5.3.3-find的其它查询方式1](https://cdn.jsdelivr.net/gh/fetie/img/5.3.3-find的其它查询方式1.jpg)

![5.3.4-find的其它查询方式2](https://cdn.jsdelivr.net/gh/fetie/img/5.3.4-find的其它查询方式2.jpg)

![5.3.5-find的其它查询方式3](https://cdn.jsdelivr.net/gh/fetie/img/5.3.5-find的其它查询方式3.jpg)

![5.3.6-find的其它查询方式4](https://cdn.jsdelivr.net/gh/fetie/img/5.3.6-find的其它查询方式4.jpg)

![5.4.1-搜索字符串命令grep](https://cdn.jsdelivr.net/gh/fetie/img/5.4.1-搜索字符串命令grep.jpg)


## 五、帮助
![6.1.1-帮助命令man](https://cdn.jsdelivr.net/gh/fetie/img/6.1.1-帮助命令man.jpg)

![6.1.2-man的级别](https://cdn.jsdelivr.net/gh/fetie/img/6.1.2-man的级别.jpg)

![6.1.3-查看命令拥有哪个级别的帮助](https://cdn.jsdelivr.net/gh/fetie/img/6.1.3-查看命令拥有哪个级别的帮助.jpg)

![6.1.4-查看命令相关的所有帮助](https://cdn.jsdelivr.net/gh/fetie/img/6.1.4-查看命令相关的所有帮助.jpg)

![6.2.1-shell内部命令帮助](https://cdn.jsdelivr.net/gh/fetie/img/6.2.1-shell内部命令帮助.jpg)

![6.2.2-详细命令帮助info](https://cdn.jsdelivr.net/gh/fetie/img/6.2.2-详细命令帮助info.jpg)
## 六、压缩
![7.1.1-常用压缩格式](https://cdn.jsdelivr.net/gh/fetie/img/7.1.1-常用压缩格式.jpg)

![7.1.2-.zip格式压缩](https://cdn.jsdelivr.net/gh/fetie/img/7.1.2-.zip格式压缩.jpg)

![7.1.3-.zip格式解压缩](https://cdn.jsdelivr.net/gh/fetie/img/7.1.3-.zip格式解压缩.jpg)

![7.1.4-.gz格式压缩](https://cdn.jsdelivr.net/gh/fetie/img/7.1.4-.gz格式压缩.jpg)

![7.1.5-.gz格式解压缩](https://cdn.jsdelivr.net/gh/fetie/img/7.1.5-.gz格式解压缩.jpg)

![7.1.6-.bz2格式压缩](https://cdn.jsdelivr.net/gh/fetie/img/7.1.6-.bz2格式压缩.jpg)

![7.1.7-.bz2格式解压缩](https://cdn.jsdelivr.net/gh/fetie/img/7.1.7-.bz2格式解压缩.jpg)

![7.2.1-打包命令tar](https://cdn.jsdelivr.net/gh/fetie/img/7.2.1-打包命令tar.jpg)

![7.2.2-解打包命令](https://cdn.jsdelivr.net/gh/fetie/img/7.2.2-解打包命令.jpg)

![7.2.3-.tar.gz压缩格式](https://cdn.jsdelivr.net/gh/fetie/img/7.2.3-.tar.gz压缩格式.jpg)

![7.2.4-.tar.bz2压缩格式](https://cdn.jsdelivr.net/gh/fetie/img/7.2.4-.tar.bz2压缩格式.jpg)

![7.2.5-多文件压缩与改变压缩位置](https://cdn.jsdelivr.net/gh/fetie/img/7.2.5-多文件压缩与改变压缩位置.jpg)

## 七、关机与重启
![8.1.1-shutdown命令](https://cdn.jsdelivr.net/gh/fetie/img/8.1.1-shutdown命令.jpg)

![8.1.2-shutdown命令实际操作](https://cdn.jsdelivr.net/gh/fetie/img/8.1.2-shutdown命令实际操作.jpg)

![8.1.3-其他关机命令](https://cdn.jsdelivr.net/gh/fetie/img/8.1.3-其他关机命令.jpg)

![8.1.4-其他重启命令](https://cdn.jsdelivr.net/gh/fetie/img/8.1.4-其他重启命令.jpg)

![8.1.5-系统运行级别](https://cdn.jsdelivr.net/gh/fetie/img/8.1.5-系统运行级别.jpg)

![8.2.1-退出登陆命令](https://cdn.jsdelivr.net/gh/fetie/img/8.2.1-退出登陆命令.jpg)

![8.2.2-系统运行级别的配置文件及查询](https://cdn.jsdelivr.net/gh/fetie/img/8.2.2-系统运行级别的配置文件及查询.jpg)

## 八、其他
![9.1.1-查询与自动挂载](https://cdn.jsdelivr.net/gh/fetie/img/9.1.1-查询与自动挂载.jpg)

![9.2.1-挂载命令格式](https://cdn.jsdelivr.net/gh/fetie/img/9.2.1-挂载命令格式.jpg)

![9.2.2--o的特殊选项](https://cdn.jsdelivr.net/gh/fetie/img/9.2.2--o的特殊选项.jpg)

![9.2.3-脚本文件的必须语句](https://cdn.jsdelivr.net/gh/fetie/img/9.2.3-脚本文件的必须语句.jpg)

![9.2.4--o用法举例](https://cdn.jsdelivr.net/gh/fetie/img/9.2.4--o用法举例.jpg)

![9.2.5--o_noexec选项](https://cdn.jsdelivr.net/gh/fetie/img/9.2.5--o_noexec选项.jpg)

![9.2.6-fstab文件永久挂载格式_](https://cdn.jsdelivr.net/gh/fetie/img/9.2.6-fstab文件永久挂载格式_.jpg)

![9.3.1-挂载光盘](https://cdn.jsdelivr.net/gh/fetie/img/9.3.1-挂载光盘.jpg)

![9.3.2-卸载光盘的命令](https://cdn.jsdelivr.net/gh/fetie/img/9.3.2-卸载光盘的命令.jpg)

![9.3.3-查看登陆用户信息](https://cdn.jsdelivr.net/gh/fetie/img/9.3.3-查看登陆用户信息.jpg)

![9.3.4-执行w后的结果](https://cdn.jsdelivr.net/gh/fetie/img/9.3.4-执行w后的结果.jpg)

![9.3.5-查询当前登陆和过去登陆的用户信息](https://cdn.jsdelivr.net/gh/fetie/img/9.3.5-查询当前登陆和过去登陆的用户信息.jpg)

![9.3.6-查看所有用户的最后一次登陆时间](https://cdn.jsdelivr.net/gh/fetie/img/9.3.6-查看所有用户的最后一次登陆时间.jpg)

## 九、shell基础
![10.1-shell概述](https://cdn.jsdelivr.net/gh/fetie/img/10.1-shell概述.jpg)

![10.2.1-echo输出命令](https://cdn.jsdelivr.net/gh/fetie/img/10.2.1-echo输出命令.jpg)

![10.2.2-echo输出命令_-e输出字符](https://cdn.jsdelivr.net/gh/fetie/img/10.2.2-echo输出命令_-e输出字符.jpg)

![10.2.3-echo输出命令_-e输出字符颜色](https://cdn.jsdelivr.net/gh/fetie/img/10.2.3-echo输出命令_-e输出字符颜色.jpg)

![10.2.4-脚本编程](https://cdn.jsdelivr.net/gh/fetie/img/10.2.4-脚本编程.jpg)

![10.2.5-脚本执行](https://cdn.jsdelivr.net/gh/fetie/img/10.2.5-脚本执行.jpg)

![10.3.1-查看与设定别名](https://cdn.jsdelivr.net/gh/fetie/img/10.3.1-查看与设定别名.jpg)

![10.3.2-别名永久生效与删除别名](https://cdn.jsdelivr.net/gh/fetie/img/10.3.2-别名永久生效与删除别名.jpg)

![10.3.4-命令生效顺序](https://cdn.jsdelivr.net/gh/fetie/img/10.3.4-命令生效顺序.jpg)

![10.3.5-常用快捷键](https://cdn.jsdelivr.net/gh/fetie/img/10.3.5-常用快捷键.jpg)

![10.4.1-历史命令](https://cdn.jsdelivr.net/gh/fetie/img/10.4.1-历史命令.jpg)

![10.4.2-修改历史命令的上限](https://cdn.jsdelivr.net/gh/fetie/img/10.4.2-修改历史命令的上限.jpg)

![10.4.3-历史命令的调用](https://cdn.jsdelivr.net/gh/fetie/img/10.4.3-历史命令的调用.jpg)

![10.4.4-命令与文件补全](https://cdn.jsdelivr.net/gh/fetie/img/10.4.4-命令与文件补全.jpg)

![10.5.1-标准输入输出](https://cdn.jsdelivr.net/gh/fetie/img/10.5.1-标准输入输出.jpg)

![10.5.2-输出重定向1](https://cdn.jsdelivr.net/gh/fetie/img/10.5.2-输出重定向1.jpg)

![10.5.2-输出重定向2](https://cdn.jsdelivr.net/gh/fetie/img/10.5.2-输出重定向2.jpg)

![10.5.3-输入重定向](https://cdn.jsdelivr.net/gh/fetie/img/10.5.3-输入重定向.jpg)

![10.6.1-多命令顺序执行](https://cdn.jsdelivr.net/gh/fetie/img/10.6.1-多命令顺序执行.jpg)

![10.6.2-多命令顺序执行_管道符](https://cdn.jsdelivr.net/gh/fetie/img/10.6.2-多命令顺序执行_管道符.jpg)

![10.6.3-管道符的应用小技巧](https://cdn.jsdelivr.net/gh/fetie/img/10.6.3-管道符的应用小技巧.jpg)

![10.7.1-通配符](https://cdn.jsdelivr.net/gh/fetie/img/10.7.1-通配符.jpg)

![10.7.2-bash中其它特殊符号](https://cdn.jsdelivr.net/gh/fetie/img/10.7.2-bash中其它特殊符号.jpg)

## 十、vim文本编辑

![11.1.1-vim编辑器的命令](https://cdn.jsdelivr.net/gh/fetie/img/11.1.1-vim编辑器的命令.jpg)

![11.1.2-vim编辑器底行模式常用命令](https://cdn.jsdelivr.net/gh/fetie/img/11.1.2-vim编辑器底行模式常用命令.jpg)

![11.1.3-vim编辑器命令模式常用命令1](https://cdn.jsdelivr.net/gh/fetie/img/11.1.3-vim编辑器命令模式常用命令1.jpg)

![11.1.3-vim编辑器命令模式常用命令2](https://cdn.jsdelivr.net/gh/fetie/img/11.1.3-vim编辑器命令模式常用命令2.jpg)

![11.1.4-vim编辑器常用指令总](https://cdn.jsdelivr.net/gh/fetie/img/11.1.4-vim编辑器常用指令总.jpg)

## 十一、磁盘管理
![11.2.1-磁盘管理](https://cdn.jsdelivr.net/gh/fetie/img/11.2.1-磁盘管理.jpg)

![11.2.2-磁盘管理](https://cdn.jsdelivr.net/gh/fetie/img/11.2.2-磁盘管理.jpg)

![11.3.1-MBR与GPT的不同](https://cdn.jsdelivr.net/gh/fetie/img/11.3.1-MBR与GPT的不同.jpg)

![11.3.2-parted分区1](https://cdn.jsdelivr.net/gh/fetie/img/11.3.2-parted分区1.jpg)

![11.3.2-parted分区2](https://cdn.jsdelivr.net/gh/fetie/img/11.3.2-parted分区2.jpg)

![11.3.2-parted分区3](https://cdn.jsdelivr.net/gh/fetie/img/11.3.2-parted分区3.jpg)

### 分区的格式化
格式
mkfs.ext4 /dev/sdb1

![11.3.4-为硬盘添加swap交换分区](https://cdn.jsdelivr.net/gh/fetie/img/11.3.4-为硬盘添加swap交换分区.jpg)

## 十二、用户管理

![12.1.1-用户和用户组相关文件1](https://cdn.jsdelivr.net/gh/fetie/img/12.1.1-用户和用户组相关文件1.jpg)

![12.1.1-用户和用户组相关文件2](https://cdn.jsdelivr.net/gh/fetie/img/12.1.1-用户和用户组相关文件2.jpg)

![12.2.1-用户组的基本命令](https://cdn.jsdelivr.net/gh/fetie/img/12.2.1-用户组的基本命令.jpg)

![12.2.2-用户的基本命令](https://cdn.jsdelivr.net/gh/fetie/img/12.2.2-用户的基本命令.jpg)

![12.2.3-禁止普通用户登陆服务器](https://cdn.jsdelivr.net/gh/fetie/img/12.2.3-禁止普通用户登陆服务器.jpg)

![12.2.4-用户的锁定与无密码登陆](https://cdn.jsdelivr.net/gh/fetie/img/12.2.4-用户的锁定与无密码登陆.jpg)