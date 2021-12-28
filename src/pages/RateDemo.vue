<template>
  <!-- <Rate :value="1" />
<Rate :value="4" theme='black'/> -->
  <h1>你的评分是 {{ score }}</h1>
  <Rate @update-rate="update" :value="score" theme="red" />
</template>

<script setup>
import { ref } from 'vue'
import Rate from '../components/Rate.vue'

let score = ref(1)

function update(num) {
  score.value = num
}
</script>
