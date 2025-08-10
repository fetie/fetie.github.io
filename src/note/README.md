---
title: fetie 的随笔
icon: note
category: 随笔
star: true
sticky: 19
date: 2021-03-20
timeline: false
description: 这里是 fetie 的随笔，记录了遇到的一些问题及好用的方法。
---

这里是 fetie 的随笔，记录了遇到的一些问题及好用的方法。

## 2021.03.20

### elementUI标签 \<el-scrollbar\> 

vue里使用该标签要使用`this.$refs.scrollbar.wrap.scrollTop`获取滚动条高度

## 2021 3.29

### el-form表单可以多层嵌套

* 多层嵌套需注意验证也需多层嵌套才能拦截错误
* 多个表单同一个ref是数组

### 限制字符输入

使用自定义指令限制输入

```
//只能输入数字
Vue.directive('numberOnly', {
  bind(el, binding, vnode) {
    let input = vnode.elm.children[0];  //element需要获取子元素
    input.addEventListener('compositionstart', () => {
      vnode.inputLocking = true
    })
    input.addEventListener('compositionend', () => {
      vnode.inputLocking = false
      input.dispatchEvent(new Event('input'))
    })
    input.addEventListener('input', () => {
      if(vnode.inputLocking) {
        return;
      }
      let oldValue = input.value;
      let newValue = input.value.replace(/[^\d]/g, '');
      if(newValue) {
        switch (binding.value) {
          case 'zeroBefore':
            break; // 数字随意输，不做处理，如 000013
          case 'zeroCan':
            newValue = Number(newValue).toString(); // 去掉开头0 正整数 + 0
            break;
          default :
            newValue = newValue.replace(/^\b(0+)/gi, ''); // （默认）去掉开头0 正整数
        }
      }
      // 判断是否需要更新，避免进入死循环
      if(newValue !== oldValue) {
        input.value = newValue
        input.dispatchEvent(new Event('input')) // 通知v-model更新
      }
    })
  }
})

//只能输入含两位小数的数字
Vue.directive('inputFloat', {
  inserted(el, binding, vnode) {
    let input = vnode.elm.children[0];  //element需要获取子元素
    input.addEventListener('compositionstart', () => {
      vnode.inputLocking = true
    })
    input.addEventListener('compositionend', () => {
      vnode.inputLocking = false
      input.dispatchEvent(new Event('input'))
    })
    input.addEventListener('input', () => {
      if(vnode.inputLocking) {
        return;
      }
      let oldValue = input.value;
      let newValue = input.value;
      newValue = newValue.replace(/[^\d.]/g, '');
      newValue = newValue.replace(/^\./g, '');
      newValue = newValue.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      newValue = newValue.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
      if(newValue) {
        let arr = newValue.split('.')
        newValue = Number(arr[0]) + (arr[1] === undefined ? '' : '.' + arr[1]) // 去掉开头多余的0
      }
      // 判断是否需要更新，避免进入死循环
      if(newValue !== oldValue) {
        input.value = newValue
        input.dispatchEvent(new Event('input')) // 通知v-model更新
      }
    })
    // input 事件无法处理小数点后面全是零的情况 因为无法确定用户输入的0是否真的应该清除，如3.02。放在blur中去处理
    input.addEventListener('blur', () => {
      let oldValue = input.value;
      let newValue = input.value;
      if(newValue) {
        newValue = Number(newValue).toString()
      }
      // 判断是否需要更新，避免进入死循环
      if(newValue !== oldValue) {
        input.value = newValue
        input.dispatchEvent(new Event('input')) // 通知v-model更新
      }
    })
  }
})
```

## 2021 3.31

### 因异步请求导致的页面闪烁问题

问题详情：页面上一个按钮在异步请求返回的数据为false显示新增，true显示编辑。因每次切换页面都要重新加载数据导致按钮在获取到数据之前显示的是新增，在获取到数据后才变成编辑。这种切换页面而按钮闪烁的情况会影响体验。

解决方案：使用vuex，异步方法在actions，通过mutations修改state值，并设置getters。mapGetters扩展到computed，mapActions扩展到methods。

### echarts图数据太多

通过设置dataZoom给x轴设置滚动条

