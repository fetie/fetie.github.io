---
title: linux网络管理
icon: linux
date: 2017-03-18
category: Linux
timeline: true
tag:
  - Linux
star: true
---

Linux装好以后是不能和网络中的其他机器进行通信的，这里会为你解决Linux网络配置的问题。首先会介绍网络基础知识，然后进行IP地址的配置，并总结了在配置网络环境中经常遇到的问题。

## 一、网络基础

![1.1_OSI的七层框架](https://cdn.jsdelivr.net/gh/fetie/img/network/1.1_OSI的七层框架.jpg)

![1.2.1_tcpip模型与osi模型的对应](https://cdn.jsdelivr.net/gh/fetie/img/network/1.2.1_tcpip模型与osi模型的对应.jpg)

![1.2.2_tcpip三次握手](https://cdn.jsdelivr.net/gh/fetie/img/network/1.2.2_tcpip三次握手.jpg)

![1.2.3_数据封装过程](https://cdn.jsdelivr.net/gh/fetie/img/network/1.2.3_数据封装过程.jpg)

![1.2.4_ip包头](https://cdn.jsdelivr.net/gh/fetie/img/network/1.2.4_ip包头.jpg)

![1.2.5_ip地址分类](https://cdn.jsdelivr.net/gh/fetie/img/network/1.2.5_ip地址分类.jpg)

![1.3.1_子网掩码的使用](https://cdn.jsdelivr.net/gh/fetie/img/network/1.3.1_子网掩码的使用.jpg)

![1.3.2_子网掩码及子网规划](https://cdn.jsdelivr.net/gh/fetie/img/network/1.3.2_子网掩码及子网规划.jpg)

![1.4.1_tcp协议包头](https://cdn.jsdelivr.net/gh/fetie/img/network/1.4.1_tcp协议包头.jpg)

![1.4.2_udp协议包头](https://cdn.jsdelivr.net/gh/fetie/img/network/1.4.2_udp协议包头.jpg)

![1.4.3_常见端口号](https://cdn.jsdelivr.net/gh/fetie/img/network/1.4.3_常见端口号.jpg)

![1.4.4_netstat查看本机启用的端口](https://cdn.jsdelivr.net/gh/fetie/img/network/1.4.4_netstat查看本机启用的端口.jpg)

![1.5_网关示意图](https://cdn.jsdelivr.net/gh/fetie/img/network/1.5_网关示意图.jpg)


## 二、Linux网络配置
![2.1_ifconfig命令](https://cdn.jsdelivr.net/gh/fetie/img/network/2.1_ifconfig命令.jpg)

![2.2_setup工具](https://cdn.jsdelivr.net/gh/fetie/img/network/2.2_setup工具.jpg)

![2.3.1_网卡信息配置文件](https://cdn.jsdelivr.net/gh/fetie/img/network/2.3.1_网卡信息配置文件.jpg)

![2.3.2_主机名文件](https://cdn.jsdelivr.net/gh/fetie/img/network/2.3.2_主机名文件.jpg)

![2.4.1_DNS配置文件](https://cdn.jsdelivr.net/gh/fetie/img/network/2.4.1_DNS配置文件.jpg)

![2.4.2_配置linuxIP地址](https://cdn.jsdelivr.net/gh/fetie/img/network/2.4.2_配置linuxIP地址.jpg)

![2.4.3_启动网卡](https://cdn.jsdelivr.net/gh/fetie/img/network/2.4.3_启动网卡.jpg)

![2.4.5_修改UUID](https://cdn.jsdelivr.net/gh/fetie/img/network/2.4.5_修改UUID.jpg)

### 网络适配器
桥接：推荐用桥接。他是把虚拟机直接连到真实机上，即他就是局域网内独立的一台机器。优点是可以接入局域网跟外界通信；缺点是要占用一个与真实机同一网段的ip地址，可能造成ip地址冲突。  
NAT、host-only都只能和自己的真实机通信，不能和局域网内的其它机器通信  
NAT可以利用真实机的网卡上网，虽然不能和局域网内其它机器通信，但却可以上公网。  
host-only则只能跟真实机通信，跟公网和局域网都不行  

## 三、Linux网络命令
![3.1.1_关闭与启动网卡ifdown_ifup](https://cdn.jsdelivr.net/gh/fetie/img/network/3.1.1_关闭与启动网卡ifdown_ifup.jpg)

![3.1.2_查询网络状态netstat](https://cdn.jsdelivr.net/gh/fetie/img/network/3.1.2_查询网络状态netstat.jpg)

![3.1.3_查看网关](https://cdn.jsdelivr.net/gh/fetie/img/network/3.1.3_查看网关.jpg)

![3.1.4_查看网关route](https://cdn.jsdelivr.net/gh/fetie/img/network/3.1.4_查看网关route.jpg)

![3.1.5_查看DNS_nslookup](https://cdn.jsdelivr.net/gh/fetie/img/network/3.1.5_查看DNS_nslookup.jpg)

![3.2.1_ping命令](https://cdn.jsdelivr.net/gh/fetie/img/network/3.2.1_ping命令.jpg)

![3.2.2_telnet命令](https://cdn.jsdelivr.net/gh/fetie/img/network/3.2.2_telnet命令.jpg)

![3.2.3_traceroute命令](https://cdn.jsdelivr.net/gh/fetie/img/network/3.2.3_traceroute命令.jpg)

![3.2.4_wget下载命令](https://cdn.jsdelivr.net/gh/fetie/img/network/3.2.4_wget下载命令.jpg)

![3.2.5_tcpdump抓包命令](https://cdn.jsdelivr.net/gh/fetie/img/network/3.2.5_tcpdump抓包命令.jpg)

![4.1_ssh远程管理命令与scp传输文件命令](https://cdn.jsdelivr.net/gh/fetie/img/network/4.1_ssh远程管理命令与scp传输文件命令.jpg)