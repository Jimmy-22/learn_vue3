<template>
<Rate :value="1" />
<Rate :value="4" theme='black'/>
<Rate :value="3" theme='blue'/>
</template> 

<script setup>
import { ref } from 'vue';
import Rate from '../components/Rate.vue'

let score = ref(1)

</script>