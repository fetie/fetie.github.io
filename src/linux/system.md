---
title: linux系统管理
icon: linux
date: 2017-03-14
category: Linux
timeline: true
tag:
  - Linux
star: true
---

## 一、进程管理

![1.1.1_查看所有进程](https://cdn.fetie.cn/linux/system/1.1.1_查看所有进程.jpg)

![1.1.2_ps命令的输出1](https://cdn.fetie.cn/linux/system/1.1.2_ps命令的输出1.jpg)

![1.1.3_ps命令的输出2](https://cdn.fetie.cn/linux/system/1.1.3_ps命令的输出2.jpg)

![1.1.4_pstree命令查看进程树](https://cdn.fetie.cn/linux/system/1.1.4_pstree命令查看进程树.jpg)

### 服务器重启维护
服务器应定时的重启一下，这样出现的故障率就会小很多  
高负载，高压类服务器.如游戏，下载，电影服务器。应该一周重启一次  
低压类服务器，如网站，应一个月重启一次   有计划的重启是服务器维护的基本原则

![1.2.1_top查看系统健康状态](https://cdn.fetie.cn/linux/system/1.2.1_top查看系统健康状态.jpg)

![1.2.2_top命令第一行输出信息解释](https://cdn.fetie.cn/linux/system/1.2.2_top命令第一行输出信息解释.jpg)

![1.2.3_top命令第二行输出信息解释](https://cdn.fetie.cn/linux/system/1.2.3_top命令第二行输出信息解释.jpg)

![1.2.4_top命令第三行输出信息解释](https://cdn.fetie.cn/linux/system/1.2.4_top命令第三行输出信息解释.jpg)

![1.2.5_top命令第四行输出信息解释](https://cdn.fetie.cn/linux/system/1.2.5_top命令第四行输出信息解释.jpg)

![1.2.6_top命令第五行输出信息解释](https://cdn.fetie.cn/linux/system/1.2.6_top命令第五行输出信息解释.jpg)

![1.2.7_top查看进程输出重定向到文件](https://cdn.fetie.cn/linux/system/1.2.7_top查看进程输出重定向到文件.jpg)

![1.3.1_kill命令](https://cdn.fetie.cn/linux/system/1.3.1_kill命令.jpg)

![1.3.2_杀死进程命令的信号](https://cdn.fetie.cn/linux/system/1.3.2_杀死进程命令的信号.jpg)

![1.3.3_pkill命令](https://cdn.fetie.cn/linux/system/1.3.3_pkill命令.jpg)

![1.3.3_用pkill命令踢用户](https://cdn.fetie.cn/linux/system/1.3.3_用pkill命令踢用户.jpg)

![1.4.1_修改优先级NI值的注意事项](https://cdn.fetie.cn/linux/system/1.4.1_修改优先级NI值的注意事项.jpg)

![1.4.2_nice命令](https://cdn.fetie.cn/linux/system/1.4.2_nice命令.jpg)

![1.4.3_renice命令](https://cdn.fetie.cn/linux/system/1.4.3_renice命令.jpg)


## 二、工作管理
![2.1.1_工作管理的注意事项](https://cdn.fetie.cn/linux/system/2.1.1_工作管理的注意事项.jpg)

![2.1.2_把进程放入后台的命令](https://cdn.fetie.cn/linux/system/2.1.2_把进程放入后台的命令.jpg)

![2.1.2_查看后台的工作的命令jobs](https://cdn.fetie.cn/linux/system/2.1.2_查看后台的工作的命令jobs.jpg)

![2.1.3_fg将后台恢复到前台](https://cdn.fetie.cn/linux/system/2.1.3_fg将后台恢复到前台.jpg)

![2.1.4_bg将后台暂停的恢复到后台运行](https://cdn.fetie.cn/linux/system/2.1.4_bg将后台暂停的恢复到后台运行.jpg)

![2.1.5_后台命令脱离登陆终端执行的方法](https://cdn.fetie.cn/linux/system/2.1.5_后台命令脱离登陆终端执行的方法.jpg)

![2.1.6_nohup](https://cdn.fetie.cn/linux/system/2.1.6_nohup.jpg)

## 三、系统资源查看
![3.1.1_背_vmstat命令监控系统资源](https://cdn.fetie.cn/linux/system/3.1.1_背_vmstat命令监控系统资源.jpg)

![3.1.2_vmstat命令字段解释1](https://cdn.fetie.cn/linux/system/3.1.2_vmstat命令字段解释1.jpg)

![3.1.2_vmstat命令字段解释2](https://cdn.fetie.cn/linux/system/3.1.2_vmstat命令字段解释2.jpg)

![3.1.2_vmstat命令字段解释3](https://cdn.fetie.cn/linux/system/3.1.2_vmstat命令字段解释3.jpg)

![3.1.3_背_dmesg开机时内核检测信息](https://cdn.fetie.cn/linux/system/3.1.3_背_dmesg开机时内核检测信息.jpg)

![3.1.4_背_free命令查看内存使用状态](https://cdn.fetie.cn/linux/system/3.1.4_背_free命令查看内存使用状态.jpg)

![3.1.5_free命令参数分析](https://cdn.fetie.cn/linux/system/3.1.5_free命令参数分析.jpg)

![3.1.6_查看CPU信息](https://cdn.fetie.cn/linux/system/3.1.6_查看CPU信息.jpg)

![3.1.7_uptime命令](https://cdn.fetie.cn/linux/system/3.1.7_uptime命令.jpg)

![3.1.8_uname查看系统与内核相关的信息](https://cdn.fetie.cn/linux/system/3.1.8_uname查看系统与内核相关的信息.jpg)

![3.1.9_file判断当前系统的位数](https://cdn.fetie.cn/linux/system/3.1.9_file判断当前系统的位数.jpg)

![3.1.10_lsb_release查询发行版本](https://cdn.fetie.cn/linux/system/3.1.10_lsb_release查询发行版本.jpg)

![3.1.11_lsof命令](https://cdn.fetie.cn/linux/system/3.1.11_lsof命令.jpg)

## 四、系统定时任务
![4.1.1_确定at安装](https://cdn.fetie.cn/linux/system/4.1.1_确定at安装.jpg)

![4.1.2_at的访问控制](https://cdn.fetie.cn/linux/system/4.1.2_at的访问控制.jpg)

![4.1.3_at命令](https://cdn.fetie.cn/linux/system/4.1.3_at命令.jpg)

![4.1.4_at命令例子1](https://cdn.fetie.cn/linux/system/4.1.4_at命令例子1.jpg)

![4.1.5_at命令例子2](https://cdn.fetie.cn/linux/system/4.1.5_at命令例子2.jpg)

![4.1.6_其它at管理命令](https://cdn.fetie.cn/linux/system/4.1.6_其它at管理命令.jpg)

![4.2.1_确定crond服务是否启动](https://cdn.fetie.cn/linux/system/4.2.1_确定crond服务是否启动.jpg)

![4.2.2_crond配置文件访问控制](https://cdn.fetie.cn/linux/system/4.2.2_crond配置文件访问控制.jpg)

![4.2.3_crontab命令](https://cdn.fetie.cn/linux/system/4.2.3_crontab命令.jpg)

![4.2.4_crontab_e选项](https://cdn.fetie.cn/linux/system/4.2.4_crontab_e选项.jpg)

![4.2.5_crontab_e选项星号含义1](https://cdn.fetie.cn/linux/system/4.2.5_crontab_e选项星号含义1.jpg)

![4.2.6_crontab_e选项特殊符号](https://cdn.fetie.cn/linux/system/4.2.6_crontab_e选项特殊符号.jpg)

![4.2.7_crontab_e选项特殊符号例子](https://cdn.fetie.cn/linux/system/4.2.7_crontab_e选项特殊符号例子.jpg)

![4.2.8_crontab注意事项](https://cdn.fetie.cn/linux/system/4.2.8_crontab注意事项.jpg)

![4.3.1_crontab配置文件](https://cdn.fetie.cn/linux/system/4.3.1_crontab配置文件.jpg)

![4.3.2_执行系统的定时任务的方法](https://cdn.fetie.cn/linux/system/4.3.2_执行系统的定时任务的方法.jpg)

![4.4.1_anacron是什么](https://cdn.fetie.cn/linux/system/4.4.1_anacron是什么.jpg)

![4.4.2_anacron检测周期](https://cdn.fetie.cn/linux/system/4.4.2_anacron检测周期.jpg)

![4.4.3_anacron_centOS6与老版本的区别](https://cdn.fetie.cn/linux/system/4.4.3_anacron_centOS6与老版本的区别.jpg)

![4.4.4_anacron配置文件](https://cdn.fetie.cn/linux/system/4.4.4_anacron配置文件.jpg)

![4.4.5_举例daily工作来说明执行过程](https://cdn.fetie.cn/linux/system/4.4.5_举例daily工作来说明执行过程.jpg)