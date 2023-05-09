---
title: 使用nginx本地自定义域名
icon: shell
date: 2023-01-25
category: 后端
timeline: true
tag:
  - nginx
star: true
---

有些小伙伴可能需要在本地使用指定的域名来完成某些需求，这里使用Nginx加修改hosts来实现本地自定义域名。

以下方法在windows系统内进行

## 一、下载安装Nginx

Nginx命令：

* 进入Nginx安装目录后可运行以下命令

```
启动Nginx
start nginx.exe
```

```
关闭Nginx（快速停止nginx，可能并不保存相关信息）
nginx.exe -s stop
```

```
关闭Nginx（完整有序的停止nginx，保存相关信息）
nginx.exe -s quit
```

```
重新加载Nginx
nginx.exe -s reload
```

Nginx下载地址：http://nginx.org/en/download.html

> 注意：安装Nginx的路径里不要有中文和空格，不然后面使用会报错

## 二、配置Nginx

http的配置：

```
server {
    listen 80; # 端口号
    server_name test.com; # 域名解析
    location / {
        proxy_pass http://127.0.0.1:8084; # 重点是这里后面的端口号是你本地启动的服务的端口号
    }
}
```

https的配置：

```
server {
        listen       443 ssl;
        server_name  test.com;

        ssl_certificate      D:/nginx-1.23.3/ssl/fetie.crt;	#用openssl生成
        ssl_certificate_key  D:/nginx-1.23.3/ssl/fetie.key;	#用openssl生成

      	ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
	
	location / {
          proxy_redirect off;
          proxy_set_header Host               $host;
          proxy_set_header X-Real-IP          $remote_addr;
          proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto  $scheme;
          proxy_read_timeout          1m;
          proxy_connect_timeout       1m;
          proxy_pass  http://127.0.0.1:8084; # 重点是这里后面的端口号是你本地启动的服务的端口号
      }
}
```

> 注意：本地启动的服务端口号不能是80

## 三、启动服务

前端项目配置：

```
...

server: {
    // host: 'localhost',
    host: '0.0.0.0',	//这种写法可以支持ip
    port: 8084,
    
...
```

启动Nginx：

```
start nginx.exe
```

## 四、修改hosts

ip+域名（本地IP）

```
192.168.10.90 test.com
127.0.0.1 test.com
```

hosts配置好后，就可以用test.com去访问项目

*如果开启无线则连接这一网络的都可通过该域名进行访问*

> 注意：每次启动前端服务后ip地址可能会变，注意修改hosts

如全部配好后输入域名还无法访问需要清除浏览器缓存