```
dataZoom: [//给x轴设置滚动条
            {
                start:0,//默认为0
                end: this.dataLadder(xAxis.length),//xArraylength是x轴返回的数据的个数（百分比）,//默认为100
                startValue:0,
                endValue:14,//x轴返回的数据的个数(与上面相同功能，不过是直接的数量)
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                handleSize: 0,//滑动条的 左右2个滑动条的大小
                height: 10,//组件高度
                left: '10%', //左边的距离
                right: '10%',//右边的距离
                bottom: 26,//右边的距离
                borderColor: "#DCDFE6",
                fillerColor: '#DCDFE6',
                borderRadius:5,
                backgroundColor: '#F2F6FC',//两边未选中的滑动条区域的颜色
                showDataShadow: false,//是否显示数据阴影 默认auto
                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                realtime:true, //是否实时更新
                filterMode: 'empty',
                brushSelect:false,  //关闭刷选功能
            },
                //下面这个属性是里面拖到
            {
                type: 'inside',
                show: true,
                xAxisIndex: [0],
                zoomLock:true  //锁定选择区域，不能缩放
            },
          ],
```

## 2021 4.1

### ifame设置自适应高度

* iframe是异步加载，所以没法在iframe上直接设置类似max-height等样式。
* iframe如果在本地调试遇到跨域的问题可尝试使用nginx并设置对应域名的host

```
<iframe
    ref="tipContent"
    frameborder="0"
    name="tipContent"
    width="100%"
    :src="tipContentUrl"
    @load="handleIframeLoad"
    id="tipContentIframe"
    >
</iframe>

handleIframeLoad(){
      this.$nextTick(() => {
        let innerHeight=document.getElementById("tipContentIframe").contentWindow.document.getElementsByClassName("main")[0].offsetHeight    //获取iframe内部标签
        if(innerHeight>450) innerHeight=450

        document.getElementById("tipContentIframe").style.height = innerHeight+'px'		//设置iframe高度
      })
    },
```

### 电脑调试手机

1. 手机开启开发者模式并打开调试

2. 在谷歌浏览器打开`chrome://inspect/#devices`
3. 等页面中出现我们想要的webView后点击inspect（需要翻墙）
4. 手机做相应的操作浏览器上就会同步动作，这样就可以愉快的调试了

## 2021 4.2

### 文字没铺满就换行

1. 可能是因为设置了左右padding间距，左右间距改为0即可
2. 使用`word-break: break-all`也可能解决

### devServer配置代理（vue cli）

1. 配置代理可解决跨域问题
2. axios不能配置baseURL，不然代理不起作用

```
proxy: {
      '/api': { //匹配到/api开头的路径就进入代理
        target: 'http://192.1.2.75:8088/',  //代理的服务端地址
        secure:true ,//接受对方是https的接口
        changeOrigin:true.valueOf, // 是否需要跨域
        pathRewrite: {  // /api这个地址会被空字符替代
          '^/api': ''
        }
      }
    }
```

## 2021 4.6

### 添加click事件点击却没有反应

有可能是样式问题，其他元素使用了position定位挡住了添加click事件的元素而导致点击无效（因为没有点击到该事件）

## 2021 4.9

### echarts仪表盘

