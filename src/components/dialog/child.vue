<template>
  <el-dialog
    title="提示"
    v-model="dialogVisble"
    width="30%"
    :before-close="close"
  >
    <span>这是一段信息</span>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取 消</el-button>

        <el-button type="primary" @click="close">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:visible'])

const dialogVisble = ref(false)
const close = () => {
  emits('update:visible', false)
}

watch(
  () => dialogVisble.value,
  (val) => {
    emits('update:visible', val)
  }
)

watch(
  () => props.visible,
  (val) => {
    dialogVisble.value = val
  }
)
</script>

<style scoped></style>
