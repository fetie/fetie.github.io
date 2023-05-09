---
title: vue3+ts开发问题
icon: chrome
date: 2022-02-18
category: 前端
timeline: true
tag:
  - vue3
star: true
---

## 前言

本站的前端页面来自[Gblog](http://static.fengziy.cn/Gblog/)。不过我用vue3+ts重构了，用的Composition API。

本站的中国疆域历史地图全部来自[https://sdmtai.github.io/](https://sdmtai.github.io/)

git地址：[https://github.com/fetie/feBlogVue](https://github.com/fetie/feBlogVue)

vue3博客网址：[https://vue3.fetie.cn/](https://vue3.fetie.cn/)

基础部分就不再赘述，只讲一些开发该博客时遇到的比较特别的问题

## 前端主要技术

* "vue": "^3.2.6"
* "vue-router": "^4.0.11"
* "vuex": "^4.0.2"
* "vite": "^2.5.1"
* "typescript": "^4.3.2"
* "less": "^4.1.1"

## ts问题

由于ts用的不多，所以还是遇到了几个难题

### 1.defineProps类型为对象

如下所示，当`defineProps`为对象时要使用`as PropType`指定具体对象

```
import {articleData} from '@/api/types'
defineProps({
  post: {
    type: Object as PropType<articleData>,
    default:()=>{
      return {
        content: '',
        createTime: 0,
        updateTime: 0,
        title: '',
        author: '',
        sort: 0,
        viewNum: 0,
        banner: [0],
        _id: '',
      }
    }
  }
})
```

### 2.HTMLElement类型

`document.querySelector(".entry-content")`会被认为是空，所以加上非空断言操作符`!`。他的类型像下面定义即可

```
document.querySelector(".entry-content")!.querySelectorAll(`h${i}`) as NodeListOf<HTMLElement>
```

### 3.数组下标

这里的`to.params[index]`里`index`为数字类型需要指定，无法推断

```
let index = to.meta.params as number
    title = `${to.meta.title}:${to.params[index] || ''} - ${title}`
```

### 4.多个值

这里的`target.src`还有可能为空字符串，所以我也给赋值了，不然ts报错

```
const target=item.target as HTMLImageElement
target.src = target.dataset.src || '' //这里不加个空字符串ts会报错
```

## vuex

为了`useStore` 能正确返回类型化的 `store`，所以重新定义了`useStore`

```
import { createStore, useStore as baseUseStore, Store,GetterTree, MutationTree, ActionTree } from 'vuex'

// ...中间省略一万行代码

export function useStore () {
  return baseUseStore(key)
}
```

## 历史地图功能

### 1.使用@vueuse/core

为防止重复造轮子我用了这个，里面有很多功能，比如我下面用的防抖

```
import {useDebounceFn} from '@vueuse/core';
```

### 2.全屏滚动

本想用Fullpage.js，但发现想用免费版的还要申请。其他的能支持vue3的组件也不多了。本来打算使用`x-fullpage-vue`，但这个还有点问题。因为历史地图有八百多张，这个组件在计算高度时没有算小数导致滚动到后面偏移的就非常厉害。所以就改了`x-fullpage-vue`的这个问题重新发了一个`fe-fullpage-vue`。

下面是主要修改的代码：

```
state.nodesInfo = Array.from(children).map((item) => {
          // return item.clientHeight;  //这个属性没有小数不精确，当数组过大时会出现较明显的偏差
          return Number(item.getBoundingClientRect().height.toFixed(1)); //获取的高度会有小数点
        });
```

### 3.图片懒加载

使用`IntersectionObserver`进行图片懒加载，更加优雅，非常的清晰和简单，而且由于是原生的功能，不会引起性能损耗

```
onMounted(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(item => {
      // isIntersecting是一个Boolean值，判断目标元素当前是否可见
      if (item.isIntersecting) {
        store.dispatch('setLoading', true);
        const target=item.target as HTMLImageElement
        target.src = target.dataset.src || '' //这里不加个空字符串ts会报错
        // 图片加载后即停止监听该元素
        io.unobserve(item.target)
      }
    })
  }, {
    threshold: 1
  })

  const imgItemEl = document.querySelectorAll('.imgItem')
  const imgList = [...Array.from(imgItemEl)]
  // observe遍历监听所有img节点
  imgList.forEach(img => io.observe(img))

})
```