```
<div id="main"></div>

initEcharts(){
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;
      let _this = this
      let min=0
      let max=5000
      let allScore = this.baseInfo.allScore
      // let allScore = 1980000
      
      let processVal
      
      if(allScore<0){ //负数情况需特殊处理
        processVal=-4999
        min=-5000
        max=0
      }else{
        let maxValue = max*0.9    //大于90%进度条固定不动
        processVal=allScore>maxValue?maxValue:allScore
      }
      
      option = {
        series: [
          {
              type: 'gauge',
              startAngle: 200,  //这个和下面的end加起来等于180就能对齐,这种值为负数页面会被进度条覆盖
              endAngle: -20,
              min: min,
              max: max,
              splitNumber: 6,
              itemStyle: {
                  color: 'rgba(255,255,255,0.7)',
                  shadowColor: 'rgba(255,255,255,0.45)',
                  shadowBlur: 10,
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
              },
              progress: {
                  show: true,
                  roundCap: true,
                  width: 4,
              },
              pointer: {
                  length: 6,
                  width: 6,
                  icon:"circle",
                  offsetCenter: [0, '-95%'],
                  itemStyle: {
                    color: 'rgba(255,255,255,0.9)',
                    shadowColor: 'rgba(255,255,255,1)',
                    shadowBlur: 8,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0
                  }
              },
              axisLine: {
                  roundCap: true,
                  lineStyle: {
                      width: 4,
                      color: [
                          [1, "rgba(255,255,255,0.2)"]
                      ],
                  }
              },
              axisTick: {
                  splitNumber: 8,
                  length: 8,
                  lineStyle: {
                      width: 3,
                      color: 'rgba(255,255,255,0.4)'
                  }
              },
              splitLine: {
                  length: 10,
                  lineStyle: {
                      width: 0,
                      color: '#ccc'
                  }
              },
              axisLabel: {
                  distance: 30,
                  color: '#fff',
                  fontSize: 0
              },
              title: {
                  show: false
              },
              detail: { //仪表盘内的文案
                  width: '60%',
                  lineHeight: 40,
                  height: 40,
                  borderRadius: 8,
                  offsetCenter: [0, '-28%'],
                  valueAnimation: true,
                  formatter: function (value) {
                    value=allScore  //大于90%进度条固定不动，但值还是要变化
                    if(Math.abs(value)>=1000000 && Math.abs(value)<100000000){
                      value=(value/10000).toFixed(2)+'万'
                    }else if(Math.abs(value)>=100000000){
                      value=(value/100000000).toFixed(2)+'亿'
                    }else{
                      value=parseFloat(value)
                    }
                    return '{value|' + value + '\n}{title|有礼积分}{click|!}{time|\n评估时间：' + _this.baseInfo.sysTime+'}';
                  },
                  rich: {
                      value: {
                          fontSize: 28,
                          fontWeight: 'bolder',
                          color: '#fff',
                          padding: [15, 0, 0, 0]
                      },
                      title: {
                          fontSize: 16,
                          color: '#fff',
                          padding: [0, 5, 0, 0]
                      },
                      click:{
                        fontSize: 12,
                        color: '#fff',
                        borderRadius:7,
                        borderWidth:1,
                        borderColor:'#fff',
                        width:14,
                        height:14,
                        lineHeight:14,
                        // padding: [2, 0, 0, 0]
                        
                      },
                      time: {
                        padding: [10, 0, 0, 0],
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.69)',
                        lineHeight: 0,
                      }
                  }
              },
              data: [{
                  value: processVal  //大于90%进度条固定不动
              }]
          },
          /* {
               "type": "pie",
              radius: ['91%', '82%'],
               "hoverAnimation": false,
               startAngle: 200,
               endAngle: -20,
               "data": [{
                       "name": "",
                      "value": this.baseInfo.allScore / 5000,
                       "label": {
                           show: false
                       },
                       "labelLine": {
                           show: false
                       },
                       itemStyle: {
                           color: 'rgba(0,0,0,0)'
                       }
                   },
                   { //画中间的图标
                       "name": "",
                       "value": 0,
                       "label": {
                           position: 'inside',
                           backgroundColor: 'blue',
                           borderRadius: 16,
                           padding: 16,
                           borderWidth: 0,
                           borderColor: "blue"

                       }
                   }, {
                       "name": "",
                       value: 1.32 - this.baseInfo.allScore / 5000,
                       "label": {
                           show: false
                       },
                       "labelLine": {
                           show: false
                       },
                       itemStyle: {
                           color: 'rgba(255,255,255,0)'
                       }
                   }
               ]
          } */
        ]
      };

      option && myChart.setOption(option);
    },
```

## 2021 4.12

### 多三元运算符的使用

```
isAndroid ? '28302650' : isIOS ? '28328447' : '47130293'
```

## 2021 4.14

### vant 折叠面板自定义右侧图标

```
<van-collapse v-model="more" accordion>
  <van-collapse-item title="更多信息" name="1">
  <!-- 自定义右侧图标 -->
    <template #right-icon>
       <van-icon :name="more==1?'arrow-down':'arrow'" />
   </template>
    <div class="detail-container">
      内容
    </div>
  </van-collapse-item>
</van-collapse>
```

## 2021 4.16

### 不好调试的页面可加入下面代码

```
<script src="https://cdn.bootcdn.net/ajax/libs/vConsole/3.3.4/vconsole.min.js"></script>
<script>
    var vConsole = new VConsole();// 初始化
</script>
```

或者，下面这个（虽然显示更多内容，但会卡）

```
<script src="//cdn.bootcss.com/eruda/1.3.0/eruda.min.js"></script> 
<script>eruda.init();</script>
```



### 谷歌调试移动端添加新设备支持微信环境

![addDevice](./assets/addDevice.png)

