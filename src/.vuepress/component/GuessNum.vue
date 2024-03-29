<template>
  <div class="guess-num">
    <el-collapse>
      <el-collapse-item name="1">
        <template #title>
          <div class="rule-title">游戏规则</div>
        </template>
        <div class="indent">
          计算机会出好一个在0到9之间且没有重复的4个数，你在猜测时会进行一些提示。
        </div>
        <div class="indent">
          每猜一个数字，会根据这个数字给出几A几B，其中A前面的数字表示位置正确的数的个数，而B前的数字表示数字正确而位置不对的数的个数。
        </div>
        <div class="indent">
          如正确答案为 5234，而你猜的是 5346，则是
          1A2B，其中有一个5的位置对了，记为1A，而3和4这两个数字对了，而位置没对，因此记为
          2B，合起来就是 1A2B。根据提示的几A几B继续猜，直到猜中（即 4A0B）为止。
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="btn">
      <el-button style="margin-bottom: 20px" type="warning" @click="resetNumber">重新开始</el-button>
    </div>
    <div class="form">
      <el-input
        v-model="guessNumber"
        @keyup.enter.native="submitNumber"
        maxlength="8"
        clearable
        placeholder="请输入你猜测的数字"
      />
    </div>
    <div class="num">
      <div v-for="(item, index) in guessTip" :key="index">
        <div>
          {{ item }}
        </div>
      </div>
    </div>
    <div v-show="tipCount">
      <el-alert :title="successTip" type="success" show-icon></el-alert>
    </div>
    <div class="btn">
      <el-button type="primary" @click="submitNumber"> 确 认 </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'

const guessNumber = ref('') // 猜测的数字
const correctNumber = ref('') // 正确数字
const guessTip = ref<string[]>([]) // 猜测后的提示
const tipCount = ref(0)

const successTip = computed(() => {
  if (tipCount.value === 1) {
    return 'shit，走狗屎运，居然一次就中！'
  }
  else if (tipCount.value >= 2 && tipCount.value <= 8) {
    return '可以啊，有点实力！'
  }
  else if (tipCount.value > 8) {
    return '没想到最后还是被你猜中了！'
  }
})

watch(guessNumber, (n) => {
  guessNumber.value = n.replace(/[^\d]/g, '')
})

function createNumber() {
  const count = 9
  // 原始数组
  const original = []
  // 给原始数组original赋值
  for (let i = 0; i <= count; i++) {
    original[i] = i
  }

  // 排序
  original.sort(() => {
    return 0.5 - Math.random()
  })
  // 输出
  correctNumber.value = original.slice(0, 4).join('')

  console.log(correctNumber.value)
}

// 确认提交
function submitNumber() {
  const guessNumberArr = guessNumber.value.split('')
  if (
    guessNumberArr.length !== 4
    || checkRepeatNum(JSON.parse(JSON.stringify(guessNumberArr)))
  ) {
    ElMessage.warning('请输入四位不重复数字')
    return
  }
  let a = 0
  let b = 0
  for (let i = 0; i < 4; i++) {
    if (correctNumber.value.indexOf(guessNumberArr[i]) === i) {
      a++
    }
    else if (correctNumber.value.includes(guessNumberArr[i])) {
      b++
    }
  }
  const res = `${guessNumber.value}\n${a}A${b}B`
  guessTip.value.push(res)

  if (a === 4) {
    tipCount.value = guessTip.value.length
  }
}

// 检测数字是否重复
function checkRepeatNum(arr: number[]) {
  const newArr = arr.sort()
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      return true
    }
  }
  return false
}

// 重新开始
function resetNumber() {
  guessNumber.value = ''
  correctNumber.value = ''
  guessTip.value = []
  tipCount.value = 0
  createNumber()
}

onMounted(() => {
  createNumber()
})
</script>

<style lang="less" scoped>
.guess-num {
  margin: 0 auto;
  max-width: 800px;
  > div {
    margin-bottom: 20px;
  }
  .rule-title {
    color: #333;
    font-weight: bold;
  }
  .indent {
    text-indent: 2em;
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    .el-input {
      width: 200px;
    }
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 25%;
      min-width: 100px;
      text-align: center;
      margin-bottom: 10px;
    }
  }
  .btn {
    text-align: center;
  }
}
</style>
