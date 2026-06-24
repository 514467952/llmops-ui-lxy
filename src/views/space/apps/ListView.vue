<script setup lang="ts">
import { useCounterStore } from '@/stores/counter.ts'

const counterStore = useCounterStore()
</script>

<template>
  <p>这里是AI应用列表</p>
  <p>数据库里的值是{{ counterStore.count }}</p>
  <router-link to="/">跳转到主页</router-link>
</template>

<style scoped></style>