```
Mozilla/5.0 (Linux; Android 9; VKY-AL00 Build/HUAWEIVKY-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2692 MMWEBSDK/200401 Mobile Safari/537.36 MMWEBID/4057 MicroMessenger/7.0.14.1660(0x27000EC6) Process/toolsmp NetType/WIFI Language/zh_CN ABI/arm64 WeChat/arm32 
```

## 2021 4.22

### 删除 node_modules

```
npm install rimraf -g 
// 使用命令删除 
rimraf node_modules // 也可以删除其它文件夹或文件
```

###  substring配合indexOf截取

```
var str=!###abcdefgh###!
str.substring(str.indexOf('!###')+3,str.indexOf('###!))    //abcdefgh
```

## 2021 5.6

### 判断整个页面是否显示

当切去其他标签页或打开其他软件应用挡住该页面时会触发该事件

```
window.addEventListener('visibilitychange',()=>{
  if(!document.hidden){	//显示
	//此处执行调用你想监听实时刷新的方法
  }
})
```

### 发同请求最好在请求链接后加清缓存操作

 ```
let getTimestamp=new Date().getTime();
xmlHttpRequest(window.BASEAPI + '/dingTalk/getJsApiToken?timestamp='+getTimestamp, {}, 'GET', false, res => {
  if (res.code == 200) {
    resolve(res.data)
  } else {
    resolve({})
  }
})
 ```

## 2021 5.8

### sublime迁移插件

1. 打开包安装目录，并返回上一级目录

```
点击菜单 Preferences -> Browser Packages
```

2. 将`Installed Packages`目录和`Packages`目录拷贝出来，并粘贴到新安装的`Sublime Text3`相同目录下即可完成迁移

## 2021 5.19

### 三角形

```
width:0;
height:0;
border-style:solid;
border-width:100px;
border-color:transparent transparent #ccc transparent;
transform:rotate(90deg)
```

```
width: 0;
height: 0;
border-left: 50px solid transparent;
border-right: 50px solid transparent;
border-bottom: 100px solid red;
```

### 多行省略

用flex布局不生效，可以在flex里在加个标签

```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

```
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

## 2021 5.22

### 自适应高度

如原图1125 * 352px的图片要自适应，注意这里的vw是自适应宽度

```
height: calc(100vw * 352 / 1125)
```

## 2021 6.3

### vue判断属性是否响应式

`console.log`打印后如果在set和get里有该属性那就是响应式的

## 2021 6.6

### 隐藏element upload的上传加号

在disabled时隐藏图片右边的上传的加号

```
/deep/ .is-disabled + .el-upload {
  display: none;
}
```

## 2021 6.17

### vue进行流excel下载

```
const http = axios.create({
  baseURL: window.BASEPATH, // process.env.NODE_ENV === 'production' ? window.BASEPATH : '/api',
  withCredentials: true,
  timeout: process.env.NODE_ENV === 'production' ? 5000000 : 500000, // 5000
  headers: {
    'Authorization': `Bearer ` + tk || '',
    'appId': PARAMS.appId || '',
    'orgId': PARAMS.orgId || '',
    'lesseeCode': PARAMS.lesseeCode || ''
  }
})
Vue.prototype.$exportExcel = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    http.get(url, {
      params,
      responseType: 'blob'	//重点
    }).then(res => {
      if (res.status == 200) {
        resolve(res.data)
      } else {
        ElementUI.Message.error(res.data.msg)
      }
    }).catch(err => {
      // ElementUI.Message.error('网络错误，请重试！')
      console.log(err)
      reject(err)
    })
  })
}
```

```
this.$exportExcel(window.EDUCATIONPATH + "PartyMember/excelout", {
        page_index: this.form.pageIndex,
        page_size: 999,
        name: this.form.name,
        id_card: this.form.id_card,
        dep_id: this.form.dep_id,
        xid: xids,
        zid: zids,
        cid: cids,
        xqid: xqids,
        source: 0,
      })
        .then((res) => {
          /* let blob = new Blob([res], { type: "application/vnd.ms-excel" }); // res就是接口返回的文件流了
          let objectUrl = URL.createObjectURL(blob);
          window.location.href = objectUrl; */
          let blob = new Blob([res])
          let downloadElement = document.createElement('a');
      　　let href = window.URL.createObjectURL(blob); //创建下载的链接
      　　downloadElement.href = href;
      　　downloadElement.download = '党员信息检索结果'+moment().format('YYYY-MM-DD-HH-mm-ss')+'.xlsx'; //下载后文件名
      　　document.body.appendChild(downloadElement);
      　　downloadElement.click(); //点击下载
      　　document.body.removeChild(downloadElement); //下载完成移除元素
      　　window.URL.revokeObjectURL(href); //释放掉blob对象
          
        })
        .catch((err) => {
          console.log(err);
        })
```

