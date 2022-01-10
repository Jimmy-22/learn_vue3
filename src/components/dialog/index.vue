<template>
  <el-button @click="open">打开</el-button>
  <test-dialog v-model:visible="flag"></test-dialog>
</template>

<script setup>
import TestDialog from './child.vue'
import { watch, ref } from 'vue'

const flag = ref(false)

const open = () => {
  flag.value = true
}

watch(
  () => flag.value,
  (val) => {
    console.log('父组件监听flag:', val)
  }
)
</script>
