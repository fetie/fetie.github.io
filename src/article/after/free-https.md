---
title: linux免费配置https
icon: shell
date: 2022-09-10
category: 后端
timeline: true
tag:
  - https
star: true
---
  

### 一、准备工作

安装前，你需要开放443端口

```
# 查看开放端口
firewall-cmd --zone=public --list-ports 
#80/tcp 3306/tcp
#没有443时，添加443端口
firewall-cmd --zone=public --add-port=443/tcp --permanent
#重启才能生效，添加完重启
firewall-cmd --reload
#再次查看开放端口，发现已经有了443，准备工作就完成了
firewall-cmd --zone=public --list-ports 
#80/tcp 3306/tcp 443/tcp
```

### 二、安装配置

1.安装cerbot。cerbot是let's Encrypt推荐的管理客户端，可以自动续签

```
yum install certbot -y
```

2.生成证书

2.1不清楚自己网站根目录时这样生成

```
#先停用nginx
nginx -s stop
#再生成证书，需要根据自己的域名修改
certbot certonly --standalone -d domain.com -d www.domian.com
```

2.2知道网站根目录时这样生成

```
#需要根据自己的域名修改，这里的根目录是 /var/www/domain
certbot certonly --webroot -w /var/www/domain -d domain.com -d www.domain.com
```

不出意外，证书就生成了，一般会放在 /etc/letsencrypt/live 目录内

3.配置nginx

```
# 将listen 80部分按自己的域名做如下修改，去掉location / 及 location /api/ 等部分
    server {
        listen       80;
        listen       [::]:80;
        server_name www.domain.com domain.com;
        add_header Strict-Transport-Security max-age=15768000;
        return 301 https://$server_name$request_uri;  #重定向到https
    }

#增加一个listen 443，按自己域名做如下修改。将原listen 80内的 location / 及 location /api/ 等部分copy过来
  server {
    listen 443 ssl http2;
    server_name www.domain.com domain.com;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    root /var/www/domain;
    ssl_certificate /etc/letsencrypt/live/domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/domain.com/privkey.pem;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-RC4-SHA:!ECDHE-RSA-RC4-SHA:ECDH-ECDSA-RC4-SHA:ECDH-RSA-RC4-SHA:ECDHE-RSA-AES256-SHA:HIGH:!RC4-SHA:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!CBC:!EDH:!kEDH:!PSK:!SRP:!kECDH;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 60m;

    location / {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://nuxtapp; #反向代理nuxt
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
    }

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    error_page 404 /404.html;
    location = /404.html {
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }
  }
```

5.重启nginx

```
nginx -s reload
```

6.nginx重启报错

`nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)`

```
#重新指定启动之时加载的配置文件
nginx -c /usr/local/nginx/conf/nginx.conf
#重启
nginx -s reload
```

刷新页面，https已经生效了

6.Let's Encrypt默认3个月过期，需要我们设置cerbot客户端，让其自动更新证书，这里需要用到 crontab

写个定时脚本

```
#!/bin/bash
nginx -s quit
certbot renew --force-renewal --renew-hook "nginx -s reload" > /usr/shell/ssl_update.log 3>&1 &
```

```
# 终端输入 crontab -e
crontab -e
#输入i，进入插入模式，按如下格式写上更新命令，意思是每个月1号凌晨3点更新
0 0 3 * * root /usr/shell/renew_ssl.sh > /dev/null 2>&1 &
#按住shfit，输入
:wq
```

### 三、自动更新失败

```
#先停用nginx
nginx -s stop

#重新生成证书
certbot certonly --standalone -d domain.com -d www.domian.com -d cdn.domian.com

#重启nginx
nginx -s reload

#如果重启报错
nginx -c /usr/local/nginx/conf/nginx.conf
#重启nginx
nginx -s reload
```