## 2021 6.24

### promise的then出错执行catch

`promise`的`then` 里的程序出错会执行`catch`里的程序

## 2021 7.1

### vue-router内嵌iframe页面，回退异常

1. 使用==parent.history.back()== ,最终采用的方案！！！

   window指的是当前帧,而parent指的是当前帧的父节点.
    因此,在正常情况下使用窗口.在处理iframe时使用parent
    如果您没有任何< iframe>然后去window.history.back()

2. 使用==history.lenght== 获取当前历史记录长度，对比一开始嵌套iframe时的历史记录长度，通过$router.go()实现

   ```
   // this.rlen 进入iframe嵌套页面之前历史记录长度
   let len = this.rlen - history.length - 1;//-1是不进入iframe页面的下级页面直接退出的话，执行后退一步的操作
   this.$router.go(len);
   ```

   ​	*注：history.length:浏览器历史列表中的元素数量*

   ​	*缺陷：如果你的iframe页面也有回退事件，这种方法可能就不适用（在iframe操作回退，最新的history.length并不会减少）*

3. 利用window.history.popState
   通过监听popState或pushState事件，做相应的处理，记得销毁

4. 如果是因为需要更换iframe地址引发的问题

   不要修改 iframe.src，而是删除旧 iframe 元素，新建一个 iframe 元素并替换它，这样不会产生 history。
   直接 createElement，替换原来的 iframe。

5.iframe 里面的链接用 location.replace 跳转，这样就只会有一个历史记录了

```csharp
<iframe ref="iframe"></iframe>

this.$refs.iframe.contentWindow.location.replace(src)
```

## 2021 7.6

### 左右两边缺一部分的边框

```
.btns::before{
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 16px;	//重点
    top: -40px;
    left: 16px;		//重点
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
```

### 返回上一页并刷新

```
window.location.href = document.referrer;	//document.referrer有可能是一个空字符
```

也可考虑在上一个页面使用路由守卫

```
beforeRouteEnter(to, from, next){
    if(from.name=='bindPhone'){
      console.log('abcdefg')
      location.reload()
    }else{
      next()
    }
  },
```

## 2021 7.29

### css各元素百分比

1. 子元素的height或width中使用百分比，是相对于子元素的直接父元素
2. 子元素的top和bottom如果设置百分比，则相对于直接非static定位(默认定位)的父元素的高度；left和right同理
3. 子元素的padding如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的width，而与父元素的height无关；margin同理
4. 设置border-radius为百分比，则是相对于自身的宽度；translate、background-size等同理

### 解决github访问慢

把github的host替换为

```
https://github.com.cnpmjs.org/
https://hub.fastgit.org/
https://github.wuyanzheshui.workers.dev/
```

## 2021 8.4

### vue解决的问题

1. 操作DOM的渲染效率问题
2. 业务分层（代码被分成了路由，视图，包等各个层级）

## 2021 8.5

### vue 指定的监听对象未变化却触发watch问题

```
data(){
	pagination: {
        pageIndex: 1, // 当前页
        pageSize: 20, // 每页显示多少条
        total: 0, // 总条数
        pageSizes: [20, 50, 100],
      }
},
created(){
	//虽然监听的是pagination.pageIndex，但下面改了total也会触发下面的watch
	this.pagination.total=1
},
watch: {
    "pagination.pageIndex": function (val) {
        console.log(val)
    }
}
```

## 2021 8.16

### 宏任务与微任务

宏任务：整体代码script，setTimeout，setInterval、setImmediate

微任务：原生Promise(有些实现的promise将then方法放到了宏任务中)、process.nextTick、MutationObserver

**先执行宏任务，在执行该宏任务下的所有微任务**

```
<script>
	console.log(0)
    setTimeout(() => {
    	console.log(1) 
    }, 0);

    new Promise((rej)=>rej(2)).then((data)=>
    	console.log(data)
    )
</script>
```

上述代码先输出2，在输出1（即执行了微任务在执行宏任务）？

出现这种情况的原因是因为整个script是一个宏任务，这里的实际执行顺序是：script(宏)→promise(微)→setTimeout(宏)

## 2021 9.5

### 监听与移除监听

