---
title: 解决重复点击
icon: chrome
date: 2021-12-15
category: 前端
timeline: true
star: true
---

前端会有这么个需求，由于AJAX提交数据为异步提交，在像用户注册或者支付这样的场景里，在用户点完按钮后，ajax返回结果前，是不允许用户在进行点击的。因此，在这里我总结了几个防止重复提交的方法：

## 1.css设置pointer-events

```
<!DOCTYPE html>
<html>
<head>
   <title>重复提交</title>
</head>
<body>
<div onclick="ajaxSubmit(this)">提交</div>
<script src="https://libs.cdnjs.net/jquery/3.5.0/jquery.js"></script>
<script type="text/javascript">
   function ajaxSubmit(obj){
      $(obj).css('pointer-events','none')    //失效
      $.ajax({
            url: 'url',
            type: 'post',
            data:{},
            dataType: 'json',
            complete: function (ret) {
               $(obj).css('pointer-events','auto')    //生效
            }
        })
   }
</script>
</body>
</html>
```

## 2.添加变量标志

```
<!DOCTYPE html>
<html>
<head>
   <title>重复提交</title>
</head>
<body>
<div onclick="ajaxSubmit(this)">提交</div>
<script src="https://libs.cdnjs.net/jquery/3.5.0/jquery.js"></script>
<script type="text/javascript">
   function ajaxSubmit(obj){
      // $(obj).css('pointer-events','none') //失效
      if($(obj).attr("disabled")==='disabled'){
            return false;
      }
      $(obj).attr("disabled", true);

      $.ajax({
            url: 'http://baidu.com',
            type: 'post',
            data:{},
            dataType: 'json',
            complete: function (ret) {
               // $(obj).css('pointer-events','auto') //生效
               $(obj).attr("disabled", false);
            }
        })
   }
</script>
</body>
</html>
```

## 3.禁用提交

### 3.1 非按钮

```
<!DOCTYPE html>
<html>
<head>
   <title>重复提交</title>
</head>
<body>
<div onclick="ajaxSubmit(this)">提交</div>
<script src="https://libs.cdnjs.net/jquery/3.5.0/jquery.js"></script>
<script type="text/javascript">
   function ajaxSubmit(obj){
      // $(obj).css('pointer-events','none') //失效

      // if($(obj).attr("disabled")==='disabled'){
      //       return false;
      // }
      // $(obj).attr("disabled", true);
    
      $(obj).attr('onclick',''); //先置为空
    
      $.ajax({
            url: 'http://baidu.com',
            type: 'post',
            data:{},
            dataType: 'json',
            complete: function (ret) {
               // $(obj).css('pointer-events','auto') //生效
    
               // $(obj).attr("disabled", false);
               
               $(obj).attr('onclick','ajaxSubmit(this)'); //再还原为原方法
            }
        })
   }
</script>
</body>
</html>
```

### 3.2 按钮

```
<!DOCTYPE html>
<html>
<head>
   <title>重复提交</title>
</head>
<body>
<!-- <div onclick="ajaxSubmit(this)">提交</div> -->
<input type="submit" value="提交" onclick="ajaxSubmit(this)" name="">
<script src="https://libs.cdnjs.net/jquery/3.5.0/jquery.js"></script>
<script type="text/javascript">
   function ajaxSubmit(obj){
      // $(obj).css('pointer-events','none') //失效

      // if($(obj).attr("disabled")==='disabled'){
      //       return false;
      // }
      // $(obj).attr("disabled", true);
    
      // $(obj).attr('onclick','');  //先置为空
    
      $(obj).attr("disabled", true);
    
      $.ajax({
            url: 'http://baidu.com',
            type: 'post',
            data:{},
            dataType: 'json',
            complete: function (ret) {
               // $(obj).css('pointer-events','auto') //生效
    
               // $(obj).attr("disabled", false);
    
               // $(obj).attr('onclick','ajaxSubmit(this)'); //再还原为原方法
    
               $(obj).attr("disabled", false);
    
            }
        })
   }
</script>
</body>
</html>
```

## 4.加遮罩

```
<!DOCTYPE html>
<html>
<head>
   <title>重复提交</title>
   <style type="text/css">
      .zhezhao{
         width: 100%;
         height: 100%;
         background: #000;
         opacity: 0.5;
         position: absolute;
         top: 0;
         left: 0;
         z-index: 1;
         display: none;
      }
   </style>
</head>
<body>
<!-- <div onclick="ajaxSubmit(this)">提交</div> -->
<input type="submit" value="提交" onclick="ajaxSubmit(this)" name="">
<div class="zhezhao">加载中</div>

<script src="https://libs.cdnjs.net/jquery/3.5.0/jquery.js"></script>
<script type="text/javascript">
   function ajaxSubmit(obj){
      // $(obj).css('pointer-events','none') //失效

      // if($(obj).attr("disabled")==='disabled'){
      //       return false;
      // }
      // $(obj).attr("disabled", true);
    
      // $(obj).attr('onclick','');  //先置为空
    
      // $(obj).attr("disabled", true);
    
      $('.zhezhao').show();
    
      $.ajax({
            url: 'http://baidu.com',
            type: 'post',
            data:{},
            dataType: 'json',
            complete: function (ret) {
               // $(obj).css('pointer-events','auto') //生效
    
               // $(obj).attr("disabled", false);
    
               // $(obj).attr('onclick','ajaxSubmit(this)'); //再还原为原方法
    
               // $(obj).attr("disabled", false);
    
               $('.zhezhao').hide();
    
            }
        })
   }
</script>
</body>
</html>
```