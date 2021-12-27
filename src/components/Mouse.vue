<template>
  <h1>x: {{ x }}</h1>
  <h1>y: {{ y }}</h1>
</template>

<script setup>
import { useMouse } from '../utils/mouse'

let { x, y } = useMouse()
</script>