写一个独立的方法才能两头都用

```
function savePoint(event){
	point.x=event.pageX
	point.y=event.pageY
}
window.addEventListener('click',savePoint)

window.removeEventListener('click',savePoint)
```

## 2021 9.26

### cls清屏

在命令行里`cls`命令可以清空屏幕

## 2021 9.30

### vue3 src里的require

vue3因不支持require不能写像``<img :src="require(`@/assets/imgs/${name}`)" alt="">``这种引入，替代方案：

```
<img :src="getImg(name)" alt="">

getImg(name){
  const path='/src/assets/imgs/'+name+'.png'
  const module=import.meta.globEager('/src/assets/imgs/*')
  return module[path].default
}
```

或者

```
<img :src="getImg(name)" alt="">

getImg(name){
    return new URL(`/src/assets/${name}.jpg`, import.meta.url).href
}
```



## 2021 10.25

### dotenv

该包可以将.env文件里的配置项加载到process.env里

.env

```
APP_PORT=3000
```

config.js

```
cosnt dotenv=require('dotenv')
dotenv.config()
module.exports=process.env
```

main.js

```
const { APP_PORT }=require(config)
```

### @media screen适应屏幕

```
//大于1723px的
@media screen and (min-width: 1723px) {
  .option-item {
    &:nth-child(2) {
      .label {
        width: 84px;
      }
    }
    &:nth-child(3) {
      .label {
        width: 56px;
      }
    }
  }
}
//大于1380px且小于1723px
@media screen and (min-width: 1380px) and (max-width: 1723px) {
  .option-item {
    &:nth-child(3) {
      .label {
        width: 84px;
      }
    }
  }
}
//小于1380px的用里面的样式
@media screen and (max-width: 1380px) {
  .option-item {
    &:nth-child(3) {
      .label {
        width: 56px;
      }
    }
  }
}
```

## 2021 11.5

### css object调整图片位置

```
//相当于background-size
object-fit: cover;
object-position: top;
//相当于background-position
```

## 2021 11.22

### 锚点定位

```
  //给加锚点的地方加如下样式则定位后会距上方50px
  position: relative;
  padding-top: 50px;
  margin-top: -50px;
```

## 2021 11.23

### 本地git推到远程git

1. 服务器与客户端执行`ssh-keygen -t rsa -C "a@fetie.cn"`生成一把密钥(id_rsa)，一把公钥(id_rsa.pub)。

2. 将客户端公钥拷贝到`/home/git/.ssh/authorized_keys`里，如有多个则一行一个。（windows为`C:\Users\fe\.ssh\`目录下）
3. 本地git添加remotes：`root@120.55.64.216:/opt/feBlogKoa`，注意这里的@前面为服务器的用户，如果设置了git用户就用git。
4. 直接push，如果拒绝，可以在服务器仓库内执行：`git config receive.denyCurrentBranch ignore`

## 2021 11.30

### 定时器ts定义

```
let timer:NodeJS.Timer | null = null;
clearInterval(Number(timer))	//清除时要转成number
timer = setInterval(() => {
    console.log('aaa')
}, 1000);
```

## 2021 12.6

### 超出隐藏无效

```
max-height:400px;
overflow:auto;
```

上面的代码没有起效有可能是里面的元素使用了**负**的`margin`，将其改成0或者正的即可

## 2021 12.16

### v-for内有多个ref

方法1：

```
<el-row v-for="(itemForm, i) in listForms" >
        <el-form :model="itemForm" :ref="'refForm'+index" ></el-form>
</el-row>
```

方法2：

```
<el-row v-for="(itemForm, i) in listForms">
    <el-form :model="itemForm" :ref="el => { if (el) listFormRefs[i] = el }">
    
    </el-form>
</el-row>

const listFormRefs = ref([]);
```

## 2021 12.28

### js获取精确宽高（小数点）

```
// 提供所有的元素属性
window.getComputedStyle(document.getElementById("test"))
```

```
// 提供宽高距离位置
// element.getBoundingClientRect()
$("#test")[0].getBoundingClientRect()
```

## 2022 2.8

### 未加载完而切换点击的问题

https://codepen.io/fetie/pen/VwrPdvz?editors=1111

```html
<button onclick="bb(1)">按钮1</button>
<button onclick="bb(2)">按钮2</button>
```

```js
var val=''
function bb(v){
  if(v==1){
    setTimeout(()=>{
      val='aa'
      console.log(val)
    },1000)
  }else{
    setTimeout(()=>{
      val='bb'
      console.log(val)
    },2000)
  }
}
```

上面在两秒内按照按钮1，按钮2，按钮1这样的顺序点完。会打印`aa` `aa` `bb`。但想要的效果是按照点击的顺序打印即：`aa` `bb` `aa` 

方法1：定义两个变量如`val1` `val2`

方法2：在点击后没打印前不能点击另一个按钮

方法3：切换点击后使用如`axios`取消前一个请求

## 2022 3.30

### vue方法保留原有参数并传额外参数

可在外包裹一层箭头函数

```
<upload
	v-for="item in list"
	@custom="(event)=>toUpload(event,item)"
	/>
```

## 2022 6.10

### 使用`flex:1`实现剩余宽度自适应

```
<div class="flex">
  <div class="first">
    <span>第一个固定宽度</span>
    <span>第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度第二个变换宽度</span>
  </div>
  <div class="sec">变换宽度</div>
</div>
```

```
.flex{
  display:flex;
  width:100%
}
.first{
  width:80%;	/*这个宽度可以决定最后一个变换宽度的最大宽度*/
  flex:1;	/*有这个属性才实现了第二个变换宽度*/
  display:flex;
}
.first span:first-child{
  max-width:120px;
  flex-shrink: 0;	/*让第一个固定宽度不会被后面的过长元素所挤压*/
  background-color:green;
}
.first span:last-child{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background-color:gray;
}

.sec{
  background-color:#ccc;
}
```

## 2022 8.5

### 滚动条悬浮

让滚动条像定位一样悬浮在页面上不占元素空间

```
overflow-y: overlay;
```

不过上面这个样式兼容性不太好，可如下使用

```
overflow-y: auto;
overflow-y: overlay;
```

## 2022 11.2

### 第三方库

1. `xe-utils`

   https://x-extends.github.io/xe-utils/#/

   有树形结构的相关方法

2. `@vueuse/core`

   https://vueuse.org/

## 2022 11.16

### 获取api返回值的ts类型

```
function getType(data) {
  if (typeof data === 'object') {
    if (typeof data.length !== 'undefined') {
      if (data.length > 0) {
        return `Array<${getType(data[0])}>`
      }
      else {
        return 'Array<any>'
      }
    }
    const keys = Object.keys(data)
    if (keys.length === 0) {
      return 'object'
    }
    let a = Object.keys(data).map((v) => {
      const type = getType(data[v])
      return `${v}: ${type}`
    }).join(',\n')
    a = `{\n${a}\n}`
    return a
  }
  else {
    return typeof data
  }
}
```

## 2022.11.24

### 防止控制台调试网站

**打开控制台的三种方法**

1. F12
2. 右键==》检查
3. 浏览器==》更多工具==》开发者工具（快捷键：ctrl+shift+i）

**由此产生的方法**

1. 阻止 F12 事件
2. 阻止右键事件
3. 因打开控制台会产生窗口变化，所以检查窗口是否变化，变的话就可以刷新页面或关闭窗口等操作去限制。但如果控制台是浮窗或者直接缩小窗口就不行

## 2023 2.17

### 正则多次匹配出错

```
let reg=/a/g
reg.test('ab')	//true
reg.test('abc')	//false 这里第二次匹配却出现了错误的结果
reg.lastIndex=0	//将lastIndex设为0再次匹配结果正确
reg.test('abc')	/true
```

## 2023 4.2

### 移动端rem根元素字体大小设置

```
html {
 font-size: calc(100vw / 3.75);
}

body {
  font-size: .14rem;
}
```

## 2023 4.21

### 本地打包后的dist可用nginx启动查看

nginx配置

```
#build打包后本地启动
server {

    listen       80;
    server_name  server.com;


    location / {
      #root   D:\opt\faith\faith-web-master\dist;
      root   D:\opt\faith\faith-web-admin\dist;
      index  index.html;
      try_files $uri $uri/ /index.html;
    }

    #接口代理
    location /prod-api {
      proxy_pass https://managetest.faith-m.cn;
    }
}
```

## 2023 4.25

### input输入类型限制 自定义指令包

```
npm install vue-el-input-directive
```

main.js

```
import  inputDirective from 'vue-el-input-directive'
Vue.use(inputDirective)
```

## 2023 7.25

### 使用async/await和for of让异步请求串行
```
//实现串行
async function awaitExe() {
  const arrs=['3','2','1','0']
  for (const arr of arrs) {
    await asyncFunc(arr);
  }
}
function noAwaitExe(){
  const arrs=['3','2','1','0']
  arrs.forEach(async (arr) => {
    await asyncFunc(arr);
  })
}

//模拟不同时长的异步请求
function asyncFunc(num){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(num)
      resolve()
    },num*1000)
  })
}

awaitExe()  //3 2 1 0
//noAwaitExe()  //0 1 2 3
```

## 2023 9.11

### 访问https网站显示“你的连接不是专用连接”解决方法
1. 调整键盘为英文输入状态
2. 鼠标点击当前页面任意位置，然后依次按键：thisisunsafe
3. 输入完成后，页面会自动刷新，即可正常访问。

## 2023 9.19

### css 伪类:has判断是否有某个元素，类似if

`div:has(+p)` 表示当 div 后面紧跟一个 p 时，选中 div

如下面想要实现当有el-input__count时再应用input样式

```
<div data-v-70788702="" class="el-input el-input--medium">
    <input type="text" autocomplete="off" maxlength="100" placeholder="请输入副标题" class="el-input__inner">
    <span class="el-input__suffix">
        <span class="el-input__suffix-inner">
            <span class="el-input__count"><span class="el-input__count-inner">
                0/100
              </span>
          </span>
      </span>
    </span>
</div>
```

```
.el-input input:has(+.el-input__suffix .el-input__count){
  padding-right: 50px;
}
```

## 2023 11.13

### $set设置失效

1. 可能是设置方法使用错误

```javascript
let data=[
{url:1},
{url:2},
]
this.$set(this.data[1], url, 3)	//该方法使用错误，不支持相应式

data[1]=3
this.$set(this.data, 1, {...this.data[1]})	//对数组进行操作则设置后的值支持相应式
```

2. 设置后页面没更新

   添加:key

   使用this.$forceUpdate()

## 2023 12.1

### 多图片链接批量下载

```javascript
import FileSaver from 'file-saver'
import JSZip from 'jszip'

saveImg() {
  if (this.imgList.length === 1) {
    location.href = this.currentImg
  } else {
    const zip = new JSZip()
    let flag = 0
    for (let i = 0; i < this.imgList.length; i++) {
      // 调用getBase64()方法,传入图片网络地址得到base64数据
      this.getBase64(this.imgList[i]).then(base64 => {
        base64 = base64.split('base64,')[1]
        zip.file(`invoice${i}.png`, base64, { base64: true })
        if (flag === this.imgList.length - 1) {
          zip.generateAsync({ type: 'blob' }).then((content) => {
            FileSaver.saveAs(content, `invoice_${new Date().getTime()}.zip`)
          })
        }
        flag++
      })
    }
  }
},
// 传入图片地址，返回base64格式数据
getBase64(img) {
  const image = new Image()
  image.crossOrigin = '*'// 解决图片跨域问题
  image.src = img
  return new Promise((resolve, reject) => {
    image.onload = () => {
      resolve(this.getBase64Image(image))
    }
  })
},

// 创建画布，将图片渲染到画布上，再将画布转为base64格式数据返回出来
getBase64Image(img, width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width || img.width
  canvas.height = height || img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  return canvas.toDataURL()
}
```
## 2024 4.17

### 固定宽度内元素自动均分宽度

```html
<div class="container">
  <div class="item">元素1</div>
  <div class="item">元素2</div>
  <div class="item">元素3</div>
  <!-- 更多元素 -->
</div>
```
```css
.container {
  display: flex; /* 使用Flexbox布局 */
  justify-content: space-between; /* 水平方向均分空间 */
  width: 固定宽度; /* 设置容器宽度 */
}
 
.item {
  flex: 1; /* 允许元素均分剩余空间 */
  /* 其他样式，如margin、padding等 */
}
```

## 2024 5.11

### `flex:1`的内部元素宽度过长

给`flex:1`的元素设置`overflow:hidden`

## 2025 7.01

### 带边框三角的气泡框
```html
<div class="shape"></div>
```

```css
.shape {
  width: 200px;
  height: 100px;
  border-radius: 8px;
  background: #faf8f4;
  border: 1px solid #e6d9b3;
  position: relative;
}
.shape::after {
  content:'';
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%) rotate(45deg);
  width: 15px;
  height: 15px;
  background: #faf8f4;
  border: 1px solid #e6d9b3;
  border-style: none none solid solid
}
```